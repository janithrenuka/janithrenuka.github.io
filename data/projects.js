/**
 * Projects data as a JavaScript object.
 * This is used as a fallback to avoid CORS errors when loading from file:// protocol.
 */
const PROJECTS_DATA = {
    "homepageprojects": [
        {
            "id": "im-system",
            "name": "IM System",
            "type": "group",
            "appType": [
                "web"
            ],
            "description": "Information & management system replacing the manual workflow in the Academic & Publication Division of UCSC. Full-featured web platform improving operational efficiency.",
            "tech": [
                "PHP",
                "HTML",
                "CSS",
                "MySQL"
            ],
            "repo": "https://github.com/janithrenuka/IMS_system",
            "website": "",
            "images": [
                "image/ims_system.png"
            ]
        },
        {
            "id": "smart-ride",
            "name": "Smart Ride",
            "type": "group",
            "appType": [
                "web",
                "mobile"
            ],
            "description": "Google Maps API-based bus ticketing system with web and mobile apps, simplifying public transport ticketing and providing real-time tracking for commuters.",
            "tech": [
                "PostgreSQL",
                "Express",
                "React",
                "Node.js",
                "Flutter"
            ],
            "repo": "https://github.com/Group-29-3rd-Year",
            "website": "",
            "images": []
        },
        {
            "id": "decathlon-ui",
            "name": "Decathlon UI",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "A polished Flutter UI for an online sports item shop, exploring modern mobile design patterns and e-commerce UX principles through self-driven learning.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/decathlon",
            "website": "",
            "images": [
                "image/decathlon/1.png",
                "image/decathlon/2.png",
                "image/decathlon/3.png",
                "image/decathlon/4.png",
                "image/decathlon/5.png",
                "image/decathlon/6.png"
            ]
        },
        {
            "id": "workout-app",
            "name": "Workout App",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "Daily workout and health schedule tracker built with Flutter. Clean interface for managing personal fitness routines and monitoring health goals day-to-day.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/exercise_app",
            "website": "",
            "images": [
                "image/workout/1.png",
                "image/workout/2.png",
                "image/workout/3.png",
                "image/workout/4.png",
                "image/workout/5.png"
            ]
        },
        {
            "id": "brick-bounce",
            "name": "Brick Bounce",
            "type": "individual",
            "appType": [
                "desktop"
            ],
            "description": "A classic 2D arcade game built from scratch in Unity. Explores game physics, collision detection, and interactive mechanics using C# scripting.",
            "tech": [
                "Unity",
                "C#"
            ],
            "repo": "https://github.com/janithrenuka/Brick-bounce-unity-2D",
            "website": "",
            "images": []
        },
        {
            "id": "book-manager",
            "name": "Book Manager",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "A Flutter app for managing book lists when visiting bookshops or book fairs. Create, organize, and track books with prices. Perfect for collectors and book enthusiasts to manage purchases.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/book_list",
            "website": "",
            "images": []
        }
    ],
    "allprojects": [
        {
            "id": "im-system",
            "name": "IM System",
            "type": "group",
            "appType": [
                "web"
            ],
            "description": "Information & management system replacing the manual workflow in the Academic & Publication Division of UCSC. Full-featured web platform improving operational efficiency.",
            "tech": [
                "PHP",
                "HTML",
                "CSS",
                "MySQL"
            ],
            "repo": "https://github.com/janithrenuka/IMS_system",
            "website": "https://janithrenuka.github.io/IMS_system",
            "images": [
                "image/ims_system.png"
            ]
        },
        {
            "id": "smart-ride",
            "name": "Smart Ride",
            "type": "group",
            "appType": [
                "web",
                "mobile"
            ],
            "description": "Google Maps API-based bus ticketing system with web and mobile apps, simplifying public transport ticketing and providing real-time tracking for commuters.",
            "tech": [
                "PostgreSQL",
                "Express",
                "React",
                "Node.js",
                "Flutter"
            ],
            "repo": "https://github.com/Group-29-3rd-Year",
            "website": "",
            "images": []
        },
        {
            "id": "decathlon-ui",
            "name": "Decathlon UI",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "A polished Flutter UI for an online sports item shop, exploring modern mobile design patterns and e-commerce UX principles through self-driven learning.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/decathlon",
            "website": "",
            "images": [
                "image/decathlon/1.png",
                "image/decathlon/2.png",
                "image/decathlon/3.png",
                "image/decathlon/4.png",
                "image/decathlon/5.png",
                "image/decathlon/6.png"
            ]
        },
        {
            "id": "workout-app",
            "name": "Workout App",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "Daily workout and health schedule tracker built with Flutter. Clean interface for managing personal fitness routines and monitoring health goals day-to-day.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/exercise_app",
            "website": "",
            "images": [
                "image/workout/1.png",
                "image/workout/2.png",
                "image/workout/3.png",
                "image/workout/4.png",
                "image/workout/5.png"
            ]
        },
        {
            "id": "brick-bounce",
            "name": "Brick Bounce",
            "type": "individual",
            "appType": [
                "desktop"
            ],
            "description": "A classic 2D arcade game built from scratch in Unity. Explores game physics, collision detection, and interactive mechanics using C# scripting.",
            "tech": [
                "Unity",
                "C#"
            ],
            "repo": "https://github.com/janithrenuka/Brick-bounce-unity-2D",
            "website": "",
            "images": []
        },
        {
            "id": "book-manager",
            "name": "Book Manager",
            "type": "individual",
            "appType": [
                "mobile"
            ],
            "description": "A Flutter app for managing book lists when visiting bookshops or book fairs. Create, organize, and track books with prices. Perfect for collectors and book enthusiasts to manage purchases.",
            "tech": [
                "Flutter",
                "Dart"
            ],
            "repo": "https://github.com/janithrenuka/book_list",
            "website": "",
            "images": []
        }
    ]
};
