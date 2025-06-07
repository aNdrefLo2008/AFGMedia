import React from 'react';
import { FaPhotoFilm } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { RiFilmAiLine } from 'react-icons/ri';
import video_editing_img from '../assets/Video Editing Element.jpg';
import ae_img from '../assets/MG Img.png';
import coding_img from "../assets/Programming.svg"

function CardsHero() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 xl:relative w-[420px] sm:w-[480px] md:w-[600px] xl:w-[700px] h-[500px]">
      {/* Top Card */}
      <div className="md:absolute z-30 md:-top-10 md:left-44  bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl xl:px-6 xl:py-8 px-4 py-6 rounded-3xl flex flex-col justify-center gap-4 w-52 xl:w-64 md:w-72 ">
        <CardContent title="Video Editing" img={video_editing_img} Icon={FaPhotoFilm} />
      </div>

      {/* Middle Card */}
      <div className="md:absolute z-20 top-48 left-0 bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl xl:px-6 xl:py-8 px-4 py-6 rounded-3xl flex flex-col justify-center gap-4 w-52 xl:w-64 md:w-72">
        <CardContent title="Web Dev" img={coding_img} Icon={CgWebsite} />
      </div>

      {/* Bottom Card */}
      <div className="md:absolute z-10 xl:top-64 top-56 left-56 xl:left-60 md:left-72 bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl xl:px-6 xl:py-8 px-4 py-6 rounded-3xl flex flex-col justify-center gap-4 w-60 lg:w-64 xl:w-72">
        <CardContent title="Motion Graphics" img={ae_img} Icon={RiFilmAiLine} />
      </div>
    </div>
  );
}

function CardContent({ title, img, Icon }) {
  return (
    <>
      {/* Header with Icon and Title */}
      <div className="flex gap-4 items-center justify-start">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center transition-colors duration-500">
          <Icon className="w-5 h-5 text-black dark:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-black dark:text-white font-medium text-lg transition-colors duration-500">{title}</h3>
      </div>

      {/* Content Display */}
      
        {title === "Web Dev" ? (
        <div className="rounded-3xl w-full overflow-hidden bg-gray-100 dark:bg-gray-800 p-4 shadow-inner transition-colors duration-500">
          <div className="font-mono text-sm text-left text-gray-800 dark:text-gray-200 space-y-1">
            <div className="text-purple-500">&lt;html&gt;</div>
            <div className="ml-4 text-blue-500">&lt;body&gt;</div>
            <div className="ml-8 text-green-500">&lt;h1&gt;<span className="text-black dark:text-white transition-colors duration-500">Hello, World!</span>&lt;/h1&gt;</div>
            <div className="ml-4 text-blue-500">&lt;/body&gt;</div>
            <div className="text-purple-500">&lt;/html&gt;</div>
          </div>
        </div>
        ) : (
          <img src={img} alt={title} className="rounded-2xl w-full" />
        )}
      

      {/* Footer Element - Conditional Styling */}
        {title === "Video Editing" ? (
          <div className="flex flex-col gap-2 mt-2">
            <div className="h-2 bg-gray-300 rounded-full relative">
              <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="flex items-center gap-1 h-3">
              <div className="w-1/4 h-full bg-purple-300 rounded"></div>
              <div className="w-1/6 h-full bg-purple-400 rounded"></div>
              <div className="w-1/3 h-full bg-purple-300 rounded"></div>
            </div>
          </div>
        ) : title === "Web Dev" ? (
          <div className="flex items-center justify-between gap-2 mt-2 px-1">
            
          </div>
        ) : title === "Motion Graphics" ? (
          <div className="mt-2">
            <div className="flex justify-evenly gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-pink-500" />
              <div className="w-5 h-5 bg-blue-400 rotate-45 transform" />
              <div className="w-4 h-4 rounded bg-yellow-400" />
              <div className="w-8 h-4 rounded bg-green-500" />
              <div className="w-5 h-5 bg-gray-400" />
            </div>
          </div>
        ) : null}
    </>
  );
}



export default CardsHero;
