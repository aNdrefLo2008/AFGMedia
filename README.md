# AFGMedia

A modern, interactive portfolio website built with **React**, **TailwindCSS**, and **Vite**, featuring smooth animations, 3D canvas effects, and responsive design.

**Live Demo:** [https://afg-media.vercel.app/](https://afg-media.vercel.app/)

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Deployment](#deployment)  
- [License](#license)  

---

## About

AFGMedia is a visually engaging personal portfolio template that showcases:

- Hero section with interactive mouse-tracking animations  
- Project/Works section  
- Skills/Tech stack overview  
- Experience and Feedback/Testimonials  
- Motion graphics showcase  
- Contact form with 3D starry canvas background  

It is designed to provide a professional, clean, and interactive user experience for developers, designers, and agencies.

---

## Features

- Fully responsive layout for mobile, tablet, and desktop  
- Dynamic mouse-tracking background animations  
- 3D canvas effects using **Three.js** (via `StarsCanvas`)  
- Smooth scroll navigation and section linking  
- Separate route for Motion Graphics showcase  
- Integrated analytics via **Vercel Analytics**  
- CTA (Call-To-Action) and Footer components for engagement  

---

## Technologies

- **React** – UI library  
- **React Router DOM** – Client-side routing  
- **TailwindCSS** – Utility-first CSS framework  
- **Three.js / Canvas** – 3D visual effects  
- **Vite** – Development build tool  
- **Vercel Analytics** – Performance and usage tracking  

---

## Project Structure


AFGMedia/
├─ public/
├─ src/
│ ├─ assets/ # Images, icons, and media
│ ├─ components/ # Reusable React components
│ │ ├─ Navbar.jsx
│ │ ├─ About.jsx
│ │ ├─ Contact.jsx
│ │ ├─ Works.jsx
│ │ ├─ Feedbacks.jsx
│ │ ├─ Experience.jsx
│ │ ├─ Tech.jsx
│ │ ├─ StarsCanvas.jsx
│ │ ├─ MotionGraphics.jsx
│ │ ├─ New_Hero.jsx
│ │ └─ CTA.jsx
│ ├─ constants/ # Data and configuration
│ ├─ utils/ # Helper functions
│ ├─ languages/ # Multi-language support
│ ├─ App.jsx
│ ├─ index.css
│ ├─ App.css
│ ├─ main.jsx
│ └─ styles.js
├─ package.json
├─ tailwind.config.cjs
├─ vite.config.js
└─ README.md


---

## Getting Started

### Prerequisites

- Node.js ≥ 18  
- npm or yarn  

### Installation

```bash
git clone https://github.com/aNdrefLo2008/AFGMedia.git
cd AFGMedia
npm install
Run Locally
npm run dev

Open http://localhost:5173
 in your browser.

Deployment

This project is deployed on Vercel:

vercel --prod

Live URL: https://afg-media.vercel.app/
