import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white transition-colors duration-500 dark:bg-tertiary">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase transition-colors duration-500 dark:text-white">
              {t('footer.sections.company')}
            </h2>
            <ul className="text-gray-500 transition-colors duration-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#about" className="hover:underline">{t('footer.companyLinks.about')}</a>
              </li>
              <li className="mb-4">
                <a href="#experience" className="hover:underline">{t('footer.companyLinks.experience')}</a>
              </li>
              <li className="mb-4">
                <a href="#testimonials" className="hover:underline">{t('footer.companyLinks.testimonials')}</a>
              </li>
              <li className="mb-4">
                <a href="/motion-graphics" className="hover:underline">{t('footer.companyLinks.motionGraphics')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase transition-colors duration-500 dark:text-white">
              {t('footer.sections.helpCenter')}
            </h2>
            <ul className="text-gray-500 transition-colors duration-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/a.f.g.media/" className="hover:underline">
                  {t('footer.helpCenterLinks.instagram')}
                </a>
              </li>
              <li className="mb-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/afg-media-8393092b8/" className="hover:underline">
                  {t('footer.helpCenterLinks.linkedin')}
                </a>
              </li>
              <li className="mb-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/users/afgmediaa/" className="hover:underline">
                  {t('footer.helpCenterLinks.fiverr')}
                </a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="hover:underline">{t('footer.helpCenterLinks.contactUs')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase transition-colors duration-500 dark:text-white">
              {t('footer.sections.legal')}
            </h2>
            <ul className="text-gray-500 transition-colors duration-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">{t('footer.legalLinks.privacyPolicy')}</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">{t('footer.legalLinks.licensing')}</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">{t('footer.legalLinks.termsConditions')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-4 rounded-t-3xl py-6 bg-gray-100 transition-colors duration-500 dark:bg-primary md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 transition-colors duration-500 dark:text-gray-300 sm:text-center">
            {t('footer.copyright')}
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/a.f.g.media/"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-500 dark:hover:text-white"
            >
              <FaInstagram />
              <span className="sr-only">{t('footer.social.instagramPage')}</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fiverr.com/users/afgmediaa/"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-500 dark:hover:text-white"
            >
              <TbBrandFiverr />
              <span className="sr-only">{t('footer.social.fiverrPage')}</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/afg-media-8393092b8/"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-500 dark:hover:text-white"
            >
              <FaLinkedin />
              <span className="sr-only">{t('footer.social.linkedinPage')}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
