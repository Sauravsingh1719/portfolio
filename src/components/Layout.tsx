"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Hero Section 1
      </p>
      
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
      Hero Section 2
      </p>
      
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
      Hero Section 3
      </p>
      
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
      Hero Section 4
      </p>
      
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
      Hero Section 5
      </p>
      
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Testimonials
      </p>
      
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Book Meeting
      </p>
      
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Admin Page
      </p>
      
    </div>
  );
};
const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Admin Blog Page
      </p>
      
    </div>
  );
};
const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Admin Testimonial page
      </p>
      
    </div>
  );
};
const SkeletonEleven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Blog page
      </p>
      
    </div>
  );
};
const SkeletonTwelve = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Login page
      </p>
      
    </div>
  );
};
const SkeletonThirteen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Admin New Blog page
      </p>
      
    </div>
  );
};const SkeletonFourteen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Admin New Testimonial Page
      </p>
      
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/2.png"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 ",
    thumbnail:
      "/images/dtg/3.png"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 ",
    thumbnail:
      "/images/dtg/4.png"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/5.png"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/6.png"
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/7.png"
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/8.png"
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/Admin.png"
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/adminblog.png"
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/admintest.png"
  },
  {
    id: 11,
    content: <SkeletonEleven />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/Blog.png"
  },
  {
    id: 12,
    content: <SkeletonTwelve />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/Login.png"
  },
  {
    id: 13,
    content: <SkeletonThirteen />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/NewPost.png"
  },
  {
    id: 14,
    content: <SkeletonFourteen />,
    className: "md:col-span-2 ",
    thumbnail:
      "/images/dtg/newtest.png"
  },
];
