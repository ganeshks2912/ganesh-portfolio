# Ganesh K S — Portfolio (React + Vite)

```bash
npm install
npm run dev      
npm run build    
```
Ganesh K S — Portfolio Website

A modern, responsive developer portfolio built with React and Vite. It features a dark editorial design, an animated video hero, and sections for About, Skills, Projects, Education and Contact.

Sections
Hero: animated portrait video with a short introduction and call-to-action buttons
About: a short intro and leadership experience
Skills: grouped skill cards and a scrolling skills ticker
Projects: project cards with screenshots, highlights, tech stack and GitHub links
Education: academic timeline
Contact: email, phone, GitHub and LinkedIn
Featured Projects
Project	Stack	Source
Nexus APIs — Multi-Tenant API Gateway & Management Platform	Node.js, Express.js, PostgreSQL, Redis, JWT, React.js	GitHub
Distributed Notification Delivery Platform	Node.js, Express.js, RabbitMQ, PostgreSQL, Redis, Docker	GitHub
AI Log Intelligence — Bot vs. Human Traffic Detection	Python, Random Forest, React, PostgreSQL	GitHub
Tech Stack

React 19 · Vite · Lucide React · plain CSS (no UI framework)

Getting Started

Prerequisite: Node.js (LTS version).

bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

Then open the URL shown in the terminal (usually http://localhost:5173).

Other commands
bash
npm run build     # create a production build in /dist
npm run preview   # preview the production build locally
Project Structure
├── index.html              # HTML entry point, fonts and meta tags
├── package.json
├── vite.config.js
├── public/
│   ├── videos/portrait.mp4 # hero video
│   └── images/             # project screenshots (.webp)
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # all page sections/components
    ├── data.js             # all editable content
    └── styles.css          # all styling and theme colors
