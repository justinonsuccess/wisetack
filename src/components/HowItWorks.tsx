
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, HandCoins, Wrench, Wallet } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import { cn } from "@/lib/utils";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Offer",
      icon: <HandCoins className="h-8 w-8 text-white" />,
      description: "Your customer applies from your website, Estimate or Invoice in Contractor+. They'll see the maximum amount they're approved to finance and monthly payment options.",
      color: "bg-blue-900",
      arrowColor: "bg-blue-700"
    },
    {
      id: 2,
      title: "Agree on Price",
      icon: <FileCheck className="h-8 w-8 text-white" />,
      description: "Your customer applies and locks in their offer by selecting and accepting their preferred terms.",
      color: "bg-blue-700",
      arrowColor: "bg-wisetack-blue"
    },
    {
      id: 3,
      title: "Complete Work",
      icon: <Wrench className="h-8 w-8 text-white" />,
      description: "You deliver exceptional work (of course). Once complete, your customer confirms the job is done in the application.",
      color: "bg-wisetack-blue",
      arrowColor: "bg-gray-500"
    },
    {
      id: 4,
      title: "Receive Funds",
      icon: <Wallet className="h-8 w-8 text-white" />,
      description: "You receive the funds via bank transfer, which will land in your account within 1 - 3 business days.",
      note: "Note: You can also get paid in two installments, once when half the job is completed and one upon project completion.",
      color: "bg-gray-500",
      arrowColor: ""
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600">
            It's easy for both you and your customer
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="flex mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 relative">
                <div className={cn(
                  "h-16 flex items-center justify-center px-4",
                  step.color
                )}>
                  <span className="text-white font-semibold">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "absolute top-0 -right-6 h-16 w-12 overflow-hidden",
                  )}>
                    <div className={cn(
                      "absolute transform rotate-45 h-16 w-16 top-0 -right-8",
                      step.arrowColor
                    )}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <GlassmorphicCard key={step.id} className="h-full flex flex-col" animationDelay={step.id * 100}>
                <div className="flex flex-col h-full p-4">
                  <div className="flex justify-center mb-4">
                    <div className={cn("rounded-full p-3", step.color)}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-center mb-3">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center flex-grow">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="text-gray-500 text-sm italic text-center mt-3">
                      {step.note}
                    </p>
                  )}
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
