
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import GlassmorphicCard from './GlassmorphicCard';
import CTAButton from './CTAButton';
import CalculatorResults from './CalculatorResults';
import { useCalculator } from '@/hooks/useCalculator';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Loader2, DollarSign, Briefcase } from "lucide-react";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

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
    let numericValue = 0;
    
    // Remove currency symbols and commas before parsing
    const cleanValue = value.replace(/[$,]/g, '');
    numericValue = cleanValue ? parseFloat(cleanValue) : 0;
    
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
              <div className="space-y-2">
                <Label htmlFor="annualRevenue" className="text-gray-700 font-medium">
                  Last 12 Months Revenue
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <Input
                    id="annualRevenue"
                    name="annualRevenue"
                    type="text"
                    value={formatCurrency(inputs.annualRevenue).replace('$', '')}
                    onChange={handleInputChange}
                    className="pl-10 bg-white focus:ring-2 focus:ring-wisetack-blue/20"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="completedJobs" className="text-gray-700 font-medium">
                  Jobs Completed In Last 12 Months
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <Input
                    id="completedJobs"
                    name="completedJobs"
                    type="text"
                    value={formatNumber(inputs.completedJobs)}
                    onChange={handleInputChange}
                    className="pl-10 bg-white focus:ring-2 focus:ring-wisetack-blue/20"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="avgJobSize" className="text-gray-700 font-medium">
                  Avg. Job Size
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <Input
                    id="avgJobSize"
                    name="avgJobSize"
                    type="text"
                    value={formatCurrency(inputs.avgJobSize).replace('$', '')}
                    onChange={handleInputChange}
                    className="pl-10 bg-white focus:ring-2 focus:ring-wisetack-blue/20"
                    placeholder="0"
                  />
                </div>
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
                {sparkleEffect && (
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: clickPosition.y - 20,
                      left: clickPosition.x - 20,
                      width: "40px",
                      height: "40px"
                    }}
                  >
                    <div className="absolute inset-0 animate-ping rounded-full bg-wisetack-blue opacity-75"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path
                          d="M20 0L22.4 15.2L35.2 8L24.8 20L40 22.4L24.8 24.8L35.2 32L22.4 24.8L20 40L17.6 24.8L4.8 32L15.2 20L0 17.6L15.2 15.2L4.8 8L17.6 15.2L20 0Z"
                          fill="#42B7C1"
                        />
                      </svg>
                    </div>
                  </div>
                )}
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
