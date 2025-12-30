import { useInView } from '../hooks/useInView';
import { useMouseParallax } from '../hooks/useParallax';
import { Cpu, MessageSquare, Bot, Activity, Stethoscope, Rocket } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const mousePos = useMouseParallax(0.015);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      icon: Cpu,
      title: 'AI-Powered Smart Vending Machine',
      description:
        'Intelligent vending system using RAG to recommend protein supplements and vitamins. Features multimodal inputs including face recognition, text, and voice commands for personalized suggestions.',
      tags: ['RAG', 'LLMs', 'Face Recognition', 'Voice'],
    },
    {
      icon: MessageSquare,
      title: 'Podcast AI Agent',
      description:
        'Intelligent system processing podcast transcripts with LLMs and RAG for meaningful insights. Supports content analysis, automated question generation, and advisory-style interactions.',
      tags: ['LangChain', 'FAISS', 'LLM Fine-tuning', 'RAG'],
    },
    {
      icon: Bot,
      title: 'Multi-Agent Chatbot',
      description:
        'LangGraph-based multi-agent system integrating career counseling, resume evaluation, and document querying. Features PDF uploads and real-time Q&A capabilities.',
      tags: ['LangGraph', 'Multi-Agent', 'PDF Q&A'],
    },
    {
      icon: Activity,
      title: 'Human Activity Recognition',
      description:
        'CNN-LSTM computer vision system for recognizing human activities from video data using spatial-temporal features. Real-time detection with OpenCV and YOLO.',
      tags: ['CNN-LSTM', 'OpenCV', 'YOLO', 'Video Analysis'],
    },
    {
      icon: Stethoscope,
      title: 'AI Dental Disease Diagnosis',
      description:
        'AI diagnostic engine using CNNs to detect and classify dental conditions from medical images. Built to support faster and more accurate diagnosis in healthcare.',
      tags: ['CNN', 'Healthcare AI', 'Image Classification'],
    },
    {
      icon: Rocket,
      title: 'Career Counseling Chatbot',
      description:
        'NLP-powered career counseling system analyzing student performance data to suggest potential career directions with an interactive real-time guidance interface.',
      tags: ['NLP', 'Neural Networks', 'Chatbot'],
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.12)_0%,_transparent_60%)]"
        style={{ transform: `translateY(${mousePos.y}px)` }}
      />
      <div 
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl"
        style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <h2
            className={`section-title text-center mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-1000">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card p-6 group transition-all duration-500 cursor-pointer ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${hoveredIndex === index ? 'glow-box z-10' : ''}`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  transform: hoveredIndex === index 
                    ? `perspective(1000px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg) translateZ(20px) scale(1.05)`
                    : isInView 
                      ? `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * 0.05}deg)`
                      : undefined
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-primary/20 transition-all duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
