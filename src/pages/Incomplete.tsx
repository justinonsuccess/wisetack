
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileEdit, Mail, Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const Incomplete = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <GlassmorphicCard className="mb-6 p-8 text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200 px-4 py-1.5 text-sm rounded-full">
              Application Incomplete
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-wisetack-dark mb-4">
            Your Application Is Incomplete
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="p-2 rounded-full bg-orange-50">
              <FileEdit className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Thanks for starting your application with Wisetack to offer consumer financing. Below is a link to your application if you need to access it again or share with others.
          </p>
          
          <Link to="/">
            <CTAButton size="lg">
              Continue Your Application
            </CTAButton>
          </Link>
        </GlassmorphicCard>
        
        <Card className="border-wisetack-blue/10 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="bg-wisetack-blue/10 p-2 rounded-full mr-4">
                <Mail className="h-6 w-6 text-wisetack-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-wisetack-dark mb-1">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Our support team is available to assist you with your application.
                </p>
                <div className="flex items-center text-sm text-gray-700 mb-1">
                  <Mail className="h-4 w-4 mr-2 text-wisetack-blue" />
                  <span>support@wisetack.com</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-wisetack-blue" />
                  <span>1-800-123-4567</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0 pb-6 px-6">
            <Button 
              variant="outline"
              className="w-full border-wisetack-blue/50 text-wisetack-blue hover:bg-wisetack-blue/5"
              onClick={() => window.open('mailto:support@wisetack.com', '_blank')}
            >
              Email Support
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Incomplete;
