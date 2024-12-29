'use client';
import React, { useEffect } from 'react';
import Projects from '@/components/Projects';
import About from '@/app/About/page';
import Contact from '@/app/contact/page';
import Hero from '@/components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      anchorPlacement: 'bottom-bottom',
      mirror: true,
      offset: 160,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

// Set displayName explicitly for debugging
Home.displayName = "Home";

export default Home;
