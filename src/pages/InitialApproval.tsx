import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, LightbulbIcon, HelpCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import GlassmorphicCard from '@/components/GlassmorphicCard';
import SparkleEffect from '@/components/SparkleEffect';
import { useNavigate } from 'react-router-dom';

const InitialApproval = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const navigate = useNavigate();
  const businessName = "DFW Pro Painting"; // This would be dynamically populated

  const handleGotItClick = (e: React.MouseEvent) => {
    // Get the button's position for the animation origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    setAnimationOrigin({ x, y });
    setShowAnimation(true);
    
    // Redirect after animation
    setTimeout(() => {
      navigate('/active-merchant');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wisetack-gray/30 relative">
      {/* Animation effect */}
      <SparkleEffect 
        isActive={showAnimation} 
        originX={animationOrigin.x} 
        originY={animationOrigin.y}
        intensity="celebration"  
      />
      
      <div className="container px-4 md:px-6 py-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-wisetack-dark">
            Welcome to Wisetack Financing!
          </h1>
          <div className="bg-wisetack-blue/10 p-2 rounded-full inline-flex items-center text-wisetack-blue mb-6">
            <Sparkles className="mr-2 h-5 w-5" />
            <span className="font-medium">You're Approved!</span>
          </div>
        </motion.div>
        
        <GlassmorphicCard className="mb-12">
          <div className="space-y-6 p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-wisetack-dark">
                Congratulations on your Wisetack approval! 🎉
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                You've unlocked a new way to win more jobs and grow your business. By offering your customers the flexibility to pay over time, you're removing big upfront costs as a barrier.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This means more of your estimates can turn into booked jobs — and clients who might have hesitated can move forward with confidence. In short, financing helps you say "yes" to more customers, and helps more customers say "yes" to you.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                We're excited to see how Wisetack will boost your success!
              </p>
            </motion.div>
          </div>
        </GlassmorphicCard>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-wisetack-dark">
            Next Steps
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Here are a few quick steps to help you make the most of financing from day one:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <GlassmorphicCard animationDelay={100}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-wisetack-blue/10 p-3 rounded-full mr-4">
                    <LightbulbIcon className="h-6 w-6 text-wisetack-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Mention financing to every customer</h3>
                </div>
                <p className="text-gray-700">
                  Make financing part of your sales conversation. Let clients know upfront that they have the option to break their project cost into budget-friendly monthly payments. By highlighting this early, you'll stand out from competitors and give homeowners a compelling reason to choose {businessName} for the job.
                </p>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard animationDelay={200}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-wisetack-blue/10 p-3 rounded-full mr-4">
                    <HelpCircle className="h-6 w-6 text-wisetack-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Explore your Financing Resource Center</h3>
                </div>
                <p className="text-gray-700">
                  Here you'll find tips and tools, in-depth guides, marketing materials, and best practices to maximize your financing program's impact. It's your go-to hub whenever you want to learn new strategies or get fresh ideas to boost sales.
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-12"
        >
          <GlassmorphicCard className="p-8">
            <p className="text-lg text-gray-700 mb-8">
              The team's at Contractor+ & Wisetack are here to support you every step of the way as you integrate financing into your workflow.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Ready to get started? Click <strong>Got it!</strong> to close this welcome message and begin using Wisetack financing in Contractor+. Good luck, and happy selling!
            </p>
            <Button 
              onClick={handleGotItClick}
              size="lg" 
              className="bg-wisetack-blue hover:bg-wisetack-darkblue text-white font-semibold px-10 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <Check className="mr-2 h-5 w-5" /> Got it!
            </Button>
          </GlassmorphicCard>
        </motion.div>
      </div>
      
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

export default InitialApproval;
