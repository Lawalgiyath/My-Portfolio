import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold">What Clients Say</h2>
        <p className="text-lg text-foreground/70 mt-2">
          Feedback from people I've worked with.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="shadow-lg bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-8">
              <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="mb-6 text-foreground/80 italic">"{item.comment}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                  <AvatarImage src={item.avatarUrl} alt={item.name} />
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
