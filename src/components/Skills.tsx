"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", value: 95, image:'/images/html.png' },
  { name: "Tailwind CSS", value: 90, image:"/images/tailwind.png" },
  { name: "JavaScript", value: 70, image:"/images/js.png" },
  { name: "Next.js", value: 60, image:"/images/nextjs.png" },
  { name: "Framer Motion", value: 75, image:"/images/framer.png" },
  { name: "MongoDB", value: 60, image:"/images/mongo.png" },
  { name: "NextAuth", value: 70, image: "/images/nextAuth.png" },
];

export function SkillsProgress() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [progressValues, setProgressValues] = React.useState<number[]>(
    Array(skills.length).fill(0) // Initialize all progress values to 0
  );

  React.useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setProgressValues((prev) => {
          return prev.map((value, index) =>
            value < skills[index].value ? value + 5 : skills[index].value
          );
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div className="px-[20%]">
      <div className="flex justify-center flex-col gap-10 mt-40">
        <motion.h1
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent sm:leading-tight md:leading-tight"
        >
          My Skills
        </motion.h1>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-lg font-bold leading-tight text-transparent sm:leading-tight md:leading-tight my-5 flex flex-row gap-5"
              >
                {skill.name}
                <Image src={skill.image} height="32" width="32" alt="logo"></Image>
              </motion.p>
              <Progress value={progressValues[index]} className="w-100 h-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
