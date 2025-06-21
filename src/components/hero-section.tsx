import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="h-[75vh] w-full flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Lawal Giyath
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            A creative developer and designer shaping unique digital experiences. Welcome to my universe of innovation.
          </p>
          <a href="#projects">
            <Button size="lg">
              View my work
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
