import React from 'react'
import Image from "next/image";
import dictionary from "@/public/image/dictionary.png";
import waitlist from "@/public/image/waitlist.png";
import referal from "@/public/image/referal.png";
import Link from "next/link";
import BubblesBackground from '../BubblesBackground/BubblesBackground';

const Projects = () => {
  return (
    <section id='projects' className='py-16 px-6 font-mono relative '>
        <BubblesBackground />
        <div className="flex items-center  gap-3 mb-8">
            <h2 >Projects</h2>
            <hr className="border-t-[0.5px] border-white w-[200px]" />
        </div>

        <div className='py-16 lg:px-6 md:px-6 px-2 font-mono w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-around gap-4'>
            <Link 
                href="https://www.resqx.ng/waitlist" 
                target="_blank" rel="noopener noreferrer" 
                className='flex flex-col w-full md:w-[calc(50%-8px)] lg:w-[40%] mx-auto items-center border border-gray-600 rounded-xl shadow-md p-6 hover:shadow-pink-400/30 transition hover:border-pink-300'
            >
                <Image 
                src={waitlist} 
                alt="ResQ-X waitlist" 
                className="bg-inherit text-gray-200 font-mono h-[200px] border p-4 mb-5" 
                />

                <div className='w-full'>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">Waitlist Landing Page</h2>
                <p className="text-sm text-gray-400 italic">Built with React.js and Tailwind CSS</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    A Waitlist Landing Page I built for ResQ-X using React.js and Tailwind CSS. 
                    I designed and implemented features like a countdown timer, form submission, 
                    and responsive layouts. It was a great learning experience because it helped 
                    me apply what I was learning in React (Class Components) and Tailwind CSS 
                    while solving real design challenges.
                </p>

                <p className="text-sm text-pink-300 font-semibold">
                    Skills: React (Class Components), Tailwind CSS, JavaScript, APIs, Git &amp; GitHub
                </p>
                </div>
            </Link>

            <Link 
                href="dictionary-web-app-so4o.vercel.app" 
                target="_blank" rel="noopener noreferrer" 
                className='flex flex-col w-full md:w-[calc(50%-8px)] lg:w-[40%] mx-auto items-center border border-gray-600 rounded-xl shadow-md p-6 hover:shadow-pink-400/30 transition hover:border-pink-300'
            >
                <Image 
                src={dictionary} 
                alt="dictionary web-app" 
                className="bg-inherit text-gray-200 font-mono h-[200px] border p-4 mb-5" 
                />

                <div className='w-full'>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">Dictionary Web App</h2>
                <p className="text-sm text-gray-400 italic">Built with React.js</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    A simple Dictionary Web App I built using React.js. The app allows users 
                    to search for words and view their meanings. It was one of my early projects 
                    where I practiced fetching data from an external API, handling user input, 
                    and updating the UI dynamically. This project improved my understanding 
                    of working with APIs and state management in React.
                </p>

                <p className="text-sm text-pink-300 font-semibold">
                    Skills: React.js, JavaScript (ES6+), APIs, CSS, Git &amp; GitHub
                </p>
                </div>
            </Link>

            <Link 
                href="https://www.resqx.ng/" 
                target="_blank" rel="noopener noreferrer" 
                className='flex flex-col w-full md:w-[calc(50%-8px)] lg:w-[40%] mx-auto items-center border border-gray-600 rounded-xl shadow-md p-6 hover:shadow-pink-400/30 transition hover:border-pink-300'
            >
                <Image 
                src={referal} 
                alt="ResQ-X referal popup" 
                className="bg-inherit text-gray-200 font-mono h-[200px] border p-4 mb-5" 
                />

                <div className='w-full'>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">Referral Popup Component</h2>
                <p className="text-sm text-gray-400 italic">Built with React.js & Framer Motion</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    I developed a Referral Popup component to improve user engagement. 
                    The popup was designed with animations using Framer Motion, giving it 
                    smooth transitions and exit effects. I also integrated logic for 
                    conditional display based on session and delay settings, ensuring it 
                    appears at the right moment without being intrusive. This project 
                    helped me strengthen my understanding of component reusability and 
                    user-focused design.
                </p>

                <p className="text-sm text-pink-300 font-semibold">
                    Skills: React.js, Framer Motion, JavaScript (ES6+), Tailwind CSS
                </p>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Projects