import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold">My Skillset</h2>
        <p className="text-lg text-foreground/70 mt-2">The tools and technologies I use to build amazing things.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                <skill.Icon className="h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-body font-bold">{skill.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
