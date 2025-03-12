import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_3ip4sum';
    const templateID = 'template_l4w4oih';
    const userID = 'UTd7P8j2yf4pl6MGx';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Show success message
        setShowMessage(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        // Hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-16 relative">
      {/* Success Message */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Message sent successfully!
        </div>
      )}

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Let's discuss your project and see how I can help
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href='mailto:mik9649820@gmail.com'><p className="text-gray-600">mik9649820@gmail.com</p></a>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
             <a href='tel:+923018849473'><p className="text-gray-600">+92 301 8849473</p></a>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Swabi, Pakistan</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
