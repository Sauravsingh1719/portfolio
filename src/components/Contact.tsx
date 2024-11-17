"use client";
import React, { forwardRef } from 'react';
import { RevealLinks } from './RevealLinks';
import { motion } from "framer-motion";
import { ThreeDCard } from './Form';

// Use forwardRef to pass the ref to the root div of Contact
const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='py-[5%] min-h-screen'>
      <div className="flex justify-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent sm:leading-tight md:leading-tight mb-20"
        >
          Contact
        </motion.h1>
      </div>
      <div className='flex items-center justify-center px-10 lg:px-[20%] md:px-20 sm:px-10'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-5 lg:col-span-5'>
            <RevealLinks />
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-4 rounded-md flex items-center'>
            <ThreeDCard />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
