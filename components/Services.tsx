'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technology, optimized for performance and scalability.',
      features: ['Modern Frameworks', 'Responsive Design', 'Performance Optimization', 'SEO Ready'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with seamless shopping experiences and secure payment integration.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Analytics'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Brand Identity',
      description: 'Comprehensive branding services to establish your unique presence in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Brand Strategy'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns to boost your online visibility and drive meaningful engagement.',
      features: ['Social Media', 'Content Strategy', 'Email Marketing', 'Ad Campaigns'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind for maximum impact.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your digital presence running flawlessly.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Technical Support'],
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent"> Succeed Online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your unique needs and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-8">
            Don't see what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brand text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}