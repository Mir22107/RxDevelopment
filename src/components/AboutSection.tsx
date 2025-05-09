import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Paintbrush, Globe, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} className="text-primary" /> },
    { name: 'UI/UX Design', icon: <Paintbrush size={24} className="text-primary" /> },
    { name: 'Responsive Web Design', icon: <Globe size={24} className="text-primary" /> },
    { name: 'Performance Optimization', icon: <Rocket size={24} className="text-primary" /> },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background-light">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="heading-lg text-primary">About Me</h2>
            <p className="text-secondary text-lg leading-relaxed">
              I'm a passionate web developer and designer with a focus on creating modern, 
              efficient, and visually stunning digital experiences. With years of experience in 
              the industry, I've honed my skills to deliver websites that not only look exceptional 
              but also perform flawlessly.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              My approach combines technical expertise with creative problem-solving, 
              ensuring that each project I work on is tailored to meet the unique needs of my clients 
              while pushing the boundaries of design and functionality.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="heading-md text-accent">My Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-medium text-primary">{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;