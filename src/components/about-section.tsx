import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Lawal Giyath"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="professional portrait"
            />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate and results-driven developer and designer with a knack for crafting beautiful, functional, and user-centric digital experiences. I thrive on solving complex problems and turning ideas into reality through clean code and elegant design.
          </p>
        </div>
      </div>
    </section>
  );
}
