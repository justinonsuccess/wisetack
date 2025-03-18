
import React, { useEffect, useState } from 'react';
import FinancingHeader from '@/components/FinancingHeader';
import BenefitsList from '@/components/BenefitsList';
import ImpactCalculator from '@/components/ImpactCalculator';
import CTAButton from '@/components/CTAButton';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import GlassmorphicCard from '@/components/GlassmorphicCard';

const Index = () => {
  const [qualificationsChecked, setQualificationsChecked] = useState(false);
  
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
      
      {/* Qualification Criteria Section */}
      <section id="qualifications" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qualification Criteria
            </h2>
            <p className="text-lg text-gray-600">
              To offer Wisetack financing to your customers, you'll need to meet these requirements:
            </p>
          </motion.div>
          
          <GlassmorphicCard className="max-w-3xl mx-auto mb-8">
            <div className="space-y-6 p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-lg">Established for at least 1 year with Annual Report(s) filed with your state's Secretary of State.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-lg">Positive online reviews and reputation.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-lg">Annual revenue of $150,000 or greater last year.</p>
              </div>
              
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <Checkbox 
                  id="qualifications" 
                  checked={qualificationsChecked}
                  onCheckedChange={(checked) => {
                    setQualificationsChecked(checked === true);
                  }}
                  className="h-5 w-5 border-wisetack-blue text-wisetack-blue focus:ring-wisetack-blue"
                />
                <label htmlFor="qualifications" className="text-lg font-medium cursor-pointer">
                  I meet these qualifications.
                </label>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
      
      {/* CTA Section - Only visible after checkbox is checked */}
      {qualificationsChecked && (
        <motion.section 
          id="cta" 
          className="py-16 bg-wisetack-blue/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <GlassmorphicCard className="p-8">
                <div className="flex flex-col items-center">
                  <div className="text-wisetack-blue mb-4">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 7L12 7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Apply in minutes
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Start offering financing to your customers today.
                  </p>
                  <CTAButton size="lg" className="px-10">
                    Submit Application
                  </CTAButton>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </motion.section>
      )}

      {/* Final CTA - Show only if qualifications not checked */}
      {!qualificationsChecked && (
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
      )}
    </div>
  );
};

export default Index;
