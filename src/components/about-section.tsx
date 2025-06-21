import Image from "next/image";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
            <div className="relative">
                <Image
                src="https://placehold.co/400x450.png"
                alt="Lawal Giyath"
                width={400}
                height={450}
                className="rounded-xl shadow-2xl"
                data-ai-hint="professional portrait"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/10">
                    <p className="text-4xl font-bold text-white">5+</p>
                    <p className="text-sm text-primary-foreground/80">Years of Experience</p>
                </div>
            </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold">About Me</h2>
          <p className="text-lg text-foreground/70">
            I'm a passionate and results-driven developer and designer with a knack for crafting beautiful, functional, and user-centric digital experiences. I thrive on solving complex problems and turning ideas into reality through clean code and elegant design.
          </p>
          <Button size="lg">Download CV</Button>
        </div>
      </div>
    </section>
  );
}
