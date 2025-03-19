
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const FinancingTerms = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <GlassmorphicCard className="overflow-hidden p-0 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-wisetack-blue to-wisetack-lightblue"></div>
                <img 
                  src="https://my.contractorplus.app/assets/images/wisetack/mobile-illustration.svg" 
                  alt="Wisetack financing options on mobile" 
                  className="w-full h-auto"
                />
              </GlassmorphicCard>
              <div className="text-center mt-2 text-xs text-gray-500 italic">
                For illustrative purposes only *
              </div>
            </div>
            
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                We do it all with clear terms, no tricks
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Financing from $500 - $25,000 <sup>1</sup></p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">APRs from 0% to 35.9%*</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Terms from 3 to 60 months* <sup>2</sup></p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">No pre-payment penalties, origination fees, or compounding interest</p>
                  </div>
                </motion.div>
                
                <div className="mt-6 text-sm text-gray-500 space-y-1">
                  <p>1. Some services have a max financeable amount of $15,000</p>
                  <p>2. Some services have terms up to 24 months only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingTerms;
