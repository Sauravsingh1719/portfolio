"use client"
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover";
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-slate-950 border-white/[0.2] rounded-lg mx-4 my-20 lg:mx-60 lg:my-20 sm:mx-10 sm:my-20 text-white p-8">
      
      <div>
        <h1 className="font-extrabold text-5xl py-8">Case Study: The Fitness Center</h1>
        <hr />
      </div>

      <div className="py-8">
        <h2 className="font-bold text-2xl">Project Overview:</h2>
        <p className="text-lg">
          <span className="font-bold text-2xl underline">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>The Fitness Center</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/gym.png" height="400" width="450" alt="fitness center preview" />
              </HoverCardContent>
            </HoverCard>
          </span>{" "} 
          is a multi-page website created for a fitness center. It highlights various fitness programs such as aerobics, Zumba, and strength training, each on dedicated pages. Users can view faculty details, explore monthly and annual pricing plans, and register online to receive subscription details and a follow-up message via EmailJS.
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
          <li>Showcase the gym's services, including aerobics, Zumba, and strength training.</li>
          <li>Display faculty information and build trust with potential clients.</li>
          <li>Provide seamless online registration and immediate email confirmation using EmailJS.</li>
        </ul>
      </div>

      {/* Features and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Features and Solutions:</h2>
        
        {/* Service Pages */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Dedicated Service Pages</h3>
          <p className="text-lg">
            Each fitness service has its own page, detailing the benefits and information for programs such as aerobics, Zumba, and strength training, helping users choose the right option.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Faculty Section</h3>
          <p className="text-lg">
            A section showcasing the gym's instructors, complete with their qualifications, helping build trust and credibility for potential clients.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Pricing Plans</h3>
          <p className="text-lg">
            An easy-to-navigate section presenting monthly and annual plans, allowing users to make informed subscription choices based on their preferences.
          </p>
        </div>

        {/* Registration Form with EmailJS */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Registration Form with EmailJS Integration</h3>
          <p className="text-lg">
            A streamlined registration form that sends an email confirmation with subscription details, enhancing user experience by offering immediate feedback and a professional touch.
          </p>
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Challenges and Solutions:</h2>
        <p className="text-lg">
          Designing a multi-page structure with smooth transitions while maintaining optimal load speeds posed challenges. Framer Motion enabled smooth animations, and EmailJS allowed for direct communication without compromising performance.
        </p>
      </div>

      {/* Outcome */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Outcome:</h2>
        <p className="text-lg">
          The website successfully provides users with a clear and engaging way to explore services, view pricing, and initiate membership registrations, supporting the gym's growth and enhancing user engagement.
        </p>
      </div>
      <div>
        <a href='https://tfc1.netlify.app/'>
        <button className='bg-tansparent rounded-lg shadow-md shadow-cyan-200 p-2'>
          Live Preview
        </button>
        </a>
      </div>
    </div>
  );
}

export default Page;
