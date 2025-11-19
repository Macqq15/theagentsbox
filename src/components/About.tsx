export const About = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            What I Do
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Building digital products and automation systems for entrepreneurs
          </p>

          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border">
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                I'm <span className="font-semibold text-primary">Maciek Zawadzki</span> — an entrepreneur and builder specializing in digital products and automation systems.
              </p>
              <p>
                Over the past 10 years, I've helped businesses scale through smart automation and strategic digital products. From generating <span className="font-semibold text-primary">$10M+ in e-commerce revenue</span> through email marketing to co-founding <span className="font-semibold text-primary">LetterOperators</span> (AI-powered newsletter automation), I focus on building systems that work while you sleep.
              </p>
              <p>
                Today, I work with entrepreneurs and companies to build MVPs, automate operations, and create digital products that solve real problems. Whether it's AI-powered newsletters sending 250,000+ emails weekly, Amazon seller operations, or building sleep apps — I turn ideas into profitable realities.
              </p>
              <p>
                Based in <span className="font-medium">Rzeszów, Poland</span>, working globally with a partnership-driven approach. Every system I build is designed for scale, reliability, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
