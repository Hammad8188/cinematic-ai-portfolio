import { useInView } from '../hooks/useInView';
import { useMouseParallax } from '../hooks/useParallax';
import { Brain, Eye, Bot, Database } from 'lucide-react';

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const mousePos = useMouseParallax(0.015);

  const highlights = [
    { icon: Brain, label: 'Machine Learning', desc: 'Deep Learning & NLP' },
    { icon: Eye, label: 'Computer Vision', desc: 'Image & Video Analysis' },
    { icon: Bot, label: 'Generative AI', desc: 'LLMs & RAG Systems' },
    { icon: Database, label: 'Full Stack', desc: 'Flask, FastAPI, Streamlit' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2
            className={`section-title text-center mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About Me
          </h2>

          <div
            className={`glass-card p-8 md:p-12 mb-12 transition-all duration-700 delay-200 hover:transform-gpu hover:scale-[1.02] ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transform: isInView ? `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)` : undefined,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI Engineer with expertise in <span className="text-foreground">Machine Learning</span>,{' '}
              <span className="text-foreground">Deep Learning</span>,{' '}
              <span className="text-foreground">Computer Vision</span> (Image & Video Analysis) and{' '}
              <span className="text-foreground">Generative AI</span> (LLMs). Skilled in data analysis,
              visualization, and model development using tools like NumPy, Pandas, OpenCV, TensorFlow, and
              PyTorch. Experienced in building LLM agents with LangChain, LangGraph, MCP and deploying AI
              solutions with Flask, FastAPI, and Streamlit.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              Passionate about creating intelligent, scalable systems that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`glass-card p-6 text-center group hover:border-primary/50 hover:glow-box transition-all duration-500 hover:transform-gpu hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <h3 className="font-display text-sm font-semibold mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
