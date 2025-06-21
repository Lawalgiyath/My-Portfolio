import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-bold">Let's Connect</h2>
        <p className="text-lg text-foreground/70 mt-4 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <Button asChild size="lg" className="rounded-full shadow-lg">
          <a href="mailto:lawal.giyath@example.com">
            Say Hello
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github className="h-7 w-7" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-7 w-7" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
