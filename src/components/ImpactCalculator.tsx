
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import GlassmorphicCard from './GlassmorphicCard';
import CTAButton from './CTAButton';
import CalculatorResults from './CalculatorResults';
import { useCalculator } from '@/hooks/useCalculator';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Loader2 } from "lucide-react";
import SparkleEffect from './SparkleEffect';

const ImpactCalculator = () => {
  const {
    inputs,
    results,
    isCalculating,
    updateInput,
    calculateImpact
  } = useCalculator({
    annualRevenue: 1200000,
    completedJobs: 120,
    avgJobSize: 10000
  });

  const [sparkleEffect, setSparkleEffect] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = value ? parseFloat(value.replace(/,/g, '')) : 0;
    updateInput(name as keyof typeof inputs, numericValue);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const handleCalculateClick = (e: React.MouseEvent) => {
    // Trigger calculation
    calculateImpact();
    
    // Get button position for sparkle effect
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setClickPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
      
      // Trigger sparkle effect
      setSparkleEffect(true);
      setTimeout(() => setSparkleEffect(false), 600);
    }
  };

  return (
    <div id="calculator" className="py-16 bg-gradient-to-b from-wisetack-gray to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Your Business Growth With Financing
          </h2>
          <p className="text-lg text-gray-600">
            Use our simple calculator to see how much more revenue you could generate by enabling payment flexibility.
          </p>
        </motion.div>

        <GlassmorphicCard className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-4">
              <div className="p-2 bg-wisetack-blue/10 rounded-full text-wisetack-blue">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-semibold ml-2">Impact Calculator</h3>
            </div>
            
            <p className="text-sm text-center text-gray-500 italic mb-6">
              The calculator fields are pre-populated with data from Contractor+
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="annualRevenue" className="text-gray-700">
                  Last 12 Months Revenue
                </Label>
                <Input
                  id="annualRevenue"
                  name="annualRevenue"
                  type="text"
                  value={formatCurrency(inputs.annualRevenue).replace('$', '')}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="completedJobs" className="text-gray-700">
                  Last 12 Months Jobs Completed
                </Label>
                <Input
                  id="completedJobs"
                  name="completedJobs"
                  type="text"
                  value={formatNumber(inputs.completedJobs)}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="avgJobSize" className="text-gray-700">
                  Last 12 Months Avg. Job Size ($)
                </Label>
                <Input
                  id="avgJobSize"
                  name="avgJobSize"
                  type="text"
                  value={formatCurrency(inputs.avgJobSize).replace('$', '')}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-8 relative">
              <div className="relative">
                <CTAButton
                  ref={buttonRef}
                  onClick={handleCalculateClick}
                  className="w-full md:w-auto"
                  icon={false}
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate Impact
                    </>
                  )}
                </CTAButton>
                <SparkleEffect 
                  isActive={sparkleEffect} 
                  originX={clickPosition.x} 
                  originY={clickPosition.y} 
                />
              </div>
            </div>
            
            {results && (
              <CalculatorResults
                additionalRevenue={results.additionalRevenue}
                additionalJobs={results.additionalJobs}
                averageFinancedJob={results.averageFinancedJob}
              />
            )}
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default ImpactCalculator;
