import React from 'react'
import Image from "next/image";
import Link from "next/link";
import BubblesBackground from '../BubblesBackground/BubblesBackground';
import Quote from '@/components/Quote/Quote'
const Hero = () => {
  return (
    <section id='about' className='mt-[50px] relative ' >
      <BubblesBackground />
      <div className='flex items-center gap-14 lg:flex-row  flex-col-reverse  '>
        <div className='lg:w-[80%] md:w-[90%] sm:w-full font-mono '>
          <div>
            <h1 className="font-mono text-[20px] lg:text-[35px] md:text-[35px] font-extrabold text-gray-400">
              Hey there, I&apos;m Titilayo Adebayo — a{" "}
              <span className="text-[#EB08D3]">
                Mechanical Engineering Graduate & Frontend Developer
              </span>
            </h1>

            <p>
              Hi, I&apos;m <strong>Adebayo Titilayo Marvellous</strong>, a Mechanical
              Engineering graduate with a strong interest in engineering, technology,
              and software development. I enjoy solving problems, creating practical
              solutions, and turning ideas into functional designs. My engineering
              background has developed my analytical and problem-solving skills, while
              my experience in frontend development has allowed me to explore another
              side of building practical solutions.
            </p>

            <p>
              On the engineering side, I have experience in{" "}
              <span className="text-[#C93DE0] font-semibold">
                technical drawing, engineering design, maintenance support, and
                practical engineering projects
              </span>
              . I&apos;m particularly interested in areas where engineering and
              technology come together to solve real-world problems.
            </p>

            <p>
              Alongside my engineering background, I have developed skills in{" "}
              <span className="text-[#C93DE0] font-semibold">
                HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS
              </span>
              . I enjoy creating responsive and user-friendly websites and continuously
              improving my understanding of modern frontend development.
            </p>

            <p>
              I enjoy learning, collaborating on projects, and exploring how both
              engineering and technology can be used to create useful solutions.
              Welcome to my website — feel free to check out my work and get in touch
              with me about opportunities or collaborations 🤗.
            </p>
          </div>

          <div className=' lg:w-[80%] w-full flex justify-between mt-8 px-4'>
            <div className="border px-8 py-3 relative overflow-hidden group animate-bounceSmooth rounded-3xl border-[#9b1f51] ">
              <a
                href="#contact"
                className="relative z-10  transition-colors duration-300 group-hover:text-white animate-bounce"
              >
                Contact me
              </a>

              {/* Gradient background, hidden until hover */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out
                   bg-gradient-to-r from-[#2F0222] via-[#68044C] to-[#28034C] z-0 pointer-events-none"
              ></div>
            </div>

            <div className="border px-8 py-3 relative overflow-hidden group rounded-3xl border-[#9b1f51] animate-bounceSmooth ">
              <a
                href="/Adebayo_Titilayo_Marvellous_CV_Graduate_Trainee_Trans_Amadi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 animate-bounce transition-colors duration-300 group-hover:text-white"
              >
                My Resume
              </a>

              {/* Gradient background, hidden until hover */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out
                   bg-gradient-to-r from-[#2F0222] via-[#68044C] to-[#28034C] z-0 pointer-events-none"
              ></div>
            </div>

          </div>
        </div>

          <div className='w-[100%] md:w-[50%] lg:w-[80%] flex items-center justify-center '>
            <Image
              src="/image/pic.jpeg"
              alt="Titilayo"
              width={500}
              height={500}
              className="lg:w-[70%] bg-[#2B2F36] w-full rounded-full "
            />          
          </div>
      </div>
      <Quote />
      
    </section>
  )
}

export default Hero