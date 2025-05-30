// src/pages/MotionGraphics.jsx
import logoAnimations from "../assets/Google Logos Animation.mp4"

const projects = [
  {
    title: "Cinematic Intro Reel",
    description: "A dynamic opening sequence created using After Effects, featuring animated titles and transitions.",
    videoUrl: "https://www.youtube.com/"
  },
  {
    title: "Logo Animation",
    description: "Example of clean and modern logo reveal animation showcasing brand identity.",
    videoUrl: logoAnimations
  },
  {
    title: "Promo Ad Editing",
    description: "Short promo ad combining motion graphics and video editing for a fictional product launch.",
    videoUrl: "https://www.youtube.com/s"
  }
];

const MotionGraphics = () => {
  return (
    <section className="min-h-screen pt-28 px-6 bg-white text-black transition-colors duration-500 dark:bg-primary dark:text-white">
      <h2 className="text-4xl font-bold mb-8">Motion Graphics & Editing</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="shadow-experiment-card bg-gray-50 transition-colors duration-500 dark:bg-tertiary p-5 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 transition-colors duration-500 dark:text-secondary mb-4">{project.description}</p>
            <div className="aspect-video ">
              <video
                src={project.videoUrl}
                loop
                muted
                autoPlay
                playsInline
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotionGraphics;
