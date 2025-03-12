import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { Link } from 'wouter';

const Portfolio = () => {
  const projects = [
    {
      title: 'Move Muse (Events Management platform)',
      description: `A full-featured event management platform built with React, Node.js, and MongoDB. Users can create and manage events, leave reviews, and securely purchase tickets.`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      liveUrl: 'https://move-muse12.netlify.app',
      githubUrl: '#',
      category: 'Web App',
      image: '/images/move.png'
    },
    {
      title: "Global Bids",
      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking. I worked on the frontend side using React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App",
      image: '/images/global.jpg'
    },
    {
      title: "KKRA Travel Tours",
      description: "A travel and tourism website designed to help tourists explore destinations, book tours, and plan their trips. Built with React Native, it includes features like destination guides, booking options, and user reviews.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://www.kkratraveltours.com/",
      githubUrl: "#",
      category: "Web App",
      image: '/images/kkra.jpg'
    },
    {
      title: "Link Fluencer",
      description: "A modern link shortening platform that allows users to create and manage shortened URLs. Built with Next.js and Tailwind CSS, I worked on the frontend side to ensure a seamless user experience.",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://linkfluencer.io/",
      githubUrl: "#",
      category: "Web App",
      image: '/images/If.png' // Added image path
    },
    {
      title: "Tech Creator",
      description: "A modern software solution website offering SEO optimization, AI-powered content generation, and more. It helps create blog posts, social media content, and marketing copy.",
      technologies: ["Tailwind CSS", "Context API"],
      liveUrl: "https://www.techcreator.co/",
      githubUrl: "#",
      category: "Web App",
      image: '/images/techcreator.png'
    },
    {
      title: "My Reel Dream",
      description: "A platform designed for filmmakers to manage their projects and collaborate with others. I worked on the frontend side to create an intuitive and interactive user interface.",
      technologies: ["React", "Material UI"],
      liveUrl: "https://www.myreeldream.ai/",
      githubUrl: "#",
      category: "Web App",
      image: '/images/dream.png'
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
              My Portfolio
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              A showcase of my recent projects and work
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl dark:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
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
              Interested in working together?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Let's discuss your project and create something amazing
            </motion.p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 dark:bg-gray-900 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;