"use client"; // Marking this as a client component

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="fixed inset-0 z-0 h-screen w-full overflow-hidden bg-gray-950" // Full-screen background
    >
      
      {/* Stars background */}
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </motion.div>
  );
};
