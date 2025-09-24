import React from 'react'
import Image from "next/image";
import logo from "@/public/image/logo3.png";
import Link from "next/link";
import BubblesBackground from '../BubblesBackground/BubblesBackground';

const Experience = () => {
  return (
    <section id='experience' className='py-16 px-6 font-mono relative '>
        <BubblesBackground />
        <div className="flex items-center  gap-3 mb-8">
            <h2 >Experience</h2>
            <hr className="border-t-[0.5px] border-white w-[200px]" />
        </div>

        <div className='flex flex-row items-center '>
            <div>
                <Image src={logo} alt='resQX logo' className='w-[200px] ' />
            </div>

            <Link 
                href="https://www.resqx.ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2B2F36] text-gray-200 px-6 font-mono block"
                >

                <div className="border border-gray-600 rounded-xl shadow-md p-6 hover:shadow-pink-400/30 transition hover:border-pink-300">
                    <h2 className="text-xl font-semibold text-gray-100">ResQ-X (IT Company)</h2>
                    <p className="text-sm text-gray-400 italic">Software Development Intern</p>
                    <p className="text-sm text-gray-400 mb-2">July 2025 – Present</p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        I am currently gaining hands-on experience in front-end development,
                        contributing to the design and functionality of the ResQ-X waitlist
                        landing page. My work involves building responsive layouts with React
                        and Tailwind CSS, creating interactive components like countdown
                        timers, and handling form submissions through APIs. This role has
                        strengthened my problem-solving skills and given me practical exposure
                        to collaborative software development.
                    </p>

                    <p className="text-sm text-pink-300 font-semibold">
                        Skills: React (Class Components), Tailwind CSS, JavaScript, APIs, Git &amp; GitHub
                    </p>
                </div>
            </Link>

        </div>
    </section>
  )
}

export default Experience