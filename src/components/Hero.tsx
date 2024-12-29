import React from 'react';
import Image from 'next/image';
import '../style/hero.css';

export default function Hero() {
  return (
    <div className="hero">
      {/* Right side */}
      <div>
        <Image
          src="/htpic2.png"
          alt="logo"
          width={300}
          height={300}
          className="Girl"
          data-aos="fade-right"
        />
      </div>
      {/* Left side */}
      <div className="right" data-aos="fade-left">
        <h1 data-aos="fade-left">Hello There</h1>
        <h1 data-aos="fade-left">My Name Is</h1>
        <h1 data-aos="fade-left">Rizwana</h1>
        <h1 data-aos="fade-left">And I Am</h1>
        <h1 data-aos="fade-left">A Web Developer</h1>
      </div>
    </div>
  );
}
