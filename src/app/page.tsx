"use client"
import { AuroraHero } from '@/components/AuroraHero';
import Contact from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { ThreeDCard } from '@/components/ThreeDCard';
import { Writing } from '@/components/Writing';
import { NavbarDemo } from '@/components/Navbar';
import React, { useRef } from 'react';
import { ModeToggle } from '@/components/Theme';

const Page = () => {
  // Create a ref for the Contact section
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Scroll to Contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavbarDemo scrollToContact={scrollToContact} />
      <Hero scrollToContact={scrollToContact} />
      <AuroraHero />
      <ThreeDCard />
      <Writing />
      <ModeToggle />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Page;
