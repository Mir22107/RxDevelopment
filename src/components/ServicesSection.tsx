import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  PenTool, 
  Smartphone, 
  ShoppingCart, 
  BarChart, 
  Layout
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with the latest technologies for optimal performance and user experience.',
      icon: <Code size={28} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing interfaces that enhance user engagement and satisfaction.',
      icon: <PenTool size={28} />,
    },
    {
      title: 'Responsive Design',
      description: 'Websites that look and function perfectly on all devices, from mobile to desktop.',
      icon: <Smartphone size={28} />,
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Online stores with secure payment processing and intuitive product management.',
      icon: <ShoppingCart size={28} />,
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in search engines and drive more organic traffic.',
      icon: <BarChart size={28} />,
    },
    {
      title: 'Web Maintenance',
      description: 'Regular updates and maintenance to keep your website secure, fast, and up-to-date.',
      icon: <Layout size={28} />,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">My Services</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            I offer comprehensive web solutions tailored to your specific needs, ensuring your online presence stands out.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group"
            >
              <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;