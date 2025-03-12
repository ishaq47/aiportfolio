import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Html/Css', level: 90 },
    { name: 'Responsive Design', level: 90 },

    { name: 'Javascripts', level: 50 },
   
    { name: 'Context API', level: 90 },
    { name: 'Redux Toolkit', level: 90 },
     { name: 'React Js', level: 90 },
    { name: 'Express Js', level: 90 },
    { name: 'MongoDB', level: 90 },
     { name: 'NodeJs', level: 90 },
     { name: 'Laravel', level: 50 },




  ];

  const experiences = [
    {
      title: 'Mern Stack developer',
      company: 'Tech Creator Swabi.',
      period: '2023 - Dec 2024',
      description: 'Developed and maintained multiple client projects using modern web technologies',
    },
    {
      title: 'Frontend Web Developer',
      company: 'Ideation Islamabad.',
      period: '2025 - Present',
      description: 'Developing and maintaining multiple client projects using modern web technologies.',
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
              About Me
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              I'm a passionate React Developer with over 2 years of experience in creating
              beautiful, functional, and user-friendly web applications.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Work Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-8 bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900">Bachelor of Computer Science(Software)</h3>
            <p className="text-blue-600 font-semibold">Abdul Wali Khan University Mardan, Pakistan</p>
            <p className="text-gray-500 text-sm">2019 - 2023</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;