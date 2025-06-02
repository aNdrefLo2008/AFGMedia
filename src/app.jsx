// App.jsx

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Contact, Hero, Navbar, Works, Tech, StarsCanvas, MotionGraphics, Experience, Feedbacks } from './components'
import { Analytics } from '@vercel/analytics/react';
import New_Hero from './components/New Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
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
              <div className='relative z-0' id="contact">
                <StarsCanvas />
                <Contact />
              </div>
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
