"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav
        className={cn(
          "w-full max-w-2xl transition-all duration-300 ease-in-out rounded-full border border-transparent flex items-center justify-between px-4 py-2",
          isScrolled && "bg-white/30 dark:bg-black/30 backdrop-blur-md border-white/20 shadow-lg"
        )}
      >
        <a href="#home" className="text-lg font-headline font-bold">
          Giyathverse
        </a>
        <ul className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full relative transition-colors duration-300",
                  activeSection === item.href.substring(1)
                    ? "text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
