"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-neutral-600 flex flex-wrap justify-center  shadow-lg shadow-gray-500">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-100 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border">
          <div>
            <h1 className="font-bold text-black py-5">Have an idea or a project in mind? Drop me a message,<br /> and let's connect to bring it to life!</h1>
          </div>
          {/* Form starts here */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Name */}
            <CardItem translateZ="50" className="text-neutral-600 dark:text-white">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full sm:w-96 px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </CardItem>

            {/* Email */}
            <CardItem translateZ="60" className="text-neutral-600 dark:text-white">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full sm:w-96 px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </CardItem>

            {/* Phone Number */}
            <CardItem translateZ="70" className="text-neutral-600 dark:text-white">
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-black">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                className="w-full sm:w-96 px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </CardItem>

            {/* Message */}
            <CardItem translateZ="80" className="text-neutral-600">
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                rows={4}
                className="w-full sm:w-96 px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button type="submit" className="cursor-pointer group relative flex w-fit items-center gap-1.5 rounded-full bg-black px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50">
                Contact
              </button>
            </CardItem>
          </form>
        </CardBody>
      </CardContainer>
    </div>
  );
}
