import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Bot, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Newsletter Automation & AI Agents",
    description: "Complete newsletter systems from content curation to delivery. AI-powered processing with quality control and multi-platform publishing.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Development",
    description: "Complex automation workflows and API integrations. Building scalable systems that handle high-volume operations reliably.",
  },
  {
    icon: FileText,
    title: "Content Automation Systems",
    description: "AI-powered content processing, curation, and quality control. Semantic search, RAG systems, and intelligent content routing.",
  },
  {
    icon: Settings,
    title: "Technical Operations",
    description: "Full-stack automation and system optimization. Streamlining workflows, building enablers, and eliminating manual processes.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-primary">
          What I Offer
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Technical expertise focused on automation, AI integration, and operational excellence
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
