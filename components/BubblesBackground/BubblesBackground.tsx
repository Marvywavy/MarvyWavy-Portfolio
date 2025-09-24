"use client";
import React from 'react'
import { motion } from "framer-motion";


const BubblesBackground = () => {
    
    const bubbles = [
    { top: "50px", left: "10%", size: "w-12 h-12", duration: 6, color: "#f9a8d4" }, // light pink
    { top: "100px", left: "70%", size: "w-16 h-16", duration: 8, color: "#f472b6" }, // medium pink
    { top: "250px", left: "85%", size: "w-20 h-20", duration: 7, color: "#ec4899" }, // rose
    { top: "400px", left: "80%", size: "w-10 h-10", duration: 5, color: "#db2777" }, // dark pink
    { top: "500px", left: "40%", size: "w-14 h-14", duration: 9, color: "#be185d" }, // deep pink
    { top: "500px", left: "15%", size: "w-16 h-16", duration: 6, color: "#9d174d" }, // wine pink
    ];

  return (
    <div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className={`absolute ${bubble.size} rounded-full`}
            style={{ 
              top: bubble.top, 
              left: bubble.left, 
              backgroundColor: bubble.color 
            }}
            animate={{ x: [0, 60, -60, 0], y: [0, -65, 65, 0] }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BubblesBackground