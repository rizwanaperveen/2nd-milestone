<<<<<<< HEAD
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
=======
'use client'
import Projects from '@/components/Projects'
import React from 'react'
import About from '@/app/About/page';
import Contact from '@/app/contact/page'
import Hero from '@/components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {
>>>>>>> 423c3a4a183e4ddd7e57e58c2f3853b8b2c40cc9
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
<<<<<<< HEAD
=======
    
>>>>>>> 423c3a4a183e4ddd7e57e58c2f3853b8b2c40cc9
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
<<<<<<< HEAD
  );
};

// Set displayName explicitly for debugging
Home.displayName = "Home";

export default Home;
=======
  )
}
>>>>>>> 423c3a4a183e4ddd7e57e58c2f3853b8b2c40cc9
