
import React from 'react';
import { motion } from "framer-motion";
import CTAButton from './CTAButton';

const FinancingHeader = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-wisetack-blue/5 rounded-bl-[100px] transform rotate-6"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-wisetack-blue/10 rounded-tr-[80px] transform -rotate-6"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-wisetack-blue/10 text-wisetack-darkblue rounded-full">
              Wisetack Financing
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Your Competitors Offer <span className="highlight-underline">Client Financing</span>. Do You?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
          >
            Give your customers financial flexibility and instantly boost your bid acceptance rate.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CTAButton size="lg" onClick={scrollToCalculator}>
              Calculate Impact
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FinancingHeader;
