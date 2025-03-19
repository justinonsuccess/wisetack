
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldX, 
  ArrowLeft, 
  Mail, 
  Clock, 
  RefreshCw, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Coins, 
  FileCheck 
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Rejected = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <GlassmorphicCard className="mb-6 p-8 text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 px-4 py-1.5 text-sm rounded-full">
              Not Approved
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-wisetack-dark mb-4">
            Additional Review Required
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="p-2 rounded-full bg-red-50">
              <ShieldX className="h-12 w-12 text-red-400" />
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Thank you for taking the time to apply for Wisetack consumer financing. 
            <span className="block font-medium text-gray-700 my-2">
              Unfortunately, your business does not meet our qualifications at this time.
            </span>
          </p>
          
          <Card className="bg-gray-50 border-gray-100 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-600">
                We will keep your application on file and encourage you to check back if your qualifications change, or if 
                it appears we have reached this decision in error. Please check your email for more information regarding your application.
              </p>
            </CardContent>
          </Card>
        </GlassmorphicCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-wisetack-blue/10 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-wisetack-blue/10 p-2 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-wisetack-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-wisetack-dark mb-1">Contact Wisetack Support</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Reach out to our support team if you believe this decision was made in error.
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
          
          <Card className="border-wisetack-blue/10 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-wisetack-blue/10 p-2 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-wisetack-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-wisetack-dark mb-1">Try Again Later</h3>
                  <p className="text-sm text-gray-600">
                    Your business conditions may change. We encourage you to check back in the future.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-wisetack-blue/50 text-wisetack-blue hover:bg-wisetack-blue/5"
                  >
                    View Requirements {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
              </Collapsible>
            </CardFooter>
          </Card>
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
          <CollapsibleContent>
            <Card className="border-wisetack-blue/10 shadow-sm p-6 bg-white">
              <h3 className="text-lg font-medium text-wisetack-dark mb-4 flex items-center">
                <FileCheck className="h-5 w-5 mr-2 text-wisetack-blue" />
                Wisetack Eligibility Requirements
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-wisetack-blue" />
                    Business Requirements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Established business with at least 1 year in operation",
                      "Minimum annual revenue of $150,000",
                      "Valid business license in your service area",
                      "Good standing with licensing authorities",
                      "Positive online reputation (minimum 5-star rating average)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="h-5 w-5 rounded-full bg-wisetack-blue/10 flex items-center justify-center mr-2 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-wisetack-blue"></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <Coins className="h-4 w-4 mr-2 text-wisetack-blue" />
                    Financial Requirements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Business banking account in good standing",
                      "Ability to accept electronic payments",
                      "No recent business bankruptcies",
                      "Current on tax obligations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="h-5 w-5 rounded-full bg-wisetack-blue/10 flex items-center justify-center mr-2 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-wisetack-blue"></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-wisetack-blue" />
                    Documentation Needed
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Business formation documents",
                      "Business owner identification",
                      "EIN/Tax ID number",
                      "Professional licensing information",
                      "Proof of business insurance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="h-5 w-5 rounded-full bg-wisetack-blue/10 flex items-center justify-center mr-2 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-wisetack-blue"></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default Rejected;
