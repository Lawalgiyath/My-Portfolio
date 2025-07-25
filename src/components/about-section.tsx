import Image from "next/image";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
            <div className="relative">
                <Image
                src="https://i.postimg.cc/0NGxWjLR/Whats-App-Image-2025-06-23-at-22-55-23-f44a34aa.jpg"
                alt="A portrait of Lawal Giyath"
                width={400}
                height={450}
                className="rounded-xl shadow-2xl object-cover w-[400px] h-[450px]"
                data-ai-hint="professional portrait"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/10">
                    <p className="text-4xl font-bold text-white">2+</p>
                    <p className="text-sm text-primary-foreground/80">Years of Experience</p>
                </div>
            </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold">About Me</h2>
          <p className="text-lg text-foreground/70">
            I'm a frontend developer passionate about creating responsive, user-friendly interfaces. I excel at transforming design concepts into clean, efficient code, collaborating with teams on real-world projects, and leading technical initiatives. I am dedicated to continuous learning and am currently expanding my expertise in React, design systems, and frontend performance optimization.
          </p>
          <Button size="lg" asChild>
            <a href="https://wa.me/2349026411798?text=Hi%20Lawal%2C%20I'd%20like%20to%20request%20your%20CV." target="_blank" rel="noopener noreferrer">Request CV</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
