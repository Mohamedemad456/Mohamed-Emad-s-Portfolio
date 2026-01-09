import { type Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Assets Tracking Dashboard',
    description:
      'A responsive asset tracking dashboard built as a frontend-focused practice project.',
    problem:
      'Needed a clean and responsive UI to visualize and manage asset-related data across different screen sizes.',
    solution:
      'Built a modern dashboard using Next.js with a strong focus on layout, responsiveness, and UI structure.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Responsive dashboard layout',
      'Asset listing and overview',
      'Modern UI components',
      'Mobile-first design approach',
      'Reusable layout components'
    ],
    challenges: [
      'Designing a responsive layout for complex dashboards',
      'Maintaining consistency across screen sizes'
    ],
    solutions: [
      'Used CSS Grid and Flexbox effectively',
      'Applied reusable layout patterns and components'
    ],
    liveUrl: 'https://v0-asset-tracking-website.vercel.app/'
  },
  {
    id: '2',
    title: 'Task Management System',
    description:
      'A task management system designed to be ready for backend and API integrations.',
    problem:
      'Users needed a flexible system to organize tasks with sorting and filtering capabilities.',
    solution:
      'Built a scalable task management frontend with structured state handling and API-ready architecture.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    features: [
      'Task categorization',
      'Sorting by priority and date',
      'Filtering tasks by status',
      'Clean and scalable UI structure',
      'API-ready architecture'
    ],
    challenges: [
      'Designing a flexible task model',
      'Ensuring UI scalability for future API integration'
    ],
    solutions: [
      'Used clean state management patterns',
      'Separated UI logic from data handling'
    ],
    liveUrl: 'https://v0-task-management-seven-umber.vercel.app/',
    githubUrl: 'https://github.com/Mohamedemad456/Task-Tracker'
  },
  {
    id: '3',
    title: 'Art Gallery Platform',
    description:
      'A full-stack art gallery platform with role-based access for buyers, artists, and administrators.',
    problem:
      'Artists needed a platform to showcase their art, buyers needed to bid on artworks, and admins needed full moderation control.',
    solution:
      'Developed a role-based system with a .NET backend, enabling secure authentication, approvals, and bidding workflows.',
    techStack: [
      'React',
      'TypeScript',
      '.NET',
      'Role-Based Authentication',
      'REST APIs'
    ],
    features: [
      'Artist role: upload and manage artworks',
      'Buyer role: browse and bid on artworks',
      'Admin role: approve users and artwork submissions',
      'Role-based access control',
      'Admin dashboard accessible via /admin'
    ],
    challenges: [
      'Designing multi-role authentication flow',
      'Ensuring secure approval workflows'
    ],
    solutions: [
      'Implemented role-based authorization',
      'Separated admin logic and routes from user flows'
    ],
    liveUrl: 'https://art-gallery-build.netlify.app/',
    githubUrl: 'https://github.com/Mohamedemad456/Art-Gallery'
  }
];
