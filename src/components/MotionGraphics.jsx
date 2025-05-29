// src/pages/MotionGraphics.jsx

import React from 'react';

const projects = [
  {
    title: "Cinematic Intro Reel",
    description: "A dynamic opening sequence created using After Effects, featuring animated titles and transitions.",
    videoUrl: "https://www.youtube.com/"
  },
  {
    title: "Logo Animation",
    description: "Clean and modern logo reveal animation showcasing brand identity.",
    videoUrl: "https://www.youtube.com/"
  },
  {
    title: "Promo Ad Editing",
    description: "Short promo ad combining motion graphics and video editing for a fictional product launch.",
    videoUrl: "https://www.youtube.com/s"
  }
];

const MotionGraphics = () => {
  return (
    <section className="min-h-screen pt-28 px-6 bg-primary text-white">
      <h2 className="text-4xl font-bold mb-8">Motion Graphics & Editing</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-tertiary p-5 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary mb-4">{project.description}</p>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotionGraphics;
