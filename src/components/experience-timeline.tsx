import { experiences } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold">My Journey</h2>
        <p className="text-lg text-foreground/70 mt-2">
          A timeline of my professional growth and achievements.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        {experiences.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "mb-8 flex md:justify-between items-center w-full",
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            )}
          >
            <div className="hidden md:block w-5/12"></div>
            
            <div className="z-10 hidden md:flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                <item.Icon className="h-5 w-5" />
              </div>
            </div>

            <div className="w-full md:w-5/12">
              <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="md:hidden h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <item.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{item.date}</p>
                      <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                      <p className="text-md font-semibold text-primary">{item.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
