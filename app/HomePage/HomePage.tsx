"use client";
import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'


const HomePage = () => {
  return (
    <div className='pt-10 px-2 lg:pl-10 lg:pr-8 pb-[50px] overflow-x-hidden overflow-y-hidden '>

        <NavBar />

        <AnimatedSection delay={1} threshold={0.1}>
        <Hero />
      </AnimatedSection>
        
        <AnimatedSection delay={1} threshold={0.1}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection delay={1} threshold={0.1}>
        <Experience />
      </AnimatedSection>

      <AnimatedSection delay={1} threshold={0.1}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection delay={1} threshold={0.1}>
        <Contact />
      </AnimatedSection>
        
        
        
        
    </div>
  )
}

export default HomePage