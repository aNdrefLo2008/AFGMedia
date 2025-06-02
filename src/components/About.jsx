import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hco';

import { IoPeopleSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

// Map icon names to components
const iconMap = {
  IoPeopleSharp: <IoPeopleSharp className="text-black dark:text-white w-16 h-16 object-contain" />,
  FaHeadset: <FaHeadset className="text-black dark:text-white w-16 h-16 object-contain" />,
  FaMoneyCheck: <FaMoneyCheck className="text-black dark:text-white w-16 h-16 object-contain" />,
  FaMoneyBillTrendUp: <FaMoneyBillTrendUp className="text-black dark:text-white w-16 h-16 object-contain" />,
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full transition-colors duration-500 dark:bg-gradient-to-r from-blue-900 to-green-900 p-[1px] rounded-[20px] shadow-experiment-card'
    >
      <div
        className='bg-white transition-colors duration-500 dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {iconMap[icon]}
        <h3 className='text-black transition-colors duration-500 dark:text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white transition-colors duration-500 dark:bg-black mb-4'>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>{t('intro')}</p>
        <h2 className={styles.sectionHeadText}>{t('overview')}</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-gray-700 transition-colors duration-500 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        {t('description')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            title={t(`services.${service.id}`)}
            index={i}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
