import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const About = () => {
  const skillCategories = [
    { name: 'Frontend', icon: Code2, category: 'frontend' },
    { name: 'Backend', icon: Server, category: 'backend' },
    { name: 'Databases', icon: Database, category: 'database' },
    { name: 'Tools & DevOps', icon: Wrench, category: 'tools' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

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
      {/* Bio Section */}
      <Section title="About Me" subtitle="A little about my journey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="text-center">
            <p className="text-lg text-textSecondary leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with over 2 years of
              experience building modern web applications. I love creating
              solutions that are not only functional but also beautiful and
              user-friendly.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed mb-4">
              My expertise spans across the entire development stack, from
              crafting pixel-perfect UIs with React and TypeScript to building
              robust backend systems with Node.js and various databases.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects,
              writing technical articles, and sharing knowledge with the
              developer community.
            </p>
          </Card>
        </motion.div>
      </Section>

      {/* Timeline */}
      <Section title="Developer Journey" subtitle="My path so far">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-green-purple origin-top"
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-12"
            >
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: 'spring' }}
                    className="absolute left-6 top-2 w-4 h-4 bg-purple rounded-full border-4 border-bg"
                  />
                  
                  <Card delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <span className="text-green font-bold text-lg mb-2 md:mb-0">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold text-text">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-textSecondary">{event.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" subtitle="Technologies I work with">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.category);
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <Card delay={categoryIndex * 0.1} className="h-full">
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        categoryIndex % 2 === 0 ? 'bg-green-light' : 'bg-purple-light'
                      }`}
                    >
                      <category.icon className={`w-6 h-6 ${categoryIndex % 2 === 0 ? 'text-green-dark' : 'text-purple-dark'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-text">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categorySkills.map((skill, idx) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 bg-purple-light border border-purple-light rounded-full text-sm font-medium text-purple-dark hover:border-purple hover:text-purple-dark transition-all flex items-center justify-center cursor-default shadow-xs"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
