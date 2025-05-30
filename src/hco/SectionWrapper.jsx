import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="relative z-0 scroll-mt-20">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-white dark:bg-black w-full"
        >
          <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
            <Component />
          </div>
        </motion.div>
      </section>
    );
  };


export default SectionWrapper;
