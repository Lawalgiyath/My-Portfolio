"use client";

import { Button } from "@/components/ui/button";
import { ThreeScene } from "./three-scene";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center text-center overflow-hidden">
      <ThreeScene />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-shadow-lg" style={{textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
            Lawal Giyath
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8" style={{textShadow: '0 1px 5px rgba(0,0,0,0.2)'}}>
            A frontend developer passionate about building clean, user-friendly interfaces and leading technical communities.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                View my work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10 shadow-lg">
                Get in Touch
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.a 
        href="#about"
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
        <ArrowDown className="h-8 w-8 text-white/50" />
      </motion.a>
    </section>
  );
}
