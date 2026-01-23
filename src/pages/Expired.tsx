
import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const Expired = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <GlassmorphicCard className="mb-6 p-8 text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 px-4 py-1.5 text-sm rounded-full">
              Application Expired
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-wisetack-dark mb-4">
            Your Application Has Expired
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="p-2 rounded-full bg-amber-50">
              <Clock className="h-12 w-12 text-amber-400" />
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            It looks like your Wisetack application has expired. Submit a new application to reactivate consumer-financing options for your clients.
          </p>
          
          <Link to="/">
            <CTAButton size="lg">
              Start New Application
            </CTAButton>
          </Link>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default Expired;
