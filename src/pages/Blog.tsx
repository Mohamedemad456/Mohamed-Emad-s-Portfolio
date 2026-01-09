import { useState, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import { Calendar, Clock, X } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const selectedPostData = blogPosts.find((p) => p.id === selectedPost);

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

  // Simple markdown-like content parser
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let currentParagraph: string[] = [];
    let codeBlock: string[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${elements.length}`} className="text-textSecondary leading-relaxed mb-4">
            {currentParagraph.join(' ')}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside mb-4 space-y-2 text-textSecondary">
            {currentList.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('```')) {
        flushList();
        flushParagraph();
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={`code-${elements.length}`} className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-4">
              <code className="text-sm text-text font-mono">{codeBlock.join('\n')}</code>
            </pre>
          );
          codeBlock = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
      } else if (inCodeBlock) {
        codeBlock.push(line);
      } else if (trimmed.startsWith('# ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h1 key={`h1-${elements.length}`} className="text-3xl font-bold text-text mb-4 mt-6">
            {trimmed.substring(2)}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-text mb-3 mt-5">
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        flushParagraph();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-xl font-semibold text-text mb-2 mt-4">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        flushParagraph();
        currentList.push(trimmed.substring(2));
      } else if (trimmed === '') {
        flushList();
        flushParagraph();
      } else {
        flushList();
        currentParagraph.push(trimmed);
      }
    });

    flushList();
    flushParagraph();

    return elements;
  };

  return (
    <div className="min-h-screen pt-20">
      <Section
        title="Blog"
        subtitle="Technical articles and insights about web development"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card 
                delay={index * 0.1} 
                className="cursor-pointer group"
                onClick={() => setSelectedPost(post.id)}
              >
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-textSecondary mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-textSecondary">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-light text-green rounded-full text-xs font-semibold border border-green-light flex items-center justify-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-textSecondary">
            More articles coming soon! Check back regularly for new content.
          </p>
        </motion.div>
      </Section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPostData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl my-8"
            >
              {/* Header */}
              <div className="sticky top-0 bg-bg/95 backdrop-blur-md border-b border-border p-6 flex justify-between items-start z-10">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-text mb-2">
                    {selectedPostData.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-textSecondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green" />
                      <span>{new Date(selectedPostData.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple" />
                      <span>{selectedPostData.readTime} min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedPostData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-green-light text-green rounded-full text-xs font-semibold border border-green-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedPost(null)}
                  className="p-2 text-textSecondary hover:text-green hover:bg-green-light rounded-full transition-all ml-4"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-8 prose max-w-none prose-headings:text-text prose-p:text-textSecondary prose-li:text-textSecondary prose-strong:text-text prose-a:text-purple hover:prose-a:text-purple-dark">
                <div className="text-text leading-relaxed">
                  {renderContent(selectedPostData.content)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
