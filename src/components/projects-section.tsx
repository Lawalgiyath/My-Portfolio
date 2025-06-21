"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
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
        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
        <p className="text-lg text-muted-foreground mt-2">
          A selection of my work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <div
                onClick={() => handleProjectClick(project.title)}
                className="group cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden border shadow-sm group-hover:shadow-lg transition-shadow duration-300 mb-4">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.data_ai_hint}
                  />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.category}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle className="text-3xl">{project.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 py-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <DialogDescription className="text-base pt-4 text-muted-foreground">
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
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline">View all</Button>
      </div>
    </section>
  );
}
