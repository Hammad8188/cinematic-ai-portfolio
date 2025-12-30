import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Animated decorative line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 opacity-0 animate-fade-in" />
          
          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up">
            <span className="text-gradient glow-text">Osama Ali Shah</span>
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-up delay-200">
            <span className="text-primary">AI Engineer</span>
            <span className="mx-3 text-border">|</span>
            <span>Generative AI</span>
            <span className="mx-3 text-border">|</span>
            <span>Computer Vision</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up delay-300">
            Building intelligent, scalable systems that transform complex problems into elegant solutions.
            Specializing in LLMs, Deep Learning, and cutting-edge AI technologies.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up delay-400">
            <a
              href="mailto:osamaiq347@gmail.com"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/osama907"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/osama-ali-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
