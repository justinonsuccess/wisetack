
import React from 'react';
import { motion } from "framer-motion";
import GlassmorphicCard from './GlassmorphicCard';
import { BadgeCheck, TrendingUp, Clock, DollarSign, Award } from "lucide-react";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem = ({ icon, title, description, delay }: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 + 0.3 }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 p-2 bg-wisetack-blue/10 text-wisetack-blue rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitsList = () => {
  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Win More Bids",
      description: "Offering client financing can significantly increase your bid acceptance rate."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Secure Larger Projects",
      description: "Clients spend on average 4.5x more when financing is available."
    },
    {
      icon: <Clock size={24} />,
      title: "Easy Customer Experience",
      description: "Fast and transparent customer approvals, typically within seconds."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Cost-Effective & Clear Pricing",
      description: "Pay only a straightforward 3.9% fee on financed jobs—no annual or hidden fees."
    },
    {
      icon: <Award size={24} />,
      title: "Competitive Differentiation",
      description: "Position your business as customer-focused and flexible."
    }
  ];

  return (
    <div className="py-16 container px-4 md:px-6">
      <GlassmorphicCard className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index + 1}
            />
          ))}
        </div>
      </GlassmorphicCard>
    </div>
  );
};

export default BenefitsList;
