import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, User } from 'lucide-react';
import { Link } from 'wouter';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row md:gap-5 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm Muhammad Ishaq
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              A Web Developer passionate about creating beautiful and functional web experiences.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Hire Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 flex justify-center items-center"
          >
            <div className="w-64 h-64 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <User size={120} className="text-white" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I offer a wide range of services to help businesses and individuals establish their online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layout className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Web Development',
                description: 'Developing modern websites using the latest technologies.',
              },
              {
                icon: <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: 'Custom Solutions',
                description: 'Developing tailored solutions to meet your specific needs.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;