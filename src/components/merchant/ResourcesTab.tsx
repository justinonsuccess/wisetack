
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  ExternalLink, 
  Download, 
  PenTool,
  BarChart4,
  FileText,
  Truck,
  Lightbulb 
} from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const ResourceCard = ({ title, description, icon, url }: ResourceCardProps) => (
  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-wisetack-blue/20">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2 text-wisetack-blue mb-2">
        {icon}
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600 text-sm">{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button 
        variant="outline" 
        className="w-full text-wisetack-blue border-wisetack-blue/50 hover:border-wisetack-blue hover:bg-wisetack-blue/5"
        onClick={() => window.open(url, '_blank')}
      >
        View Resource <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

const ResourcesTab = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-wisetack-dark flex items-center">
        <Lightbulb className="mr-2 h-6 w-6 text-wisetack-blue" />
        Key Resources for Your Success
      </h2>
      <p className="text-gray-600 max-w-3xl">
        Leverage these hand-picked resources to learn how to integrate financing into your sales strategy and elevate your client experience. 
        Explore, learn, and watch your conversions climb.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ResourceCard 
          title="Increase Sales Conversions" 
          description="A practical guide to incorporating financing into your sales presentations and boosting your close rate."
          icon={<BarChart4 className="h-5 w-5" />}
          url="https://wisetack.com/resources/sales-conversions"
        />
        
        <ResourceCard 
          title="Ideal Client Sales Experience" 
          description="Insights on delivering a seamless, customer-centric sales process that enhances professionalism and builds trust."
          icon={<FileText className="h-5 w-5" />}
          url="https://wisetack.com/resources/client-experience"
        />
        
        <ResourceCard 
          title="Impact of Client Financing" 
          description="Dive into Wisetack's exclusive research on financing's benefits and data-backed insights on business growth."
          icon={<BookOpen className="h-5 w-5" />}
          url="https://wisetack.com/resources/financing-impact"
        />
        
        <ResourceCard 
          title="Home Services Marketing Guide" 
          description="A marketing playbook tailored for home service businesses, from local marketing to online tactics."
          icon={<PenTool className="h-5 w-5" />}
          url="https://wisetack.com/resources/marketing-guide"
        />
        
        <ResourceCard 
          title="Wisetack Print Shop" 
          description="Free promotional materials including brochures, decals, and signs to display on job sites and in your office."
          icon={<Truck className="h-5 w-5" />}
          url="https://wisetack.com/resources/print-shop"
        />
        
        <ResourceCard 
          title="Marketing Toolkit" 
          description="Ready-to-use digital assets including social media graphics, website banners, and email templates."
          icon={<Download className="h-5 w-5" />}
          url="https://wisetack.com/resources/marketing-toolkit"
        />
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-wisetack-dark">Your Prequalification Link</h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 mb-1">Share with customers to check their financing options:</p>
            <div className="flex items-center">
              <span className="text-wisetack-blue font-mono bg-wisetack-blue/5 py-1 px-2 rounded">
                www.wisetack.us/#/signupId/prequalify
              </span>
              <Button variant="ghost" className="ml-2 h-8 w-8 p-0" onClick={() => {
                navigator.clipboard.writeText('www.wisetack.us/#/signupId/prequalify');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>
          </div>
          <Button variant="outline" className="text-wisetack-blue border-wisetack-blue/50 hover:bg-wisetack-blue/5">
            Learn More
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Send this link to a customer to see how much they qualify for without affecting their credit score.
        </p>
      </div>
    </div>
  );
};

export default ResourcesTab;
