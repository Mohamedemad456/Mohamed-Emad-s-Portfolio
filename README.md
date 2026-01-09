# Modern Full-Stack Developer Portfolio

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, eye-comforting design with cool colors (soft blues, purples, muted greens) and smooth animations.

## Features

- **Modern Design**: Clean, minimal UI with gradient accents and smooth animations
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Multiple Pages**: Home, About, Projects, Blog, and Contact
- **Smooth Animations**: Powered by Framer Motion
- **Type-Safe**: Built with TypeScript for better developer experience
- **Performance Optimized**: Fast loading and smooth interactions

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── data/             # Static data
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── timeline.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── package.json
```

##  Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

##  Installation

1. Install dependencies:
```bash
npm install
```

If you encounter network issues, you may need to install the following packages manually:
```bash
npm install react-router-dom framer-motion lucide-react
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

##  Customization

### Update Your Information

1. **Projects**: Edit `src/data/projects.ts` to add/update your projects
2. **Skills**: Edit `src/data/skills.ts` to update your skills
3. **Timeline**: Edit `src/data/timeline.ts` to update your journey
4. **Contact Info**: Update social links in `src/pages/Contact.tsx`
5. **Bio**: Update the bio text in `src/pages/About.tsx`

### Color Palette

The portfolio uses a cool, eye-comforting color scheme:
- **Primary**: Soft blues (`blue-400`, `blue-500`)
- **Secondary**: Purples (`purple-400`, `purple-500`, `purple-600`)
- **Accent**: Pinks (`pink-500`)
- **Background**: Dark slate (`slate-900`, `slate-800`)
- **Text**: Light slate (`slate-200`, `slate-300`, `slate-400`)

You can customize colors in Tailwind classes throughout the components.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add a navigation link in `src/components/Navbar.tsx`

##  Pages Overview

### Home
- Hero section with name and title
- Call-to-action buttons
- Tech stack overview
- Highlights section

### About
- Professional bio
- Developer journey timeline
- Skills organized by category

### Projects
- Project cards with previews
- Detailed project modals
- Tech stack tags
- Live demo and GitHub links

### Blog
- Article listings
- Tags and metadata
- Read time estimates

### Contact
- Contact form
- Social media links
- Email integration

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting service

##  License

This project is open source and available under the MIT License.

##  Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with love using React, TypeScript, and Tailwind CSS
