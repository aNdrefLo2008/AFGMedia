import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hco";
import { textVariant } from "../utils/motion";

import fidia from "../assets/fidia.png";
import cisl from "../assets/CISL.svg";

const experiences = [
  {
    id: 0,
    icon: fidia,
    iconBg: "#FFFFFF"
  },
  {
    id: 1,
    icon: cisl,
    iconBg: "#FFFFFF"
  }
];

const ExperienceCard = ({ experience, t, i }) => {
  const exp = t(`experiences.${i}`, { returnObjects: true });

  return (
    <VerticalTimelineElement
      contentStyle={{ padding: 1 }}
      contentArrowStyle={{ borderRight: '12px solid', borderColor: 'white' }}
      className="my-16"
      date={exp.date}
      dateClassName="text-black ml-4 px-4 py-2 rounded-md"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={exp.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="p-6 rounded-md bg-white text-black transition-colors duration-500 dark:bg-[#1d1836] dark:text-white shadow-lg">
        <h3 className="text-[24px] font-bold">{exp.title}</h3>
        <p className="text-gray-700 dark:text-secondary text-[16px] font-semibold mt-1">
          {exp.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {exp.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] pl-1 tracking-wider text-gray-700 dark:text-white"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("sectionSubText")}</p>
        <h2 className={styles.sectionHeadText}>{t("sectionHeadText")}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} i={i} t={t} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
