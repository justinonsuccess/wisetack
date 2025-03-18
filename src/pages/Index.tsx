
import React, { useEffect } from 'react';
import FinancingHeader from '@/components/FinancingHeader';
import BenefitsList from '@/components/BenefitsList';
import ImpactCalculator from '@/components/ImpactCalculator';
import CTAButton from '@/components/CTAButton';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  // Function to handle animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wisetack-gray/30">
      {/* Hero Section */}
      <FinancingHeader />
      
      {/* Scroll indicator */}
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-wisetack-blue/60" />
        </motion.div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="animate-on-scroll">
        <BenefitsList />
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="animate-on-scroll">
        <ImpactCalculator />
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-wisetack-blue/5">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of businesses already offering Wisetack financing to their customers.
            </p>
            <CTAButton size="lg">
              Sign Up For Wisetack Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wisetack-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/c45a3d24-8f21-41b2-a8df-d36c6faf3ea3.png" 
                alt="Wisetack Logo" 
                className="h-8" 
              />
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Wisetack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
