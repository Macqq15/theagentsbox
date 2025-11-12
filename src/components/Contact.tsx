import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-primary">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Open to partnerships and technical collaborations
          </p>
          
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              <CardDescription className="text-base">
                Working with 6-month runway, focused on high-impact projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <a
                    href="mailto:contact@maciekzawadzki.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@maciekzawadzki.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <MapPin className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-muted-foreground">Rzeszów, Poland</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <Linkedin className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium text-primary">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/maciekzawadzki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    linkedin.com/in/maciekzawadzki
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:contact@maciekzawadzki.com"}
                >
                  Send an Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
