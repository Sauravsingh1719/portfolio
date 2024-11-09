  "use client";
  import React, { useState } from "react";
  import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
  import { cn } from "@/lib/utils";

  interface NavbarProps {
    scrollToContact: () => void;
    className?: string; 
  }

  export function NavbarDemo({ scrollToContact }: NavbarProps) {
    return (
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" scrollToContact={scrollToContact} />
      </div>
    );
  }

  function Navbar({ className, scrollToContact }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <a href="/" className="font-bold text-lg">Home</a>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="text-sm grid grid-cols-1 gap-1 p-2">
              <ProductItem
                title="Old Portfolio"
                href="https://saurav160.netlify.app/"
                src="/images/portfolio.png"
                description="My First Portfolio Project"
              />
              <ProductItem
                title="Data to grow"
                href="https://dtg-five.vercel.app/"
                src="/images/dtg.png"
                description="Data to Grow Website"
              />
              <ProductItem
                title="The Fitness Centre"
                href="https://tfc1.netlify.app/"
                src="/images/gym.png"
                description="Stunning responsive website for the fitness center"
              />
            </div>
          </MenuItem>
          {/* Attach scrollToContact function to the Contact link */}
          <a onClick={scrollToContact} className="font-bold text-lg cursor-pointer">
            Contact
          </a>
        </Menu>
      </div>
    );
  }
