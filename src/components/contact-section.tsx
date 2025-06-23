import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-headline font-bold">Let's talk</h2>
        <p className="text-lg text-foreground/70 mt-4 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <Button asChild size="lg">
          <a href="https://wa.me/2349026411798" target="_blank" rel="noopener noreferrer">
            Get in touch
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/LCODER2007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Profile">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/lawal-giyath-6ab470282" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
