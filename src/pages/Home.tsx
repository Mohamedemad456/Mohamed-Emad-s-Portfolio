import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';
import Card from '../components/Card';
import { Code2, Server, Database, Zap } from 'lucide-react';

const Home = () => {
  const techStack = [
    { icon: Code2, name: 'React' },
    { icon: Server, name: 'Node.js' },
    { icon: Database, name: 'Databases' },
    { icon: Zap, name: 'TypeScript' },
  ];

  const highlights = [
    {
      title: '2+ Years Experience',
      description: 'Building scalable web applications',
    },
    {
      title: 'Full Stack Expertise',
      description: 'Frontend to backend, end-to-end solutions',
    },
    {
      title: 'Modern Technologies',
      description: 'React, Next.js, Node.js, and more',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-bg/70 px-4 py-2 text-sm font-semibold text-text shadow-xs backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-5xl md:text-7xl font-bold mb-4 text-text">
              Mohamed Emad
            </span>
            <span className="text-2xl md:text-4xl font-bold mb-6 text-purple-dark">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-textSecondary mb-3"
          >
            React • Next.js • Node.js • TypeScript
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto"
          >
            Building modern, scalable web applications with clean code and
            exceptional user experiences
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
          >
            <Button to="/projects" size="lg" className="w-full">
              View Projects
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="w-full">
              Contact Me
            </Button>
          </motion.div>

          {/* Floating "signature" pills */}
          <motion.div
            variants={itemVariants}
            className="relative mt-10 h-20 w-full max-w-3xl overflow-hidden hidden sm:block"
          >
            {[
              { label: 'Clean UI', x: '8%', y: '10%', c: 'border-green-light bg-green-light text-green-dark' },
              { label: 'Fast Performance', x: '30%', y: '55%', c: 'border-border bg-bg text-text' },
              { label: 'SEO Ready', x: '58%', y: '8%', c: 'border-purple-light bg-purple-light text-purple-dark' },
              { label: 'Accessible', x: '78%', y: '52%', c: 'border-green-light bg-green-light text-green-dark' },
            ].map((pill, idx) => (
              <motion.div
                key={idx}
                className={`absolute rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold shadow-xs whitespace-nowrap ${pill.c}`}
                style={{ 
                  left: pill.x,
                  top: pill.y,
                  transform: 'translate(-50%, 0)',
                  maxWidth: 'calc(100% - 1rem)',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {pill.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Tech Stack Overview */}
      <Section title="Tech Stack" subtitle="Technologies I work with">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <Card delay={index * 0.1} className="text-center flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    index % 2 === 0 ? 'bg-green-light' : 'bg-purple-light'
                  }`}
                >
                  <tech.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-green-dark' : 'text-purple-dark'}`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-text">
                  {tech.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Highlights */}
      <Section title="Highlights" subtitle="What I bring to the table">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <Card delay={index * 0.1} className="text-center h-full">
                <h3 className="text-xl font-bold mb-2 text-purple-dark">
                  {highlight.title}
                </h3>
                <p className="text-textSecondary">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;
