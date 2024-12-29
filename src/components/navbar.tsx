import React from 'react';
import '../style/navbar.css';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className='container'>

        <Image src="/rlogo.png" alt="logo" width={100} height={100} className='logo'/>
        <div>
            <h2>Welcome To My Portfolio</h2>
        </div>
        <div>
            <ul className='list'>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
