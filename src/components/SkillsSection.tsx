import { useInView } from '../hooks/useInView';
import { useMouseParallax } from '../hooks/useParallax';

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const mousePos = useMouseParallax(0.02);

  const skillCategories = [
    {
      title: 'Generative AI / LLMs',
      skills: ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Fine-tuning'],
    },
    {
      title: 'Machine Learning',
      skills: ['scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'Keras', 'PyTorch'],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'CNNs', 'YOLO', 'Image Classification', 'Object Detection', 'Video Analysis'],
    },
    {
      title: 'Data Science',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      title: 'Web Development',
      skills: ['Flask', 'FastAPI', 'Streamlit', 'Docker'],
    },
    {
      title: 'Automation & Data',
      skills: ['BeautifulSoup', 'Selenium', 'n8n', 'SQLite', 'PostgreSQL'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Layered parallax backgrounds */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--accent)/0.12)_0%,_transparent_60%)]"
        style={{ transform: `translateY(${mousePos.y * 2}px)` }}
      />
      <div 
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePos.x}px, ${-mousePos.y}px)` }}
      />
      <div 
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl"
        style={{ transform: `translate(${-mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <h2
            className={`section-title text-center mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass-card p-6 transition-all duration-700 hover:glow-box group hover:transform-gpu hover:-translate-y-3 hover:scale-[1.02] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${200 + categoryIndex * 100}ms`,
                  transform: isInView ? `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * 0.05}deg)` : undefined
                }}
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-4 group-hover:text-gradient transition-all">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="skill-badge opacity-0 animate-fade-in"
                      style={{ animationDelay: `${400 + categoryIndex * 100 + skillIndex * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      {skill}
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

export default SkillsSection;
