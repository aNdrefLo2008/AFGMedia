import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

function CTA() {
    const { t } = useTranslation();


    return (
        <div className='sm:py-20 py-10 md:px-0 px-4 text-center flex justify-center items-center bg-white dark:bg-black'>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className='relative xl:max-w-7xl sm:max-w-5xl max-w-2xl lg:p-28 sm:p-20 p-16 rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-black flex flex-col gap-5'
            >

                <div className='z-0 absolute -left-20 -top-20 blur-3xl p-20 rounded-full bg-gradient-to-r from-emerald-300 to-indigo-300 dark:bg-gradient-to-r dark:from-emerald-800 dark:to-indigo-800' />
                <div className='z-0 absolute -right-20 top-20 blur-3xl p-20 rounded-full bg-purple-300 dark:bg-indigo-800' />
                <div className='z-0 absolute -bottom-32 left-32 blur-3xl p-20 rounded-full bg-blue-300 dark:bg-blue-800' />
                <div className='z-10 flex flex-col gap-4'>
                    <h1 className="transition-colors duration-500 lg:text-5xl sm:text-4xl text-2xl text-black dark:text-white font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-black to-indigo-800 dark:from-gray-50 dark:to-indigo-300'>{t("CTA.title")}</span>
                    </h1>
                
                    <h2 className="transition-colors duration-500 sm:text-medium text-sm text-gray-800 dark:text-[#dfd9ff] font-medium">
                        {t('CTA.subtext')}
                    </h2>
                </div>
                <div className="z-10 flex flex-row items-center justify-center gap-4">
                    <div className="button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 rounded-full">
                        <div className="inner-button xl:p-5 sm:p-4 p-3 rounded-full font-bold dark:hover:bg-gray-200 transition hover:bg-gray-900">
                            <Link to={"https://calendly.com/afgmedia15/introductory-call"}>
                                <h1 className="lg:text-sm text-xs font-semibold text-center">
                                  {t('hero.getStarted')} ➡
                                </h1>
                            </Link>
                        </div>
                    </div>
                
                    <div className="bg-gray-50 dark:bg-tertiary xl:p-5 sm:p-4 p-3 rounded-full shadow-card button-shadow duration-500 transition border border-gray-500">
                        <a href="#contact">
                            <h1 className="lg:text-sm text-xs font-semibold text-center text-black dark:text-white">
                                {t('hero.contactUs')}
                            </h1>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default CTA