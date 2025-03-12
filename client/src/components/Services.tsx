import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Globe,
  Layout,
  Smartphone,
  Cloud,
  Search,
  Shield
} from 'lucide-react';
import { Link } from 'wouter';

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12" />,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks like React, Next.js, and Focusing on responsive design and optimal user experience.',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'Single Page Applications',
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Backend Development',
      description:
        'Scalable and secure backend solutions using Node.js, Express, and various database technologies.',
      features: [
        'API Development',
        'Database Design',
        'Performance Optimization'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Full Stack Development',
      description: 
        'End-to-end web application development with seamless integration between frontend and backend.',
      features: [
        'MERN Stack Development',
        'RESTful APIs',
        'Database Integration'
      ]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description:
        'Deployment and management of applications on cloud platforms for scalability and reliability.',
      features: [
        'Cloud Deployment',
        'Server Management',
        'Continuous Integration'
      ]
    }
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Comprehensive solutions for your digital needs
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl dark:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Code className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Let's discuss how I can help bring your ideas to life
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;