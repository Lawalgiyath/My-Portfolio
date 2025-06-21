"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setIsScrolled(isScrolled);

      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement | null);
      const scrollPosition = window.scrollY + 100;
      
      let currentSection = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = navItems[i].href.substring(1);
          break;
        }
      }
      
      if (window.scrollY < 200) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : '')}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Giyathverse
          </a>
          <nav className="hidden md:flex items-center space-x-2 bg-secondary/50 border border-border rounded-full px-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-colors duration-300 font-medium relative",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="active-nav-item"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
