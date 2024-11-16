"use client";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { FlipWordsDemo } from "./Flipword";
import { useRef } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface HeroProps {
  scrollToContact: () => void;
}

export const Hero = ({ scrollToContact }: HeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="relative z-10 pt-72 h-dvh flex flex-col items-center px-10 mb-10">
      <span className="mb-1.5 inline-block rounded-full text-white bg-gray-600/50 px-3 py-1.5 text-sm">
        Hi, There
      </span>

      {/* "I am Saurav" animation from the top */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
      >
        I'm{" "}
        <motion.span
          whileHover={{
            scale: 1.2,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 2,
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #13FFAA, #1E67C6)",
          }}
        >
          Saurav
        </motion.span>
      </motion.h1>

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
        className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
      >
        <FlipWordsDemo />
      </motion.h1>

      {/* "Full Stack Web Developer" animation from the left */}
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        className="my-8 max-w-xl text-center text-white font-4xl font-medium leading-relaxed md:text-lg md:leading-relaxed">
        As a passionate full-stack web developer, I turn ideas into interactive,
        scalable web applications. Whether it's creating seamless user experiences
        or building robust backend systems, I'm excited to share my journey, projects,
        and skills with you. Let's explore the world of code together!
      </motion.p>

      {/* Buttons animation from the bottom corners */}
      <div className="flex flex-row gap-5">
        {/* Download CV button from bottom left */}
        <a href="/Resume.pdf" download>
          <motion.button
            initial={{ x: -100, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            Download CV
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </a>

        {/* Hire Me button from bottom right with scroll */}
        <motion.button
          onClick={scrollToContact} // Trigger scroll on click
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Hire Me
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </div>
  );
};
