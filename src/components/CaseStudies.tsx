import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudy {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "LetterOperators",
    tagline: "AI-First Newsletter Platform",
    problem: "B2B companies and media companies spending 12+ hours weekly on newsletter production",
    solution: "Built end-to-end AI automation system with content curation, quality control, and multi-platform delivery",
    result: "Sending 250,000+ emails weekly for 20+ clients. Reduced production time from 12 hours to 45 minutes (92% time savings)",
  },
  {
    title: "Amazon Operations Services",
    tagline: "E-commerce Excellence & Compliance",
    problem: "Amazon sellers struggling with complex compliance requirements and operational efficiency across multiple accounts",
    solution: "Built automated compliance systems and operational workflows to ensure 100% compliance and streamlined multi-account management",
    result: "Managing multiple Amazon seller accounts with zero compliance issues and optimized operational workflows",
  },
  {
    title: "Sleep App for Operators",
    tagline: "Health Tech for Entrepreneurs (In Development)",
    problem: "Entrepreneurs and operators struggling with sleep quality due to stress and irregular schedules",
    solution: "Building a science-backed sleep improvement app specifically designed for operators and entrepreneurs",
    result: "Currently in development phase - focusing on evidence-based interventions for better sleep",
  },
  {
    title: "E-commerce Email Marketing",
    tagline: "Revenue-Driving Email Automation",
    problem: "E-commerce shops with underperforming email systems leaving money on the table",
    solution: "Complete email marketing overhaul including automation workflows, campaign strategy, deliverability optimization, and analytics",
    result: "Generated $10M+ in revenue across multiple e-commerce clients through strategic email marketing",
  },
  {
    title: "TREBIT",
    tagline: "Premium Trends Intelligence",
    problem: "Manual trend research and curation taking 15+ hours weekly with inconsistent quality",
    solution: "Built automated content curation and analysis pipeline to deliver high-quality trend intelligence",
    result: "$60K revenue generated across two sales windows with highly engaged community",
  },
  {
    title: "Creator Growth System",
    tagline: "LinkedIn Growth Strategy (2-3 Years)",
    problem: "Creator stuck at 10K followers with inconsistent growth and no clear content strategy",
    solution: "Developed and executed comprehensive content marketing strategy over 2-3 years focusing on LinkedIn growth",
    result: "Grew creator from 10K to 50K followers on LinkedIn (5x growth) through consistent content and strategic engagement",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          Projects & Experience
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Real problems solved with digital products and automation systems
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-2 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-accent">
                  {study.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Problem */}
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">PROBLEM</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">SOLUTION</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">RESULT</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                      {study.result}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
