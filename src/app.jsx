import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Contact, Navbar, Works, Tech, StarsCanvas, MotionGraphics, Experience, Feedbacks } from './components'
import { Analytics } from '@vercel/analytics/react';
import New_Hero from './components/New Hero';
import Footer from './components/Footer';
import CTA from './components/CTA';

const App = () => {

  useEffect(() => {
    const updateMouse = (e) => {
      const x = e.clientX + 'px';
      const y = e.clientY + 'px';
      document.body.style.setProperty('--x', x);
      document.body.style.setProperty('--y', y);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative bg-primary'>
        <Analytics />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <New_Hero />
              <div id="about">
                <About />
              </div>
              <Experience />
              <div className='hidden sm:block'>
                <Tech />
              </div>
              <div id="works">
                <Works />
              </div>
              <div id="testimonials">
                <Feedbacks />
              </div>
              <div className='relative' id="contact">
                <StarsCanvas />
                <Contact />
              </div>
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/motion-graphics" element={<MotionGraphics />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
