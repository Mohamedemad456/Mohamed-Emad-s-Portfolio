import { type Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Next.js', category: 'frontend', level: 'advanced' },
  { name: 'TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'JavaScript', category: 'frontend', level: 'advanced' },
  { name: 'HTML5', category: 'frontend', level: 'advanced' },
  { name: 'CSS3', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'Framer Motion', category: 'frontend', level: 'intermediate' },
  { name: 'Redux', category: 'frontend', level: 'intermediate' },
  { name: 'Context API', category: 'frontend', level: 'intermediate' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 'advanced' },
  { name: 'Express.js', category: 'backend', level: 'advanced' },
  { name: 'RESTful APIs', category: 'backend', level: 'advanced' },
  { name: 'GraphQL', category: 'backend', level: 'intermediate' },
  { name: 'WebSockets', category: 'backend', level: 'intermediate' },
  { name: 'Microservices', category: 'backend', level: 'intermediate' },
  
  // Databases
  { name: 'PostgreSQL', category: 'database', level: 'advanced' },
  { name: 'MongoDB', category: 'database', level: 'advanced' },
  { name: 'MySQL', category: 'database', level: 'intermediate' },
  { name: 'SQL Server', category: 'database', level: 'intermediate' },
  // Tools & DevOps
  { name: 'Git', category: 'tools', level: 'advanced' },
  { name: 'Docker', category: 'tools', level: 'intermediate' },
  { name: 'CI/CD', category: 'tools', level: 'intermediate' },
  { name: 'ESLint', category: 'tools', level: 'advanced' },
];
