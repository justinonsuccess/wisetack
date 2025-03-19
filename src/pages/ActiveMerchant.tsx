import React, { useState } from 'react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  CheckCircle2, 
  BookOpen, 
  Lightbulb, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  ClipboardList, 
  Settings, 
  FileText,
  Truck,
  PenTool,
  BarChart4
} from "lucide-react";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import CTAButton from "@/components/CTAButton";

const ActiveMerchant = () => {
  const [financingOptions, setFinancingOptions] = useState({
    months6: true,
    months12: true,
    months24: false,
    months36: false,
    months60: false,
    promo0: false
  });

  const handleSwitchChange = (key: keyof typeof financingOptions) => {
    setFinancingOptions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const ResourceCard = ({ title, description, icon, url }: { 
    title: string, 
    description: string, 
    icon: React.ReactNode,
    url: string
  }) => (
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wisetack-gray/20 pb-16">
      {/* Hero Section with Status */}
      <div className="bg-gradient-to-r from-wisetack-blue/10 to-wisetack-lightblue/10 pt-8 pb-12 border-b border-wisetack-blue/10">
        <div className="container px-4 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
            <div className="flex items-center mb-4 lg:mb-0">
              <img 
                src="public/lovable-uploads/94302ae0-76a9-4882-b66a-50a5b56da5b5.png" 
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

      {/* Main Content */}
      <div className="container px-4 lg:px-8 mx-auto mt-12">
        <Tabs defaultValue="resources" className="w-full">
          <TabsList className="mb-8 w-full justify-start border-b pb-0 pt-0 h-auto">
            <TabsTrigger value="resources" className="rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-wisetack-blue">
              <Lightbulb className="mr-2 h-4 w-4" />
              Key Resources
            </TabsTrigger>
            <TabsTrigger value="manage" className="rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-wisetack-blue">
              <Settings className="mr-2 h-4 w-4" />
              Manage Financing
            </TabsTrigger>
            <TabsTrigger value="support" className="rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-wisetack-blue">
              <Mail className="mr-2 h-4 w-4" />
              Support
            </TabsTrigger>
          </TabsList>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
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
          </TabsContent>

          {/* Manage Financing Tab */}
          <TabsContent value="manage" className="space-y-8">
            <h2 className="text-2xl font-semibold text-wisetack-dark flex items-center">
              <Settings className="mr-2 h-6 w-6 text-wisetack-blue" />
              Manage Your Financing Offers
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Tailor the financing options you present to customers. Use the toggles below to control which financing 
              plans you offer through Contractor+. Changes take effect immediately for all new estimates and invoices.
            </p>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Financing Plan Options</CardTitle>
                <CardDescription>
                  Select which financing options you want to make available to your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">6 Month Financing</h3>
                        <p className="text-sm text-gray-500">5.9-29.9% APR</p>
                      </div>
                      <Switch 
                        checked={financingOptions.months6}
                        onCheckedChange={() => handleSwitchChange('months6')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">12 Month Financing</h3>
                        <p className="text-sm text-gray-500">6.9-29.9% APR</p>
                      </div>
                      <Switch 
                        checked={financingOptions.months12}
                        onCheckedChange={() => handleSwitchChange('months12')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">24 Month Financing</h3>
                        <p className="text-sm text-gray-500">7.9-29.9% APR</p>
                      </div>
                      <Switch 
                        checked={financingOptions.months24}
                        onCheckedChange={() => handleSwitchChange('months24')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">36 Month Financing</h3>
                        <p className="text-sm text-gray-500">8.9-29.9% APR</p>
                      </div>
                      <Switch 
                        checked={financingOptions.months36}
                        onCheckedChange={() => handleSwitchChange('months36')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">60 Month Financing</h3>
                        <p className="text-sm text-gray-500">9.9-29.9% APR</p>
                      </div>
                      <Switch 
                        checked={financingOptions.months60}
                        onCheckedChange={() => handleSwitchChange('months60')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <h3 className="font-medium">Promotional 0% APR</h3>
                        <span className="ml-2 text-xs bg-wisetack-blue text-white px-2 py-0.5 rounded-full">Premium</span>
                      </div>
                      <Switch 
                        checked={financingOptions.promo0}
                        onCheckedChange={() => handleSwitchChange('promo0')}
                        className="data-[state=checked]:bg-wisetack-blue"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <p className="text-sm text-gray-500 max-w-md">
                  <span className="font-medium">Pro Tip:</span> Offering longer terms can make larger projects more affordable with smaller monthly payments.
                </p>
                <Button className="bg-wisetack-blue hover:bg-wisetack-darkblue">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
            
            <div className="bg-wisetack-blue/5 p-6 rounded-lg border border-wisetack-blue/20 mt-8">
              <h3 className="font-semibold text-wisetack-dark text-lg mb-2">Remember:</h3>
              <p className="text-gray-700">
                The more actively you promote and manage your financing options, the more value you'll see. We encourage you to talk about 
                financing with every client and make it a routine part of your proposals. With the resources and tools on this page, 
                you're equipped to boost your sales and provide an outstanding client experience.
              </p>
              <div className="mt-4">
                <CTAButton>
                  View Your Training
                </CTAButton>
              </div>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-8">
            <h2 className="text-2xl font-semibold text-wisetack-dark flex items-center">
              <Mail className="mr-2 h-6 w-6 text-wisetack-blue" />
              Need Help? Contact Wisetack Support
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Have questions or need assistance with financing? Wisetack's support team is here to help you succeed. 
              Whether you need troubleshooting, training, or advice on best practices, don't hesitate to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center text-wisetack-blue">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For detailed questions or account-specific inquiries:</p>
                  <a 
                    href="mailto:support@wisetack.com" 
                    className="text-wisetack-blue font-medium hover:underline"
                  >
                    support@wisetack.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Typically responds within 24 hours</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-wisetack-blue border-wisetack-blue/50 hover:border-wisetack-blue hover:bg-wisetack-blue/5"
                    onClick={() => window.location.href = 'mailto:support@wisetack.com'}
                  >
                    Send Email
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center text-wisetack-blue">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For immediate assistance or urgent matters:</p>
                  <a 
                    href="tel:1-833-927-0333" 
                    className="text-wisetack-blue font-medium hover:underline"
                  >
                    1-833-927-0333
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Available Mon–Fri, 9am–8pm ET</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-wisetack-blue border-wisetack-blue/50 hover:border-wisetack-blue hover:bg-wisetack-blue/5"
                    onClick={() => window.location.href = 'tel:1-833-927-0333'}
                  >
                    Call Now
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-wisetack-dark">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left">How do my customers apply for financing?</AccordionTrigger>
                  <AccordionContent>
                    Customers can apply through the prequalification link you provide them, or directly when reviewing your 
                    estimates and invoices in the client portal. The application takes just minutes to complete, and most 
                    customers receive an instant decision.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left">When do I get paid for financed jobs?</AccordionTrigger>
                  <AccordionContent>
                    You'll receive the full payment amount (minus the 3.9% fee) directly to your bank account within 1-2 
                    business days after the job is completed and the customer confirms completion in their Wisetack account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left">Does financing affect my customer's credit score?</AccordionTrigger>
                  <AccordionContent>
                    Initial prequalification checks use a soft credit pull that doesn't affect the customer's credit score. 
                    Only if they proceed with a full application will a hard credit inquiry be performed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left">Can my customer pay off their loan early?</AccordionTrigger>
                  <AccordionContent>
                    Yes, customers can pay off their loans at any time with no prepayment penalties. This gives them 
                    flexibility while still providing you with the full payment amount upfront.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left">What happens if a customer defaults on their loan?</AccordionTrigger>
                  <AccordionContent>
                    Once a job is completed and you've been paid, you receive the full amount regardless of what happens 
                    afterward. Wisetack assumes all risk of customer non-payment after the job is complete.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ActiveMerchant;
