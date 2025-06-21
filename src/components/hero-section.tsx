import { Button } from "@/components/ui/button";
import { ThreeScene } from "@/components/three-scene";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent_60%)]" />
      <ThreeScene />
      <div className="relative z-10 flex flex-col items-center max-w-3xl p-6 md:p-10 space-y-6
                      bg-card/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-2
                       [text-shadow:_0_4px_12px_hsl(var(--primary)/0.4)]">
          Lawal Giyath
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-6">
          A creative developer and designer shaping unique digital experiences. Welcome to my universe of innovation.
        </p>
        <a href="#about">
          <Button size="lg" variant="ghost" className="rounded-full shadow-lg text-lg px-8 py-6
                                                        bg-white/10 backdrop-blur-sm border border-white/20
                                                        hover:bg-white/20 transition-all duration-300 text-white hover:text-white">
            Explore My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
