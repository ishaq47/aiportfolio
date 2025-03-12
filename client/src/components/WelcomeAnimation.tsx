import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasVisited, setHasVisited] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('has_visited');
    if (!visited) {
      setHasVisited(false);
      localStorage.setItem('has_visited', 'true');
      
      // Hide the animation after 4 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90"
            >
              Let's explore together
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
