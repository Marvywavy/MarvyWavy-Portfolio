"use client";
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import BubblesBackground from '../BubblesBackground/BubblesBackground';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with YOUR ACTUAL PUBLIC KEY
emailjs.init("fnu2-CtGiMbdHL-lN");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const updateFormField = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Sending email with data:', formData);
      
      const result = await emailjs.send(
        'service_usr5os3',    
        'template_pxaz0il',   
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      console.log('✅ Email sent successfully!', result);
      
      if (result.status === 200) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error: any) {
      console.error('❌ EmailJS error details:', {
        error,
        status: error?.status,
        text: error?.text,
        message: error?.message
      });
      
      alert(`Failed to send message: ${error?.text || error?.message || 'Please check console for details'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (    
    <section id='contact' className='bg-[#2B2F36] font-mono text-gray-400 px-11 py-5 relative'>
      <BubblesBackground />

      <div className='flex items-center gap-3 mb-10'>
        <p>Contact</p>
        <hr className='border-t-[0.5px] border-white w-[200px]' />
      </div>

      <div className='flex lg:flex-row md:flex-row flex-col justify-between gap-4 mb-11'>
        <div className='lg:w-[60%] w-full leading-10'>
          <p>
            I&apos;m always on the lookout for new opportunities to flex my skills and expertise as a Software Engineer. 
            If you&apos;re in need of a go-getter who&apos;s not afraid to roll up their sleeves and tackle any challenge, feel free 
            to shoot me a message using the form below. I&apos;m also available to chat on LinkedIn , where I share 
            my latest projects and web development insights. I look forward to hearing from you!
          </p>
        </div>

        <div className='border-[0.5px] border-white p-5'>
          <p>Message me here</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <MdEmail className="text-pink-300 text-2xl" />
              <a href="mailto:adebayotitilayo02@gmail.com" className="hover:text-pink-400">
                adebayotitilayo02@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaGithub className="text-pink-300 text-2xl" />
              <a href="https://github.com/Marvywavy" target="_blank" className="hover:text-pink-400">
                github.com/Marvywavy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isSent && (
        <div className="bg-green-900 border border-green-400 text-green-300 px-4 py-3 rounded mb-4">
          ✅ Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className='lg:w-[60%] w-full flex flex-col gap-4'>
        <div className='flex gap-5 flex-col md:flex-row'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => updateFormField("name", e.target.value)}
            required
            placeholder="Name"
            className="w-full p-3 border rounded border-gray-300 bg-transparent outline-none focus:border-pink-300"
            disabled={isLoading}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => updateFormField("email", e.target.value)}
            required
            placeholder="Email"
            className="w-full p-3 border rounded border-gray-300 bg-transparent outline-none focus:border-pink-300"
            disabled={isLoading}
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={(e) => updateFormField("subject", e.target.value)}
          required
          placeholder="Subject"
          className="w-full p-3 border rounded border-gray-300 bg-transparent outline-none focus:border-pink-300"
          disabled={isLoading}
        />

        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => updateFormField("message", e.target.value)}
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-transparent border border-white placeholder-gray-500 focus:outline-none focus:border-pink-300"
          required
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`border px-8 py-3 relative overflow-hidden group rounded-3xl mt-5 border-[#9b1f51]  ${isLoading ? "w-[150px]" : "w-[100px]"} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            {isLoading ? 'Sending...' : 'Send'}
          </span>

          {/* Gradient background */}
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out
                bg-gradient-to-r from-[#2F0222] via-[#68044C] to-[#28034C] z-0 pointer-events-none"
          ></div>
        </button>
      </form>
    </section>
  )
}

export default Contact;