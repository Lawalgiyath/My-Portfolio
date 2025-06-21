import { Button } from "@/components/ui/button";
import { ThreeScene } from "@/components/three-scene";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      <ThreeScene />
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground mb-4">
          Lawal Giyath
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-8">
          A creative developer and designer shaping unique digital experiences. Welcome to my universe of innovation.
        </p>
        <a href="#about">
          <Button size="lg" variant="default" className="rounded-full shadow-lg">
            Explore My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
