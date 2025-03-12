import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Code } from 'lucide-react';
import dream from '../images/dream.png';
import kkra from '../images/kkra.jpg';
import techcreator from '../images/techcreator.png'
import lf from '../images/lf.png'
import move from '../images/move.jpg'
import global from '../images/global.jpg'
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const projects = [
    {
      title: 'Move Muse (Events Management platform)',
      description: `A full-featured event management platform built with React, Node.js, and MongoDB. Users can create and manage events, leave reviews, and securely purchase tickets.`,
      image: move,
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      liveUrl: 'https://move-muse12.netlify.app',
      githubUrl: '#',
      category: 'Web App'
    },
    {
      title: "Global Bids",
      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking. I worked on the frontend side using React and Tailwind CSS.",
      image: global,
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    
    {
      title: "KKRA Travel Tours",
      description: "A travel and tourism website designed to help tourists explore destinations, book tours, and plan their trips. Built with React Native, it includes features like destination guides, booking options, and user reviews.",
      image: kkra,
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://www.kkratraveltours.com/",
      githubUrl: "#",
      category: "Web App"
    },
    
    {
      title: "Link Fluencer",
      description: "A modern link shortening platform that allows users to create and manage shortened URLs. Built with Next.js and Tailwind CSS, I worked on the frontend side to ensure a seamless user experience.",
      image: lf,
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://linkfluencer.io/",
      githubUrl: "#",
      category: "Web App"
    },
    
    {
      title: "Tech Creator",
      description: "A software solution website offering SEO optimization, AI-powered content generation, and more. It helps create blog posts, social media content, and marketing copy.",
      image: techcreator,
      technologies: ["Tailwind CSS", "Context API"],
      liveUrl: "https://www.techcreator.co/",
      githubUrl: "#",
      category: "Web App"
    },
    
    {
      title: "My Reel Dream",
      description: "A platform designed for filmmakers to manage their projects and collaborate with others. I worked on the frontend side to create an intuitive and interactive user interface.",
      image: dream,
      technologies: ["React", "Material Ui"],
      liveUrl: "https://www.myreeldream.ai/",
      githubUrl: "#",
      category: "Web App"
    }
    
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
              My Portfolio
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              A showcase of my recent projects and work
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
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
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
