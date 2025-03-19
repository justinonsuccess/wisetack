
import React, { useEffect, useState } from 'react';
import FinancingHeader from '@/components/FinancingHeader';
import BenefitsList from '@/components/BenefitsList';
import ImpactCalculator from '@/components/ImpactCalculator';
import CTAButton from '@/components/CTAButton';
import FinancingTerms from '@/components/FinancingTerms';
import HowItWorks from '@/components/HowItWorks';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Star } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import GlassmorphicCard from '@/components/GlassmorphicCard';

const Index = () => {
  const [qualificationsChecked, setQualificationsChecked] = useState(false);
  
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
      <FinancingHeader />
      
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

      <section id="benefits" className="animate-on-scroll">
        <BenefitsList />
      </section>

      <section id="financing-terms" className="animate-on-scroll">
        <FinancingTerms />
      </section>

      <section id="calculator" className="animate-on-scroll">
        <ImpactCalculator />
      </section>
      
      <section id="how-it-works" className="animate-on-scroll">
        <HowItWorks />
      </section>
      
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
                <p className="text-lg">Established for at least 1 year.</p>
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
                    Start offering financing to your customers FAST!
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

      <section id="testimonials" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Contractors Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Businesses just like yours are growing with Wisetack financing
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <GlassmorphicCard className="h-full flex flex-col" animationDelay={100}>
              <div className="flex flex-col h-full p-2">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic mb-4">
                    "Since implementing Wisetack, we've seen a 30% increase in our average ticket size. Customers are more willing to upgrade when they know they have flexible payment options."
                  </p>
                </blockquote>
                <footer className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">HVAC Solutions, Owner</p>
                </footer>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="h-full flex flex-col" animationDelay={200}>
              <div className="flex flex-col h-full p-2">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic mb-4">
                    "The application process for Wisetack was incredibly simple. Within days, we were offering financing options to our customers, and it's been a game-changer for our business."
                  </p>
                </blockquote>
                <footer className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">Elite Plumbing, Managing Director</p>
                </footer>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="h-full flex flex-col" animationDelay={300}>
              <div className="flex flex-col h-full p-2">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic mb-4">
                    "Our customers love how quickly they get approved with Wisetack. The transparent terms and easy process have helped us close more deals and improved our customer satisfaction ratings."
                  </p>
                </blockquote>
                <footer className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Jennifer Patel</p>
                  <p className="text-sm text-gray-500">Bright Home Electric, CEO</p>
                </footer>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Disclosure Footer */}
      <footer className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container px-4 md:px-6">
          <p className="text-xs text-gray-500 max-w-6xl mx-auto text-center">
            *All financing is subject to credit approval. Your terms may vary. Payment options through Wisetack are provided by our lending partners. For example, a $1,200 purchase could cost $104.89 a month for 12 months, based on an 8.9% APR, or $400 a month for 3 months, based on a 0% APR. Offers range from 0-35.9% APR based on creditworthiness. No other financing charges or participation fees. See additional terms at <a href="http://wisetack.com/faqs" className="text-wisetack-blue hover:underline">http://wisetack.com/faqs</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
