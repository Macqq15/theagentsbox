import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 220, 220, 0.95), rgba(220, 220, 220, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-primary leading-tight">
            Maciek Zawadzki
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-foreground">
            Entrepreneur & Automation Specialist
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building AI-powered operations and expertise-driven newsletter systems
          </p>
          <p className="text-md text-muted-foreground mb-12">
            Based in Rzeszów, Poland
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 h-auto"
          >
            Get in Touch
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
