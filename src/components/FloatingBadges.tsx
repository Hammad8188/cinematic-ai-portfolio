import { useEffect, useState } from 'react';

const skills = [
  'PyTorch',
  'LangChain',
  'RAG',
  'LLMs',
  'Computer Vision',
  'NLP',
  'Deep Learning',
  'TensorFlow',
];

interface BadgePosition {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const FloatingBadges = () => {
  const [positions, setPositions] = useState<BadgePosition[]>([]);

  useEffect(() => {
    // Generate random positions for badges around the edges
    const newPositions = skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 35 + Math.random() * 10; // 35-45% from center
      
      return {
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        delay: index * 0.3,
        duration: 15 + Math.random() * 10,
      };
    });
    setPositions(newPositions);
  }, []);

  if (positions.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className="absolute animate-orbit"
          style={{
            left: `${positions[index]?.x ?? 50}%`,
            top: `${positions[index]?.y ?? 50}%`,
            animationDelay: `${positions[index]?.delay ?? 0}s`,
            animationDuration: `${positions[index]?.duration ?? 20}s`,
          }}
        >
          <div className="floating-badge px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border border-primary/20 bg-card/60 text-muted-foreground whitespace-nowrap">
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBadges;
