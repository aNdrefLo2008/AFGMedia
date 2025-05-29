import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import enFlag from '../assets/en.png';
import deFlag from '../assets/de.png';
import itFlag from '../assets/it.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language || 'en');
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setShowLangDropdown(false);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  const location = useLocation();
  const langRef = useRef(null);

  const handleNavClick = (link) => {
    setActive(link.title);
    setToggle(false);

    if (link.type === 'section') {
      if (location.pathname !== '/') {
        window.location.href = `/#${link.id}`;
      } else {
        const section = document.getElementById(link.id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    // Apply initial theme on mount
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const flagMap = {
    en: enFlag,
    de: deFlag,
    it: itFlag,
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white dark:bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo */}
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='h-12 w-12 rounded-full object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>AFG Media</p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden lg:flex flex-row gap-10 items-center'>
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} first-letter:uppercase hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {link.type === 'route' ? (
                <Link to={`/${link.id}`} onClick={() => setActive(link.title)}>
                  {t(link.title)}
                </Link>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                >
                  {t(link.title)}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4 ml-4">

          {/* Language Selector */}
          <div className="relative mr-2" ref={langRef}>
            <button onClick={() => setShowLangDropdown(prev => !prev)} className="flex items-center gap-2 text-white">
              <motion.div
                className='p-3 bg-tertiary rounded-full'
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={flagMap[language]} className="w-6 h-6" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-tertiary mt-6 rounded-md shadow-md py-2 pl-4 pr-8 z-50"
                >
                  {['en', 'de', 'it'].map(lang => (
                    <div
                      key={lang}
                      className="flex items-center gap-2 cursor-pointer hover:text-white text-white py-2"
                      onClick={() => changeLanguage(lang)}
                    >
                      <img src={flagMap[lang]} className="w-5 h-5" />
                      <span className="capitalize inline">
                        {lang.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 45, scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="text-white mr-2"
          >
            <div className='p-3 bg-tertiary rounded-full'>
              {theme === 'dark' ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <IoMdMoon className="h-5 w-5" />
              )}
            </div>
          </motion.button>

          {/* Hamburger Menu */}
          <div className='lg:hidden'>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {toggle && (
          <div className='lg:hidden p-6 bg-tertiary absolute top-20 right-4 my-2 min-w-[140px] z-10 rounded-xl'>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-medium cursor-pointer hover:text-white text-[16px] first-letter:uppercase`}
                >
                  {link.type === 'route' ? (
                    <Link to={`/${link.id}`} onClick={() => setActive(link.title)}>
                      {t(link.title)}
                    </Link>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link);
                      }}
                    >
                      {t(link.title)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
