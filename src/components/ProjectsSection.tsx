import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

// Project data (in a real scenario, this would come from an API or CMS)
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A modern e-commerce platform with a sleek user interface and seamless checkout process.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'UI Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Minimalist portfolio website for a photographer showcasing their work in an elegant gallery.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Restaurant booking application with real-time availability and instant confirmations.',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive dashboard for a SaaS platform with analytics and user management features.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">Featured Projects</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            A selection of my recent work showcasing my skills and expertise in web development and design.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className={`absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6`}>
                  <div className="text-center">
                    <p className="text-secondary mb-2">{project.category}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs bg-background rounded-full text-primary/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center space-x-2 text-primary mt-6 hover:text-accent transition-colors duration-300">
                      <span>View project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-secondary">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-outline">
            Have a project in mind? Let's talk!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;