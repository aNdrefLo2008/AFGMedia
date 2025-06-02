import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hco";
import { slideIn } from "../utils/motion";

// template_9l1wp1x
// service_xrxrs7p
// dAHvurvVqw2P3OtW9

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_3xvantp', 'template_9l1wp1x', {
      from_name: form.name,
      to_name: 'Andrei',
      from_email: form.email,
      to_email: 'floreaalexandru146@gmail.com',
      message: form.message,
    }, 'dAHvurvVqw2P3OtW9')
    .then(
      () => {
        setLoading(false);
        alert(t("Contact.form.alerts.success"));

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert(t("Contact.form.alerts.error"));
      }
    );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-white-100 transition-colors duration-500 dark:bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("Contact.sectionSubText")}</p>
        <h3 className={styles.sectionHeadText}>{t("Contact.sectionHeadText")}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black transition-colors duration-500 dark:text-white font-medium mb-4">{t("Contact.form.labels.name")}</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("Contact.form.placeholders.name")}
              className="bg-gray-300 dark:bg-tertiary p-4 px-6 placeholder:text-gray-800  dark:placeholder:text-secondary text-black transition-colors duration-500 dark:text-white rounded-lg font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-black transition-colors duration-500 dark:text-white font-medium mb-4">{t("Contact.form.labels.email")}</span>
            <input 
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("Contact.form.placeholders.email")}
              className="bg-gray-300 dark:bg-tertiary p-4 px-6 placeholder:text-gray-800  dark:placeholder:text-secondary text-black transition-colors duration-500 dark:text-white rounded-lg font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-black transition-colors duration-500 dark:text-white font-medium mb-4">{t("Contact.form.labels.message")}</span>
            <textarea
              rows="7" 
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("Contact.form.placeholders.message")}
              className="bg-gray-300 dark:bg-tertiary p-4 px-6 placeholder:text-gray-800 dark:placeholder:text-secondary text-black transition-colors duration-500 dark:text-white rounded-lg font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-gray-300 dark:bg-tertiary py-3 px-8 w-fit font-bold shadow-sm shadow-primary rounded-xl text-black transition-colors duration-500 dark:text-white"
          >
            {loading ? t("Contact.form.button.sending") : t("Contact.form.button.send")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
