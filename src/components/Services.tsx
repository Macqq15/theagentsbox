import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Bot, Rocket, TrendingUp, ShoppingCart, Zap } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "AI Newsletter Automation",
    description: "Complete automation from curation to delivery. Handle thousands of subscribers with AI-powered quality control.",
    deliverables: [
      "Complete automation setup",
      "AI-powered content curation",
      "Quality control systems",
      "Multi-platform publishing",
    ],
    timeline: "2-4 weeks",
  },
  {
    icon: Rocket,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "MVP Development & Digital Products",
    description: "Rapid prototyping and full-stack development. From idea to launched product with validation support.",
    deliverables: [
      "Rapid prototyping & validation",
      "Full-stack development",
      "Product launch support",
      "Post-launch optimization",
    ],
    timeline: "4-8 weeks",
  },
  {
    icon: ShoppingCart,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "E-commerce Automation & Operations",
    description: "Amazon seller operations, compliance systems, and email marketing automation that drives revenue.",
    deliverables: [
      "Amazon operations & compliance",
      "Email marketing automation",
      "Analytics & deliverability",
      "Revenue optimization",
    ],
    timeline: "2-4 weeks",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    title: "Sales Funnels & Conversion Systems",
    description: "End-to-end funnel design with automation integration and performance optimization.",
    deliverables: [
      "Funnel strategy & design",
      "Automation integration",
      "A/B testing setup",
      "Performance optimization",
    ],
    timeline: "2-3 weeks",
  },
  {
    icon: Workflow,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    title: "Workflow Automation (n8n)",
    description: "Custom workflow development with complex API integrations and monitoring systems.",
    deliverables: [
      "Custom workflow design",
      "API integrations",
      "Error handling & monitoring",
      "Complete documentation",
    ],
    timeline: "1-3 weeks",
  },
  {
    icon: Zap,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Content & Growth Systems",
    description: "Automated content strategy, social media growth systems, and analytics dashboards.",
    deliverables: [
      "Content automation strategy",
      "Social media growth systems",
      "Analytics dashboards",
      "Ongoing optimization",
    ],
    timeline: "3-6 weeks",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          What I Offer
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          From MVPs to automation systems — clear deliverables and realistic timelines
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-sm">DELIVERABLES</h4>
                    <div className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <Badge variant="secondary" className="text-sm">
                      Timeline: {service.timeline}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
