import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Efficiency over perfection",
  "Partnership-driven, not cold outreach",
  "Technical excellence with business pragmatism",
  "2-hour daily work blocks (optimized for maximum impact)",
  "Building enablers for deeper tech exploration",
];

export const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">
            Approach & Philosophy
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            How I work and what drives my approach to building systems
          </p>
          
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-8">
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
