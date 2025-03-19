
import React from 'react';
import { CheckCircle2 } from "lucide-react";
import GlassmorphicCard from "@/components/GlassmorphicCard";

const MerchantHeader = () => {
  return (
    <div className="bg-gradient-to-r from-wisetack-blue/10 to-wisetack-lightblue/10 pt-8 pb-12 border-b border-wisetack-blue/10">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
          <div className="flex items-center mb-4 lg:mb-0">
            <img 
              src="/lovable-uploads/94302ae0-76a9-4882-b66a-50a5b56da5b5.png" 
              alt="Wisetack Logo" 
              className="h-10 mr-4" 
            />
            <h1 className="text-2xl font-bold text-wisetack-dark">Financing Activation & Resource Center</h1>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
            <CheckCircle2 className="h-5 w-5" />
            <span>Account Active</span>
          </div>
        </div>

        <GlassmorphicCard className="mt-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-wisetack-dark">Welcome to Wisetack Financing in Contractor+!</h2>
            <p className="text-gray-700 mb-4">
              Now that you're approved, you have a powerful new tool to help grow your business. Offering financing isn't just a payment option—it's a proven way to win more jobs and land bigger projects.
            </p>
            <p className="text-gray-700 mb-4">
              By giving your clients the flexibility to pay over time, you remove cost barriers and make it easier for them to say "yes." 
              <span className="font-semibold"> In fact, home improvement jobs paid via financing average 4.5× the value of those paid upfront.</span>
            </p>
            <p className="text-gray-700">
              Use this page as your financing headquarters to make the most of Wisetack in your sales process.
            </p>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default MerchantHeader;
