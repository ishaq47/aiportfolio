import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Html/Css', level: 90 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Javascript', level: 50 },
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
              About Me
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              I'm a passionate React Developer with over 2 years of experience in creating
              beautiful, functional, and user-friendly web applications.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
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
                className="mb-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg dark:shadow-blue-500/10"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:shadow-blue-500/10"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Bachelor of Computer Science(Software)
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              Abdul Wali Khan University Mardan, Pakistan
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">2019 - 2023</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
