"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold">Featured Work</h2>
        <p className="text-lg text-foreground/70 mt-2">
          A selection of my best projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <div
                onClick={() => handleProjectClick(project.title)}
                className="group cursor-pointer bg-secondary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-border"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.data_ai_hint}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mt-1">{project.category}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-secondary border-border">
              <DialogHeader>
                <DialogTitle className="text-3xl font-headline">{project.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 py-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary-foreground">{tag}</Badge>
                  ))}
                </div>
                <DialogDescription className="text-base pt-4 text-foreground/80">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 rounded-lg overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={project.data_ai_hint}
                />
              </div>
              {project.link && (
                <Button asChild className="mt-4 w-full">
                  <Link href={project.link} target="_blank">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button variant="outline" size="lg">View all Projects</Button>
      </div>
    </section>
  );
}
