"use client"
import { AuroraHero } from '@/components/AuroraHero';
import Contact from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { ThreeDCard } from '@/components/ThreeDCard';
import { Writing } from '@/components/Writing';
import { NavbarDemo } from '@/components/Navbar'; // Import the updated Navbar
import React, { useRef } from 'react';

const Page = () => {
  // Create a ref for the Contact section
  const contactRef = useRef<HTMLDivElement | null>(null);

  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Pass the scrollToContact function to NavbarDemo */}
      <NavbarDemo scrollToContact={scrollToContact} />
      <Hero />
      <AuroraHero />
      <ThreeDCard />
      <Writing />
      {/* Pass the contactRef to the Contact component */}
      <Contact ref={contactRef} />
    </div>
  );
};

export default Page;
