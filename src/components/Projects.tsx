import React from 'react';
import '@/style/projects.css';
import Image from 'next/image';

export default function Projects() {
  return (
   <div>
         <h3 className='heading'>Projects</h3>
         <div className='grid'>
           <div data-aos="zoom-in-up">
             <Image src="/project01.png" alt="image" width={400} height={400} />
             <h4>Clock</h4>
             <p>HTML</p>
             <p>CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project02.png" alt="image" width={400} height={400} />
             <h4>Id Card</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project03.png" alt="image" width={400} height={400} />
             <h4>Digital Clock</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project04.png" alt="image" width={400} height={400} />
             <h4>Tip Calculator</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project05.png" alt="image" width={400} height={400} />
             <h4>Password Generator</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project06.png" alt="image" width={400} height={400} />
             <h4>BMI Calculator</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project07.png" alt="image" width={400} height={400} />
             <h4>To Do List</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up">
           <Image src="/project08.png" alt="image" width={400} height={400} />
             <h4>Number Guessing Game</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
           </div>
           <div data-aos="zoom-in-up"><Image src="/project09.png" alt="image" width={400} height={400} />
             <h4>Calendar</h4>
             <p> HTMl</p>
             <p>CSS</p>
             <p>JAVASCRIPT</p></div>
           <div data-aos="zoom-in-up"><Image src="/project10.png" alt="image" width={400} height={400} />
             <h4>SOFA WEBSITE</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p></div>
             <div data-aos="zoom-in-up">
             <Image src="/project11.png" alt="image" width={400} height={400} />
             <h4>BLOG WEBSITE</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
             </div>
             <div data-aos="zoom-in-up">
             <Image src="/project12.png" alt="image" width={400} height={400} />
             <h4>HTML WEBSITE</h4>
             <p> Nextjs</p>
             <p>Tailwind CSS</p>
             <p>JAVASCRIPT</p>
             </div>
     
         </div>
       </div>
  )
}
