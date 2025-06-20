import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import CardsHero from './CardsHero';

const New_Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white xl:mt-0 dark:bg-black transition-colors duration-500 relative w-full min-h-screen flex flex-col xl:flex-row items-center justify-center px-6 py-12 gap-10 md:gap-20 lg:gap-16">
      
      {/* Left side text */}
      <div className="lg:ml-20 flex flex-col mt-20 xl:-mt-32 items-center xl:items-start justify-center gap-6 text-center xl:text-left lg:max-w-xl max-w-md">
        <div className='flex flex-col gap-4'>
          <h1 className="transition-colors duration-500 lg:text-6xl sm:text-5xl text-3xl text-black dark:text-white font-extrabold">
            <Trans i18nKey="hero.title">
              Want to <span className='animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-indigo-800 to-slate-500 dark:from-gray-200 dark:via-indigo-300 dark:to-slate-400'>10x</span> your Sales?
            </Trans>
          </h1>

          <h2 className="transition-colors duration-500 sm:text-lg text-sm text-gray-800 dark:text-[#dfd9ff] font-medium">
            {t('hero.subtitle')}
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 rounded-full">
            <div className="inner-button xl:p-6 sm:p-4 p-3 rounded-full font-bold dark:hover:bg-gray-200 transition hover:bg-gray-900">
              <Link to={"https://calendly.com/afgmedia15/introductory-call"}>
                <h1 className="lg:text-base text-sm font-semibold text-center">
                  {t('hero.getStarted')}
                </h1>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-tertiary xl:p-6 sm:p-4 p-3 rounded-full shadow-card button-shadow duration-500 transition border border-gray-500">
            <a href="#contact">
              <h1 className="lg:text-base text-sm font-semibold text-center text-black dark:text-white">
                {t('hero.contactUs')}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Right side cards */}
      <div className="md:mb-0 mb-40 md:mt-0 mt-40 flex items-center justify-center w-full sm:w-auto relative">
        <CardsHero />
      </div>
    </section>
  );
};

export default New_Hero;
