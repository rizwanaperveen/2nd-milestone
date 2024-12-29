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
  )
}
