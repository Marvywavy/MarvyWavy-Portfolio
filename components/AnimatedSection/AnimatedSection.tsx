// components/AnimatedSection/AnimatedSection.tsx
"use client";
import { motion } from 'framer-motion';
import { useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number; // How much of the element should be visible to trigger
}

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.3 // 30% of element must be visible
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  
  // More precise viewport detection
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px", // Trigger 20% from top and bottom
    amount: threshold, // Requires 30% visibility
  });

  // Scroll-based animations for parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: isInView ? 0 : y }} // Subtle parallax when not in view
      
      // Animation states
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3, 
        scale: isInView ? 1 : 0.98 
      }}
      
      // Ultra-smooth transitions
      transition={{
        duration: 0.8,
        delay: isInView ? delay : 0, // Only delay on entrance
        ease: [0.32, 0.72, 0, 1], // Very sleek easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;