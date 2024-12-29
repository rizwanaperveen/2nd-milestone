import React from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '../About/page';
import Contact from '../contact/page';


export default function () {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}
