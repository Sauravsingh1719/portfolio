"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion, useInView } from "framer-motion";
import SpringModal from "./ProjectModal";


const cardDataList = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: "/images/portfolio.png",
    projectLink: "/projects/123",
  },
  {
    title: "Interactive 3D UI",
    description: "Engage users with an immersive 3D user experience.",
    imageUrl: "/images/dtg.png",
    projectLink: "/projects/124",
  },
  {
    title: "The Fitness Centre",
    description: "Create beautiful and dynamic designs with modern CSS techniques.",
    imageUrl: "/images/gym.png",
    projectLink: "/projects/125",
  },
];

export function ThreeDCard() {
  
  const [selectedProject, setSelectedProject] = useState<any>(null);

  
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  // Function to open the modal with the selected project
  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-10 mt-40">
        <motion.h1
          ref={headingRef} // Attach the ref to the heading
          initial={{ x: -99, opacity: 0 }}
          animate={isHeadingInView ? { x: 0, opacity: 1 } : { x: -99, opacity: 0 }} // Animate based on visibility
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent sm:leading-tight md:leading-tight"
        >
          My Works
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={isHeadingInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} // Animate based on visibility
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-lg font-medium leading-tight text-transparent sm:leading-tight md:leading-tight"
        >
          Here are some of the projects I’ve worked on. Each one reflects my passion for creating functional, responsive, and engaging web applications. Take a look and see how I bring ideas to life!
        </motion.p>
      </div>

      <div className="bg-neutral-600 flex flex-wrap justify-center gap-8 px-10">
        {cardDataList.map((cardData, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {cardData.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-white"
              >
                {cardData.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={cardData.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              {/* Case Study Button */}
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href="/CaseStudy">Case Study</a>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href="https://dtg-five.vercel.app/">Live Preview</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Modal for Case Study */}
      {selectedProject && (
        <SpringModal
          isOpen={!!selectedProject}
          setIsOpen={closeModal}
          project={selectedProject} // Pass the project data to the modal
        />
      )}
    </div>
  );
}