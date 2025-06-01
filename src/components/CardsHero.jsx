import React from 'react';
import { FaPhotoFilm } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { RiFilmAiLine } from 'react-icons/ri';
import video_editing_img from '../assets/Video Editing Element.jpg';
import ae_img from '../assets/AE Img.png';

function CardsHero() {
  return (
    <div className="relative w-[320px] sm:w-[480px] md:w-[600px] lg:w-[700px] h-[500px]">
      {/* Top Card */}
      <div className="absolute z-30 top-0 left-40 bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl px-6 py-8 rounded-3xl flex flex-col justify-center gap-4 w-64">
        <CardContent title="Video Editing" img={video_editing_img} Icon={FaPhotoFilm} />
      </div>

      {/* Middle Card */}
      <div className="absolute z-20 top-48 left-0 bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl px-6 py-8 rounded-3xl flex flex-col justify-center gap-4 w-64">
        <CardContent title="Web Dev" img={video_editing_img} Icon={CgWebsite} />
      </div>

      {/* Bottom Card */}
      <div className="absolute z-10 top-60 left-60 bg-white transition-colors duration-500 dark:bg-gray-900 shadow-2xl px-6 py-8 rounded-3xl flex flex-col justify-center gap-4 w-64">
        <CardContent title="Motion Graphics" img={video_editing_img} Icon={RiFilmAiLine} />
      </div>
    </div>
  );
}

function CardContent({ title, img, Icon }) {
  return (
    <>
      <div className="flex gap-4 items-center justify-start">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center transition-colors duration-500">
          <Icon className="w-5 h-5 text-black dark:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-black dark:text-white font-medium text-lg transition-colors duration-500">{title}</h3>
      </div>
      <div>
        <img src={img} alt={title} className="rounded-3xl w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 bg-gray-300 rounded-full relative">
          <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="flex items-center gap-1 h-3">
          <div className="w-1/4 h-full bg-purple-300 rounded"></div>
          <div className="w-1/6 h-full bg-purple-400 rounded"></div>
          <div className="w-1/3 h-full bg-purple-300 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default CardsHero;
