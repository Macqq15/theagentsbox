import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Maciek transformed our newsletter operations. What used to take our team 12 hours now takes 45 minutes, and the quality has actually improved. His automation system is a game-changer.",
    author: "[Client Name]",
    company: "[B2B Company]",
    role: "Marketing Director",
  },
  {
    quote: "Maciek's email marketing strategy generated over $2M in revenue for our e-commerce store. His expertise in automation, deliverability, and campaign strategy is world-class.",
    author: "[Client Name]",
    company: "[E-commerce Company]",
    role: "CEO",
  },
  {
    quote: "From idea to launched MVP in 6 weeks. Maciek's ability to move fast while maintaining quality is impressive. He understands both the technical and business sides perfectly.",
    author: "[Client Name]",
    company: "[Startup Name]",
    role: "Founder",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-teal-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">
          What Clients Say
        </h2>
        <p className="text-center text-white/80 mb-16 text-lg max-w-2xl mx-auto">
          Real feedback from real partnerships
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8">
                <Quote className="w-10 h-10 text-white/40 mb-4" />
                <p className="text-white/90 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                  <p className="text-white/70 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
