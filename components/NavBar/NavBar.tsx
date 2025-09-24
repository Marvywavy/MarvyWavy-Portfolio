import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "about me" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact me" },
  ];

  return (
    <section className='flex justify-between items-center w-full relative'>
      {/* Logo */}
      <a href="#" className='font-mono text-xl font-[900]'>layo</a>
      
      {/* Desktop Navigation - visible only on LG screens and above */}
      <div className="hidden lg:flex items-center justify-between gap-10 text-sm">
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href}
            className='hover:text-gray-300 transition-colors duration-200'
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger/Close Button - visible on MD and SM screens, hidden on LG screens */}
      <button
        className='lg:hidden flex items-center justify-center w-10 h-10'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Overlay - visible on MD and SM screens */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 lg:hidden
        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Close button inside overlay */}
        <button
          className='absolute top-6 right-6 text-white z-60'
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full ">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className='text-lg hover:text-gray-300 transition-colors duration-200 w-full text-center hover:bg-[#db2777] py-5 '
              onClick={closeMenu}
            >
              {link.label}

            </a>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavBar;