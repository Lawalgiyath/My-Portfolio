import { skillsetAndTools, servicesAndOfferings } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="shadow-sm">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="text-lg text-muted-foreground mt-2">The tools and technologies I use to build amazing things.</p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <SkillCard title={skillsetAndTools.title} items={skillsetAndTools.items} />
        <SkillCard title={servicesAndOfferings.title} items={servicesAndOfferings.items} />
      </div>
    </section>
  );
}
