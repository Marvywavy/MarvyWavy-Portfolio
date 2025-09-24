import React from 'react'
import Image from "next/image";
import pic from "@/public/image/pic.png";
import Link from "next/link";
import BubblesBackground from '../BubblesBackground/BubblesBackground';
import Quote from '@/components/Quote/Quote'
const Hero = () => {
  return (
    <section id='about' className='mt-[50px] relative ' >
      <BubblesBackground />
      <div className='flex items-center justify-between lg:flex-row  flex-col-reverse  '>
        <div className='lg:w-[80%] md:w-[90%] sm:w-full font-mono '>
          <div>
            <h1 className=' font-mono text-[20px] lg:text-[35px] md:text-[35px] font-extrabold text-gray-400  '>
                Hey there, I&apos;m Titilayo Adebayo — a <span className='text-[#EB08D3] '>Frontend Developer</span>
            </h1>

            <p>
              Hi, I&apos;m <strong>Adebayo Titilayo Marvellous</strong>, 
              a recent Mechanical Engineering graduate with a growing passion for 
              <span className="text-[#C93DE0] font-semibold"> software development</span>. 
              I enjoy creating innovative and user-friendly websites and applications, and 
              I&apos;m currently building my skills in 
              <span className="text-[#C93DE0] font-semibold"> JavaScript, React, and front-end development</span> 
              while exploring backend technologies.
            </p>

            <p>
              With experience in designing web pages using 
              <span className="text-[#C93DE0] font-semibold"> HTML, CSS, Bootstrap, and JavaScript</span>, 
              I&apos;m focused on turning ideas into clean and functional code. I&apos;m also eager to expand my knowledge 
              in APIs, form handling, and responsive design.
            </p>

            <p>
              Beyond coding, I enjoy learning new technologies, collaborating on projects, and exploring how 
              software can solve real-world problems. Welcome to my website — feel free to check out my work 
              and get in touch with me to discuss opportunities or collaborations 🤗.
            </p>
          </div>

          <div className=' lg:w-[80%] w-full flex justify-between mt-8 px-4'>
            <div className="border px-8 py-3 relative overflow-hidden group animate-bounceSmooth rounded-3xl border-[#9b1f51] ">
              <Link
                href="/contact"
                className="relative z-10  transition-colors duration-300 group-hover:text-white animate-bounce"
              >
                Contact me
              </Link>

              {/* Gradient background, hidden until hover */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out
                   bg-gradient-to-r from-[#2F0222] via-[#68044C] to-[#28034C] z-0 pointer-events-none"
              ></div>
            </div>

            <div className="border px-8 py-3 relative overflow-hidden group rounded-3xl border-[#9b1f51] animate-bounceSmooth ">
              <Link
                href="/contact"
                className="relative z-10 animate-bounce transition-colors duration-300 group-hover:text-white"
              >
                My Resume
              </Link>

              {/* Gradient background, hidden until hover */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out
                   bg-gradient-to-r from-[#2F0222] via-[#68044C] to-[#28034C] z-0 pointer-events-none"
              ></div>
            </div>

          </div>
        </div>

          <div className='w-[100%] md:w-[50%] lg:w-[80%] flex justify-end '>
              <Image src={pic} alt="Titilayo" className='lg:w-[90%] bg-[#2B2F36] w-full  ' />
          </div>
      </div>
      <Quote />
      
    </section>
  )
}

export default Hero