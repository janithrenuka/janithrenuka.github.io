/**
 * Project Loader Utility
 * Dynamically loads and renders projects from projects.json
 */

let allProjectsData = [];
let globalAssetPath = ''; // Stores prefix for images (e.g., '../' for subpages)

async function loadProjects(dataPath = 'data/projects.json', category = 'allprojects') {
    try {
        const response = await fetch(dataPath);
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        const data = await response.json();

        // Handle new object structure or legacy array structure
        allProjectsData = data[category] || (Array.isArray(data) ? data : []);
        return allProjectsData;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

function createProjectCard(project, assetPath = '') {
    globalAssetPath = assetPath;
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.setAttribute('data-project-type', project.type);
    card.setAttribute('data-app-type', project.appType.join(' '));
    card.setAttribute('data-id', project.id);

    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    card.innerHTML = `
        <p class="project-type">${project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project</p>
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tag-row" style="margin-bottom: 1.1rem;">
            ${techTags}
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
            <a href="${project.repo}" target="_blank" class="project-link">View Repo &#x2192;</a>
            ${project.images && project.images.length > 0 ? `<span class="project-gallery-icon" onclick="event.stopPropagation(); openGallery('${project.name}')">🖼️</span>` : ''}
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (e.target.closest('.project-link') || e.target.closest('.project-gallery-icon')) {
            return;
        }
        openProjectPreview(project.id);
    });

    return card;
}

function renderProjects(containerId, limit = null, filterFunc = null, assetPath = '') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    let projectsToRender = allProjectsData;

    if (filterFunc) {
        projectsToRender = projectsToRender.filter(filterFunc);
    }

    if (limit) {
        projectsToRender = projectsToRender.slice(0, limit);
    }

    projectsToRender.forEach(project => {
        container.appendChild(createProjectCard(project, assetPath));
    });

    // Re-run intersection observer if it exists
    if (window.revealObserver || window.revealEls) {
        const observer = window.revealObserver;
        if (observer) {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }
    }
}

function openProjectPreview(projectId) {
    const project = allProjectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectPreviewModal');
    if (!modal) return;

    document.getElementById('previewType').textContent = project.type.charAt(0).toUpperCase() + project.type.slice(1) + ' Project';
    document.getElementById('previewName').textContent = project.name;
    document.getElementById('previewDesc').textContent = project.description;
    document.getElementById('previewLink').href = project.repo;

    const tagsContainer = document.getElementById('previewTags');
    tagsContainer.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    modal.classList.add('active');
}

function closeProjectPreview() {
    const modal = document.getElementById('projectPreviewModal');
    if (modal) modal.classList.remove('active');
}

function openGallery(projectName) {
    const project = allProjectsData.find(p => p.name === projectName);
    if (!project) return;

    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const imagesContainer = document.getElementById('galleryImages');

    title.textContent = project.name + ' — Gallery';
    const images = project.images || [];

    if (images.length === 0) {
        imagesContainer.innerHTML = '<p class="no-images">No images available for this project yet.</p>';
    } else {
        imagesContainer.innerHTML = images.map(function (src) {
            return '<img src="' + globalAssetPath + src + '" class="gallery-img" alt="' + project.name + '">';
        }).join('');

        if (typeof attachGalleryImageListeners === 'function') {
            attachGalleryImageListeners();
        }
    }

    modal.classList.add('active');
}
