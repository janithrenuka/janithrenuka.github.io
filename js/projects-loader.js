/**
 * Project Loader Utility
 * Dynamically loads and renders projects from projects.json
 */

let allProjectsData = [];
let globalAssetPath = ''; // Stores prefix for images (e.g., '../' for subpages)

async function loadProjects(dataPath = 'data/projects.json', category = 'allprojects') {
    // Fallback: Check if PROJECTS_DATA is already defined globally
    if (typeof PROJECTS_DATA !== 'undefined' && PROJECTS_DATA[category]) {
        allProjectsData = PROJECTS_DATA[category];
        return allProjectsData;
    }

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

        // Final fallback in case fetch fails but PROJECTS_DATA exists (for safety)
        if (typeof PROJECTS_DATA !== 'undefined') {
            allProjectsData = PROJECTS_DATA[category] || (Array.isArray(PROJECTS_DATA) ? PROJECTS_DATA : []);
            return allProjectsData;
        }

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
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <a href="${project.repo}" target="_blank" class="project-link" onclick="event.stopPropagation();">View Repo &#x2192;</a>
            ${project.website ? `<a href="${project.website}" target="_blank" class="project-link" style="color: var(--accent-gold); border-color: var(--accent-gold);" onclick="event.stopPropagation();">View Site &#x2192;</a>` : ''}
            ${project.images && project.images.length > 0 ? `<span class="project-gallery-icon" onclick="event.stopPropagation(); openGallery('${project.name}')">🖼️</span>` : ''}
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (e.target.closest('.project-link') || e.target.closest('.project-gallery-icon')) {
            return;
        }

        // Calculate the base path for projects
        const projectPagePath = assetPath === '../' ? '../projects/index.html' : 'projects/index.html';
        const url = `${projectPagePath}?id=${project.id}`;
        window.open(url, '_blank');
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

    // Navigate to project page
    const projectPagePath = globalAssetPath === '../' ? '../projects/index.html' : 'projects/index.html';
    const url = `${projectPagePath}?id=${project.id}`;
    window.open(url, '_blank');
}
