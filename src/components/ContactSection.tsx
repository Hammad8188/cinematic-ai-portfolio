import { useInView } from '../hooks/useInView';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'osamaiq347@gmail.com', href: 'mailto:osamaiq347@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 347 5356933', href: 'tel:+923475356933' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: null },
    { icon: Github, label: 'GitHub', value: 'osama907', href: 'https://github.com/osama907' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Osama Ali Shah', href: 'https://linkedin.com/in/osama-ali-shah' },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--accent)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2
            className={`section-title text-center mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let's Connect
          </h2>
          
          <p
            className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Ready to collaborate on cutting-edge AI projects? Let's build something extraordinary together.
          </p>

          <div
            className={`glass-card p-8 md:p-12 glow-box transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group ${
                    !item.href ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:osamaiq347@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-opacity group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
