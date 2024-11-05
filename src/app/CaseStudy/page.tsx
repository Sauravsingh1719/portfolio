"use client"
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover";
import Image from 'next/image';
import { useState } from "react";
import SpringModal from '@/components/SpringModal';
import { LayoutGridDemo } from '@/components/Layout';


const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="mx-4 my-20 lg:mx-60 lg:my-20 sm:mx-10 sm:my-20 text-white p-5">
      
      
      <div>
        <h1 className="font-extrabold text-5xl py-8">Case Study: Data to Grow</h1>
        <hr />
      </div>
      
      

      <div className='py-5 flex flex-row gap-5'>
        <h1 className='font-bold text-3xl'>Project Screenshots</h1>
      {/* Download CV button from bottom left */}
      <div className="p-2 bg-slate-900 rounded-lg grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className=" text-white font-medium p-1 rounded hover:opacity-90 transition-opacity"
      >
        Open Modal
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <LayoutGridDemo /> 
      </SpringModal>
    </div>
      </div>
      <div className="py-8">
        <h2 className="font-bold text-2xl">Project Overview:</h2>
        <p className="text-lg">
          <span className="font-bold text-2xl underline">{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>"Data To Grow"</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/dtg.png" height="400" width="450" alt="nodemailerlogo" />
              </HoverCardContent>
            </HoverCard></span> is a professional website crafted for a data analyst looking to establish an online presence, connect with clients, and showcase expertise. The site enables users to book appointments, access insightful blog posts, subscribe to a newsletter, and view testimonials—all supported by a secure admin panel for backend management. This project was built with scalability, user engagement, and smooth admin management in mind.
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
                <span>Next.js 14</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/nextjs.png" height="32" width="32" alt="nextlogo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>TypeScript</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/typescript.png" height="32" width="32" alt="typelogo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Tailwind</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/tailwind.png" height="32" width="32" alt="tailwindlogo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Framer Motion</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/framer.png" height="32" width="32" alt="fmlogo" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <span className="font-bold text-xl">Backend:</span>{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>MongoDB</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/mongo.png" height="32" width="32" alt="mongologo" />
              </HoverCardContent>
            </HoverCard>,{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Nodemailer</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/nodemailer.png" height="32" width="32" alt="nodemailerlogo" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li><span className="font-bold text-xl">Authentication:</span> {" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>NextAuth</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/nextauth.png" height="32" width="32" alt="nodemailerlogo" />
              </HoverCardContent>
            </HoverCard></li>
          <li><span className="font-bold text-xl">Design Elements:</span>{" "}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span>Shadcn</span>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image src="/images/shadcn.png" height="32" width="32" alt="nodemailerlogo" />
              </HoverCardContent>
            </HoverCard></li>
        </ul>
      </div>
      
      {/* Objectives */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Objectives:</h2>
        <ul className="list-disc pl-6">
          <li>Create an engaging homepage that reflects the company’s goals and expertise.</li>
          <li>Enable seamless client interactions with features like appointment booking and newsletters.</li>
          <li>Design a content-rich blog section for knowledge sharing.</li>
          <li>Develop a comprehensive admin panel to manage appointments, blogs, newsletters, and testimonials effectively.</li>
        </ul>
      </div>
      
      {/* Features and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Features and Solutions:</h2>
        
        {/* Homepage Design */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Homepage Design</h3>
          <p className="text-lg">
            A welcoming homepage was created to communicate the business’s purpose with dynamic content blocks, a “Let’s Talk” button for easy client booking, and a testimonial section managed by the admin.
          </p>
        </div>

              <div className="py-4">
        <h3 className="font-semibold text-xl">Blog Section with Admin Controls</h3>
        <p className="text-lg">
          The blog section provides a seamless experience for users to read blog content, with a clean, distraction-free interface that focuses on the articles. Admins have additional controls available in the backend to edit or delete any blog post directly. This separation ensures users have a consistent reading experience while empowering admins to manage content dynamically.
        </p>
      </div>
        
        {/* Authentication */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Secure Authentication with NextAuth</h3>
          <p className="text-lg">
            Integrated NextAuth to protect admin-only sections. This ensures that only verified admins can access the backend, maintaining data security and user privacy.
          </p>
        </div>
        
        {/* Appointment Booking System */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Appointment Booking System</h3>
          <p className="text-lg">
            Includes a form for users to book appointments, saved in MongoDB. Confirmation emails are sent to both the user and the admin, with backend appointment management options for tracking status.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Newsletter Subscription</h3>
          <p className="text-lg">
            Users can subscribe to newsletters, and their emails are stored in MongoDB. The admin can access these emails for targeted outreach.
          </p>
        </div>

        {/* Blog Section */}
        <div className="py-4">
          <h3 className="font-semibold text-xl">Blog Section with Category Management</h3>
          <p className="text-lg">
            An admin-managed blog section with category options allows users to filter blogs by topics of interest. Admins can organize blogs by existing or new categories from the backend.
          </p>
        </div>
      </div>
      
      {/* Challenges and Solutions */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Challenges and Solutions:</h2>
        <p className="text-lg">
          Implementing the category feature and securing the backend posed challenges. Support from Hitesh Choudhary’s <i>Chai aur Code</i> YouTube channel helped in authentication, while ChatGPT assisted in resolving category part other technical issues.
        </p>
      </div>

      {/* Outcome */}
      <div className="py-8">
        <h2 className="font-bold text-2xl">Outcome:</h2>
        <p className="text-lg">
          The “Data to Grow” website provides a comprehensive platform for client interaction, knowledge sharing, and business growth. The responsive frontend and secure backend create an efficient system that meets both user and admin needs.
        </p>
      </div>
      
    </div>
  );
}

export default Page;
