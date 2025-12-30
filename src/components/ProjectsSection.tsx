import { useInView } from '../hooks/useInView';
import { Cpu, MessageSquare, Bot, Activity, Stethoscope, Rocket } from 'lucide-react';

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

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
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1)_0%,_transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <h2
            className={`section-title text-center mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card p-6 group hover:glow-box transition-all duration-500 cursor-pointer ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
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
