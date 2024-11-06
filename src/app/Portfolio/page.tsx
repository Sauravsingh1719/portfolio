"use client"
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover";
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-slate-950 border-white/[0.2] rounded-lg mx-4 my-20 lg:mx-60 lg:my-20 sm:mx-10 sm:my-20 text-white p-8">
      
      <div>
        <h1 className="font-extrabold text-5xl py-8">Case Study: My First Portfolio</h1>
        <hr />
      </div>

      <div className="py-8">
        <h2 className="font-bold text-2xl">Project Overview:</h2>
        <p className="text-lg">
          <span className="font-bold text-2xl underline">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>My First Portfolio</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/portfolio.png" height="400" width="450" alt="portfolio preview" />
              </HoverCardContent>
            </HoverCard>
          </span>{" "} 
          is a responsive portfolio website designed to showcase my skills, projects, and professional journey in a visually engaging manner. Built using React, Material UI, and Framer Motion, the portfolio includes dynamic interactions and animations to enhance user engagement. The site also features a contact form powered by EmailJS for seamless communication.
        </p>
      </div>

      {/* Technologies Used */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Technologies Used:</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-bold text-xl">Frontend:</span>{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>React</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/portfolio/react.png" height="32" width="32" alt="react logo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Material UI</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/portfolio/mui.png" height="32" width="32" alt="material ui logo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Framer Motion</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/framer.png" height="32" width="32" alt="framer motion logo" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <span className="font-bold text-xl">Contact Form:</span> 
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>EmailJS</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/portfolio/emailjs.png" height="32" width="32" alt="emailjs logo" />
              </HoverCardContent>
            </HoverCard>
          </li>
        </ul>
      </div>

      {/* Objectives */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Objectives:</h2>
        <ul className="list-disc pl-6">
          <li>Create an interactive and responsive portfolio to highlight my skills and projects.</li>
          <li>Incorporate engaging animations to elevate the user experience.</li>
          <li>Provide an intuitive contact form for seamless user communication.</li>
        </ul>
      </div>

      {/* Features and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Features and Solutions:</h2>
        
        {/* Welcome Page Animation */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Animated Welcome Page</h3>
          <p className="text-lg">
            A dynamic welcome page with hover-triggered animations that captivates visitors and showcases interactive elements made with Framer Motion.
          </p>
        </div>

        {/* Skills and Knowledge Section */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Skills and Knowledge Section</h3>
          <p className="text-lg">
            A visually structured section that presents my technical skills and knowledge areas, making it easy for potential clients or employers to understand my expertise.
          </p>
        </div>

        {/* Contact Form with EmailJS */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Contact Form with EmailJS Integration</h3>
          <p className="text-lg">
            A streamlined contact form that sends confirmation emails using EmailJS. This setup provides immediate communication and a professional touch for user inquiries.
          </p>
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Challenges and Solutions:</h2>
        <p className="text-lg">
          Implementing engaging animations and integrating EmailJS presented unique challenges. ChatGPT and various online resources were instrumental in overcoming technical hurdles and refining the user experience.
        </p>
      </div>

      {/* Outcome */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Outcome:</h2>
        <p className="text-lg">
          The portfolio site effectively highlights my capabilities and leaves a lasting impression on visitors. It serves as an impactful tool for showcasing my work and connecting with potential clients.
        </p>
      </div>
      <div>
        <a href='https://saurav160.netlify.app/'>
        <button className='bg-tansparent rounded-lg shadow-md shadow-cyan-200 p-2'>
          Live Preview
        </button>
        </a>
      </div>
    </div>
  );
}

export default Page;
