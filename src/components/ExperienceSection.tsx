import { useInView } from '../hooks/useInView';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      type: 'work',
      title: 'AI Engineer',
      company: 'SAT Impact Solutions',
      period: 'Oct 2025 – Ongoing',
      description: [
        'Develop and deploy AI and Machine Learning models for real-world applications',
        'Work on Natural Language Processing (NLP) and Deep Learning projects',
        'Integrate AI models into web-based systems and enterprise solutions',
      ],
    },
    {
      type: 'work',
      title: 'AI Engineer',
      company: 'AI Data House',
      period: '3 Months',
      description: [
        'Developed LLM-powered applications for conversational AI and document analysis',
        'Built multi-agent systems using LangChain and LangGraph',
        'Containerized and deployed AI solutions with Docker',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'Abdul Wali Khan University Mardan',
    period: 'Sept 2021 – July 2025',
    cgpa: '3.48/4.0',
  };

  const certifications = [
    'Machine Learning Specialization (Coursera)',
    'Deep Learning Specialization (Coursera)',
    'Complete Generative AI Course with LangChain',
    'Natural Language Processing Specialization',
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          <h2
            className={`section-title text-center mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Experience & Education
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <div className="relative">
              {/* Vertical line - extended */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent via-70% to-primary/30 md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 animate-pulse-glow" />

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-card p-6 ml-8 md:ml-0">
                      <div className="flex items-center gap-2 mb-2 md:justify-start">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Education & Certifications on Timeline */}
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 animate-pulse-glow" />

                {/* Education - Left side */}
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-xl font-semibold">Education</h3>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{education.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{education.university}</p>
                    <p className="text-sm text-muted-foreground mb-3">{education.period}</p>
                    <p className="text-primary font-display font-bold text-lg">CGPA: {education.cgpa}</p>
                  </div>
                </div>

                {/* Certifications - Right side */}
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-xl font-semibold">Certifications</h3>
                    </div>
                    <ul className="space-y-3">
                      {certifications.map((cert, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
