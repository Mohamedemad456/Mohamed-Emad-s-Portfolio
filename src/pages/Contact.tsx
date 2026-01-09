import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:mohamed.asker316@gmail.com',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+201557003336', // Replace with your actual phone number
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Mohamedemad456',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohamed-emad-asker',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <Section
        title="Get In Touch"
        subtitle="Let's work together on your next project"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all text-center"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all text-center"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 resize-none transition-all text-center"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full py-4"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                  Connect With Me
                </h3>
                <p className="text-slate-600 mb-10 text-center leading-relaxed">
                  Feel free to reach out through any of these channels. I'm
                  always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(8, 145, 178, 0.05)' }}
                      className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-600/30 transition-all duration-200 group"
                    >
                      <social.icon className="w-5 h-5 mr-3 text-cyan-600 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-700 font-semibold">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Contact;
