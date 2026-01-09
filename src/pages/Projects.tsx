import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = projects.find(
    (p) => p.id === selectedProject
  );

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
    <div className="min-h-screen pt-20">
      <Section
        title="Projects"
        subtitle="A collection of my recent work and contributions"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card delay={index * 0.1} className="h-full flex flex-col text-center items-center">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-sm">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-purple-light border border-purple-light rounded text-xs font-medium text-purple-dark flex items-center justify-center"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 bg-green-light border border-green-light rounded text-xs font-semibold text-green-dark flex items-center justify-center">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-auto flex flex-col w-full gap-2">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2 w-full">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        href={project.liveUrl}
                        className="flex-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        href={project.githubUrl}
                        className="flex-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
            >
              <div className="sticky top-0 bg-bg/95 backdrop-blur-md border-b border-border p-6 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-text">
                  {selectedProjectData.title}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-textSecondary hover:text-purple hover:bg-purple-light rounded-full transition-all"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-purple-dark mb-2">
                        Description
                      </h3>
                      <p className="text-textSecondary leading-relaxed">{selectedProjectData.description}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-green-dark mb-2">
                        Problem
                      </h3>
                      <p className="text-textSecondary leading-relaxed">{selectedProjectData.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-purple-dark mb-2">
                        Solution
                      </h3>
                      <p className="text-textSecondary leading-relaxed">{selectedProjectData.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-purple-dark mb-2">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-light border border-purple-light rounded-md text-sm font-medium text-purple-dark"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-green mb-2">
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {selectedProjectData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-textSecondary text-sm">
                            <span className="w-1.5 h-1.5 bg-green rounded-full mr-2 shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-purple-dark mb-4">
                    Challenges & Solutions
                  </h3>
                  <div className="grid gap-4">
                    {selectedProjectData.challenges.map((challenge, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card rounded-xl p-5 border border-border"
                      >
                        <p className="text-sm text-text font-semibold mb-2">
                          <span className="text-purple">Challenge:</span>{' '}
                          {challenge}
                        </p>
                        <p className="text-sm text-textSecondary">
                          <span className="text-green font-semibold">Solution:</span>{' '}
                          {selectedProjectData.solutions[idx]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {selectedProjectData.liveUrl && (
                    <Button href={selectedProjectData.liveUrl} variant="primary" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </Button>
                  )}
                  {selectedProjectData.githubUrl && (
                    <Button
                      href={selectedProjectData.githubUrl}
                      variant="outline"
                      className="flex-1"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
