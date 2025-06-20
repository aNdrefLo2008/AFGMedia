import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hco";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white transition-colors duration-500 dark:bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-black transition-colors duration-500 dark:text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-black transition-colors duration-500 dark:text-white tracking-wider text-[18px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black transition-colors duration-500 dark:text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{company}</p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { t } = useTranslation();

  // Pull testimonials array from translation JSON, returning objects
  const testimonials = t("Testimonials.items", { returnObjects: true });
  const sectionSubText = t("Testimonials.sectionSubText");
  const sectionHeadText = t("Testimonials.sectionHeadText");

  return (
    <div
      className={`mt-12 bg-gray-200 transition-colors duration-500 dark:bg-black-100 rounded-[20px]`}
    >
      <div
        className={`bg-slate-100 transition-colors duration-500 dark:bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{sectionSubText}</p>
          <h2 className={styles.sectionHeadText}>{sectionHeadText}</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
