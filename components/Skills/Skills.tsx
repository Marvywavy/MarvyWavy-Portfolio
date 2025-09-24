import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className="bg-[#2B2F36]  py-16 px-6 font-mono flex lg:flex-row md:flex-row md:w-full flex-col  lg:w-[80%] items-start ">
        <div className="flex items-center  gap-3 mb-8">
            <h2 >Skills & Tools</h2>
            <hr className="border-t-[0.5px] border-white w-[200px]" />
        </div>

        <div className="grid  sm:grid-cols-2 gap-4 lg:grid-cols-2  max-w-5xl mx-auto grid-cols-1 ">
            {/* Languages */}
            <div className="p-4 border basis-1/2 border-gray-300 rounded-xl shadow-md hover:shadow-pink-400/30 transition hover:border-pink-300 ">
                <h3 className="text-lg font-semibold mb-2 text-pink-300">Languages</h3>
                <ul className="space-y-1 text-sm">
                    <li>HTML</li>
                    <li>CSS / Tailwind CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div className="p-4 border basis-1/2 border-gray-300 rounded-xl shadow-md hover:shadow-pink-400/30 transition hover:border-pink-300 ">
                <h3 className="text-lg font-semibold mb-2 text-pink-300">Frameworks</h3>
                <ul className="space-y-1 text-sm">
                    <li>React (Class Components)</li>
                    <li>Next.js</li>
                    <li>Bootstrap</li>
                    <li>Framer Motion</li>
                </ul>
            </div>

            {/* Tools */}
            <div className="p-4 border basis-1/2 border-gray-300 rounded-xl shadow-md hover:shadow-pink-400/30 transition hover:border-pink-300 ">
                <h3 className="text-lg font-semibold mb-2 text-pink-300">Tools</h3>
                <ul className="space-y-1 text-sm">
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>FormSubmit</li>
                    <li>npm </li>
                </ul>
            </div>

            {/* Engineering Background */}
            <div className="p-4 border basis-1/2 border-gray-300 rounded-xl shadow-md hover:shadow-pink-400/30 transition hover:border-pink-300">
                <h3 className="text-lg font-semibold mb-2 text-pink-300">Engineering</h3>
                <ul className="space-y-1 text-sm">
                    <li>Mechanical Engineering B.Tech</li>
                    <li>Problem Solving</li>
                    <li>Analytical Thinking</li>
                    <li>Project Collaboration</li>
                </ul>
            </div>
        </div>
        </section>

  )
}

export default Skills