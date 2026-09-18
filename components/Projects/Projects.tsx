import React from 'react'
import Image from "next/image";
import dictionary from "@/public/image/dictionary.png";
import waitlist from "@/public/image/waitlist.png";
import referal from "@/public/image/referal.png";
import Link from "next/link";
import BubblesBackground from '../BubblesBackground/BubblesBackground';
import deepind from "@/public/image/deepmind.png"
import jevinik from "@/public/image/jevinik.png"
import coffee from "@/public/image/coffee.png"
import piggy from "@/public/image/piggy.png"


const Projects = () => {
    const projects =[
        {   name:"Waitlist Landing Page",
            image:waitlist,
            description:"A Waitlist Landing Page I built for ResQ-X using React.js and Tailwind CSS. I designed and implemented features like a countdown timer, form submission, and responsive layouts. It was a great learning experience because it helped me apply what I was learning in React (Class Components) and Tailwind CSS while solving real design challenges.",
            build:"Built with React.js and Tailwind CSS",
            skills:"Skills: React (Class Components), Tailwind CSS, JavaScript, APIs, Git &amp; GitHub",
            link:"https://www.resqx.ng/waitlist",
        },

        {   name:"Dictionary Web App",
            image:dictionary,
            description:"A simple Dictionary Web App I built using React.js. The app allows users to search for words and view their meanings. It was one of my early projects where I practiced fetching data from an external API, handling user input, and updating the UI dynamically. This project improved my understanding of working with APIs and state management in React.",
            build:"Built with React.js",
            skills:"Skills: React.js, JavaScript (ES6+), APIs, CSS, Git &amp; GitHub",
            link:"https://dictionary-web-app-so4o.vercel.app",
        },

        {   name:"Referral Popup Component",
            image:referal,
            description:"I developed a Referral Popup component to improve user engagement. The popup was designed with animations using Framer Motion, giving it smooth transitions and exit effects. I also integrated logic for conditional display based on session and delay settings, ensuring it appears at the right moment without being intrusive. This project helped me strengthen my understanding of component reusability and user-focused design.",
            build:"Built with React.js & Framer Motion",
            skills:"Skills: React.js, Framer Motion, JavaScript (ES6+), Tailwind CSS",
            link:"https://www.resqx.ng/",
        },

        {
            name: "Jevinik Restaurant Website",
            image:jevinik,
            description:
                "A responsive restaurant website I built with React.js and Tailwind CSS. I created multiple pages including the Home, Menu, About, Blog, Contact, and individual Article pages, with reusable components and responsive layouts. This project helped me improve my understanding of React routing, component structure, and building responsive interfaces.",
            build: "Built with React.js, Tailwind CSS, and Vite",
            skills:
                "Skills: React.js, React Router, Tailwind CSS, JavaScript, Responsive Design, Git & GitHub",
            link: "https://jevinik.netlify.app",
        },

        {
            name: "DeepMind Website Clone",
            image: deepind,
            description:
                "A frontend clone of the DeepMind website I built to practise my HTML, CSS, and JavaScript skills. I recreated the website layout, navigation, and responsive design while improving my understanding of building websites from existing designs. This project helped me gain confidence in frontend development and gave me a better understanding of how real websites are structured.",
            build: "Built with HTML, CSS, and JavaScript",
            skills:
                "Skills: HTML, CSS, JavaScript, Responsive Design, Git & GitHub",
            link: "https://marvywavy.netlify.app",
        },

        {
            name: "CoffeeLayo",
            image:coffee,
            description:
                "A coffee-themed website I built to practise my frontend development skills. I focused on creating a clean and visually appealing design, responsive layouts, and an engaging user experience. This project helped me improve my understanding of website structure, styling, and bringing a design idea to life.",
            build: "Built with HTML, CSS, and JavaScript",
            skills:
                "Skills: HTML, CSS, JavaScript, Responsive Design, Git & GitHub",
            link: "https://coffeelayo.netlify.app",
        },

        {
            name: "PiggyVest Website Clone",
            image: piggy,
            description:
                "My first frontend project, built as a clone of the PiggyVest website using HTML and CSS. I recreated the website layout and practised styling different sections of the page. This project introduced me to frontend development and helped me build a foundation in writing HTML and CSS.",
            build: "Built with HTML and CSS",
            skills:
                "Skills: HTML, CSS, Responsive Design",
            link: "https://layoclonepigggyvest.netlify.app",
        },
    ]

  return (
    <section id='projects' className='py-16 px-6 font-mono relative '>
        <BubblesBackground />
        <div className="flex items-center  gap-3 mb-8">
            <h2 >Projects</h2>
            <hr className="border-t-[0.5px] border-white w-[200px]" />
        </div>

        <div className='py-16 lg:px-6 md:px-6 px-2 font-mono w-full flex flex-col md:grid md:grid-cols-3 justify-around gap-4'>
            {projects.map((project) => (
                <Link 
                    key={project.name}
                    href={project.link} 
                    target="_blank" rel="noopener noreferrer" 
                    className='flex flex-col w-full  mx-auto items-center border border-gray-600 rounded-xl shadow-md p-6 hover:shadow-pink-400/30 transition hover:border-pink-300'
                >
                    <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={500}
                    height={300}
                    className="bg-inherit text-gray-200 font-mono h-[200px] border p-4 mb-5" 
                    />

                    <div className='w-full'>
                    <h2 className="text-xl font-semibold text-gray-100 mb-3">{project.name}</h2>
                    <p className="text-sm text-gray-400 italic">{project.build}</p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {project.description}
                    </p>

                    <p className="text-sm text-pink-300 font-semibold">
                        {project.skills}
                    </p>
                    </div>
                </Link>
            ))}

        </div>
    </section>
  )
}

export default Projects