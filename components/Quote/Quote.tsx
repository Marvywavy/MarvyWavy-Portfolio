import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import BubblesBackground from '../BubblesBackground/BubblesBackground';

const Quote = () => {
  return (
    <section className="relative lg:w-[60%] md:w-[80%] w-[95%] mb-[80px]   mx-auto my-10 border font-mono border-dashed border-pink-300 px-6 py-7 ">
      <BubblesBackground />
      {/* Top-left quote mark */}
      <ImQuotesLeft className="absolute -top-4 -left-[-20px] text-3xl text-pink-300" />

      <p className=" font-mono">
        Programming isn't about what you know; it&apos;s about what you can figure out.
      </p>

      {/* Bottom-right quote mark */}
      <ImQuotesRight  className="absolute -bottom-4 -right-[-20px] text-3xl text-pink-300" />

      {/* Author box */}
      <div className="absolute font-mono -bottom-16 right-0 border border-dashed border-t-0 px-14 py-5 border-pink-300   text-gray-400 ">
        - Chris Pine
      </div>
    </section>
  )
}

export default Quote