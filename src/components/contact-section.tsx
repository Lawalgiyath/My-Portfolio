import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">Let's talk</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <Button asChild size="lg">
          <a href="mailto:lawal.giyath@example.com">
            Get in touch
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
