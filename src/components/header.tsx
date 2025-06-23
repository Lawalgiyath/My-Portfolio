"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledUpdate = window.scrollY > 10;
      setIsScrolled(isScrolledUpdate);

      const scrollPosition = window.scrollY + 150;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }
      
      let currentSection = "home";
      const sectionElements = navItems.map(item => document.querySelector(item.href) as HTMLElement | null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-lg border-l-border/50">
                 <nav className="flex flex-col items-center justify-center h-full gap-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          "text-2xl font-medium transition-colors duration-300",
                           activeSection === item.href.substring(1)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                      >
                        {item.name}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
