export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
