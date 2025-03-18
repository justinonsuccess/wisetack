
import { useState, useEffect } from 'react';

interface CalculatorInputs {
  annualRevenue: number;
  completedJobs: number;
  avgJobSize: number;
}

interface CalculatorResults {
  additionalRevenue: number;
  additionalJobs: number;
  averageFinancedJob: number;
}

// These factors are based on industry averages
const FINANCING_CONVERSION_BOOST = 0.25; // 25% increase in conversion rate
const FINANCING_AVERAGE_JOB_SIZE_MULTIPLIER = 4.5; // 4.5x larger job size with financing

export const useCalculator = (initialValues: CalculatorInputs) => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialValues);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const updateInput = (name: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateImpact = () => {
    setIsCalculating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        if (!inputs.annualRevenue || !inputs.completedJobs || !inputs.avgJobSize) {
          throw new Error("All fields are required");
        }
        
        // Calculate potential additional jobs from financing option
        const potentialAdditionalJobs = Math.round(inputs.completedJobs * FINANCING_CONVERSION_BOOST);
        
        // Calculate average job size with financing
        const averageFinancedJobSize = inputs.avgJobSize * FINANCING_AVERAGE_JOB_SIZE_MULTIPLIER;
        
        // Calculate additional revenue from both more jobs and larger jobs
        const additionalRevenue = potentialAdditionalJobs * averageFinancedJobSize;
        
        setResults({
          additionalRevenue,
          additionalJobs: potentialAdditionalJobs,
          averageFinancedJob: averageFinancedJobSize
        });
      } catch (error) {
        console.error("Calculation error:", error);
      } finally {
        setIsCalculating(false);
      }
    }, 800);
  };

  const resetCalculator = () => {
    setResults(null);
  };

  useEffect(() => {
    // If results exist and inputs change, clear results
    if (results) {
      resetCalculator();
    }
  }, [inputs.annualRevenue, inputs.completedJobs, inputs.avgJobSize]);

  return {
    inputs,
    results,
    isCalculating,
    updateInput,
    calculateImpact,
    resetCalculator
  };
};
