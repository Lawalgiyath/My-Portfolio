"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  
  const handleProjectClick = (projectName: string) => {
    if (typeof window !== 'undefined') {
      const history = JSON.parse(localStorage.getItem('browsingHistory') || '[]');
      if (!history.includes(projectName)) {
        history.push(projectName);
        localStorage.setItem('browsingHistory', JSON.stringify(history));
      }
    }
  };

  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold">Featured Projects</h2>
        <p className="text-lg text-foreground/70 mt-2">
          A selection of my work.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full transition-all duration-300 shadow-sm hover:shadow-md neumorphism-btn"
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    onClick={() => handleProjectClick(project.title)}
                    className="group relative block w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={project.data_ai_hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] bg-white/50 dark:bg-black/50 backdrop-blur-lg border-white/20">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-3xl">{project.title}</DialogTitle>
                    <div className="flex flex-wrap gap-2 py-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <DialogDescription className="text-foreground/80 text-base pt-4">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                        data-ai-hint={project.data_ai_hint}
                    />
                  </div>
                  {project.link && (
                    <Button asChild className="mt-4">
                      <Link href={project.link} target="_blank">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
