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
        'Database Design',,
        'Performance Optimization'
      ]
    },
 
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              My Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Comprehensive solutions for your digital needs
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Code className="w-4 h-4 mr-2 text-blue-600" />
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
      <section className="py-20 bg-blue-600">
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
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;