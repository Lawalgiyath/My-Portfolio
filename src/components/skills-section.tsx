import { skillsetAndTools, servicesAndOfferings } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="shadow-lg bg-secondary/50 border-border hover:border-primary/50 transition-colors duration-300">
    <CardHeader>
      <CardTitle className="text-2xl font-headline">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold">My Expertise</h2>
        <p className="text-lg text-foreground/70 mt-2">The tools and technologies I use to build amazing things.</p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <SkillCard title={skillsetAndTools.title} items={skillsetAndTools.items} />
        <SkillCard title={servicesAndOfferings.title} items={servicesAndOfferings.items} />
      </div>
    </section>
  );
}
