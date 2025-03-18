
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, DollarSign } from "lucide-react";

interface CalculatorResultsProps {
  additionalRevenue: number;
  additionalJobs: number;
  averageFinancedJob: number;
}

const CalculatorResults = ({ 
  additionalRevenue, 
  additionalJobs, 
  averageFinancedJob 
}: CalculatorResultsProps) => {
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-wisetack-blue/10 rounded-xl p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-center mb-6 text-wisetack-darkblue">
          Your Projected Growth with Financing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResultCard 
            icon={<TrendingUp className="h-8 w-8" />}
            label="Potential Additional Jobs"
            value={`+${additionalJobs}`}
            delay={0}
          />
          
          <ResultCard 
            icon={<Zap className="h-8 w-8" />}
            label="Average Financed Job Size"
            value={formatCurrency(averageFinancedJob)}
            delay={0.1}
          />
          
          <ResultCard 
            icon={<DollarSign className="h-8 w-8" />}
            label="Potential Additional Revenue"
            value={formatCurrency(additionalRevenue)}
            delay={0.2}
            highlight={true}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-gray-600 italic"
        >
          Results based on industry averages: 25% higher conversion rate and 4.5x larger job sizes with financing
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

interface ResultCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
  highlight?: boolean;
}

const ResultCard = ({ icon, label, value, delay, highlight = false }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`rounded-lg p-4 text-center ${highlight ? 'bg-white shadow-md' : ''}`}
    >
      <div className="flex justify-center mb-2">
        <div className={`p-2 rounded-full ${highlight ? 'bg-wisetack-blue text-white' : 'bg-wisetack-blue/20 text-wisetack-blue'}`}>
          {icon}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-wisetack-darkblue' : 'text-gray-800'}`}>{value}</p>
    </motion.div>
  );
};

export default CalculatorResults;
