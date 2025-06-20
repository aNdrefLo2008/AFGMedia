import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hco";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-gray-100 shadow-experiment-card transition-colors duration-500 dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative h-[230px]">
        <img src={image} alt={name} className="h-full w-full object-cover rounded-2xl" />

        <div className="absolute flex justify-end m-3 card-img_hover inset-0">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-2/3 h-2/3" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold sm:text-[22px]">{name}</h3>
        <p className="sm:text-[14px] text-[10px] text-gray-500 transition-colors duration-500 dark:text-secondary tracking-wider">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const { t } = useTranslation();

  // Load projects array from translations
  // ReturnObjects:true to get array of objects from JSON
  const projects = t("projects.items", { returnObjects: true });

  const sectionSubText = t("projects.sectionSubText");
  const sectionHeadText = t("projects.sectionHeadText");
  const description = t("projects.description");

  return (
    <div className="mb-2">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{sectionSubText}</p>
        <h2 className={styles.sectionHeadText}>{sectionHeadText}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {description}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
