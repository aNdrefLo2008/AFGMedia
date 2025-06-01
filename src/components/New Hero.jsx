import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import CardsHero from './CardsHero';

const New_Hero = () => {
  return (
    <section className="bg-white dark:bg-black transition-colors duration-500 relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10 lg:gap-16">
      
      {/* Left side text */}
      <div className="lg:ml-20 flex flex-col lg:-mt-32 items-center sm:items-start justify-center gap-6 text-center sm:text-left lg:max-w-xl max-w-md">
        <div className='flex flex-col gap-4'>
          <h1 className={`transition-colors duration-500 lg:text-6xl sm:text-5xl text-3xl text-black dark:text-white font-extrabold lg:mt-0`}>Want to <span className='animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-indigo-800 to-slate-500 dark:from-gray-200 dark:via-indigo-300 dark:to-slate-400'>
            10x
          </span> your Sales?</h1>
          <h2 className="transition-colors duration-500 sm:text-lg text-base text-gray-800 dark:text-[#dfd9ff] font-medium">
            We ensure the fastest growth possible through establishing a digital footprint for your business
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex sm:flex-row flex-col items-center justify-center gap-4">
          <div className="button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 rounded-3xl">
            <div className="inner-button px-3 py-5 rounded-3xl font-bold dark:hover:bg-gray-200 transition hover:bg-gray-900">
              <Link to={"https://calendly.com/afgmedia15/introductory-call"}>
                <h1 className="sm:text-lg text-base font-semibold text-center">
                  Start working with us for free
                </h1>
              </Link>
            </div>
          </div>

          <div className="button-shadow duration-500 transition animated-border rounded-3xl">
            <div className="bg-gray-300 dark:bg-tertiary px-4 py-6 rounded-3xl shadow-card">
              <a href="#contact">
                <h1 className="sm:text-lg text-base font-semibold text-center text-black dark:text-white">Get in touch</h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side cards */}
      <div className="flex items-center justify-center w-full sm:w-auto relative">
        <CardsHero />
      </div>
    </section>
  );
};

export default New_Hero;
