import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered parallax gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.1)_0%,_transparent_50%)] translate-y-[-10%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.08)_0%,_transparent_40%)] translate-y-[10%]" />
      
      {/* Floating 3D orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }} />
      
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up delay-400">
            <a
              href="/Osama-Ali-Shah-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card font-display font-semibold hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up delay-500">
            <a
              href="mailto:osamaiq347@gmail.com"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/osama907"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/osama-ali-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
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
