import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Lawal Giyath"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl object-cover border-8 border-card"
              data-ai-hint="professional portrait"
            />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold">About Me</h2>
          <p className="text-lg text-foreground/80">
            I'm a passionate and results-driven developer and designer with a knack for crafting beautiful, functional, and user-centric digital experiences. I thrive on solving complex problems and turning ideas into reality through clean code and elegant design.
          </p>
          <p className="text-lg text-foreground/80">
            With a journey spanning both creative design and robust development, I bring a holistic perspective to every project. My goal is to not only build things that work well but also feel great to use. I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
}
