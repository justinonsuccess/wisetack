import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  ArrowLeft,
  HelpCircle,
  Mail,
  Phone,
  CalendarClock,
  CheckCircle2,
  FileSearch,
  ClipboardCheck,
  Building2,
  User2,
  ShieldCheck,
  Files
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const UnderReview = () => {
  const [progress, setProgress] = useState(40);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-wisetack-blue hover:text-wisetack-darkblue inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <GlassmorphicCard className="mb-8 p-6 md:p-8">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 px-4 py-1.5 text-sm rounded-full">
              Under Review
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-wisetack-dark text-center mb-6">
            Your Application is Being Reviewed
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="p-3 rounded-full bg-amber-50">
              <Clock className="h-12 w-12 text-amber-500" />
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Application Submitted</span>
                <span>Application Reviewed</span>
                <span>Decision</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <Card className="bg-gray-50 border-gray-100">
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Thank you for applying to become a Wisetack merchant partner. Our underwriting team is 
                  carefully reviewing your application to ensure it meets our qualification standards.
                  You will receive an email notification once a decision has been made.
                </p>
              </CardContent>
            </Card>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Card className="flex-1 border-amber-100 bg-amber-50/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-amber-700 mb-3">
                    <CalendarClock className="h-5 w-5" />
                    <h3 className="font-medium">Review Timeline</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Most applications are reviewed within 2-3 business days, though some may require additional information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 border-blue-100 bg-blue-50/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-blue-700 mb-3">
                    <CheckCircle2 className="h-5 w-5" />
                    <h3 className="font-medium">Next Steps</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Once approved, you'll receive access to your merchant dashboard and financing tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </GlassmorphicCard>
        
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="faq" className="data-[state=active]:bg-wisetack-blue data-[state=active]:text-white">
              <HelpCircle className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-wisetack-blue data-[state=active]:text-white">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-wisetack-dark flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-wisetack-blue" />
                  Common Questions During Application Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <FileSearch className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>What happens during the application review?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      During the review process, our underwriting team verifies your business information, 
                      checks your eligibility against our merchant requirements, and evaluates your business 
                      stability. We review business documentation, online reputation, and financial information 
                      to ensure you meet our partnership standards.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <ClipboardCheck className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>Can I provide additional information?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      Yes! If our team needs additional information to process your application, 
                      you'll receive an email with specific requests. You can also proactively 
                      contact our support team if you believe there's important information or 
                      documentation that would strengthen your application.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <Building2 className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>What business types typically qualify?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      We work with established businesses across many home service industries, including HVAC, 
                      plumbing, electrical, roofing, and other home improvement sectors. Businesses should have 
                      at least one year in operation, $150,000 minimum annual revenue, and a good standing with 
                      licensing authorities. We also consider your online reputation and customer reviews.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <User2 className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>How will I be notified of the decision?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      You'll receive an email notification when a decision has been made on your application. 
                      If approved, the email will contain instructions for accessing your merchant dashboard 
                      and next steps for setting up your financing tools. If your application requires additional 
                      review, we'll reach out with specific requests for more information.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <ShieldCheck className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>What happens if my application is not approved?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      If your application isn't approved, you'll receive an email explaining the decision. 
                      Many businesses become eligible after addressing specific concerns or after achieving 
                      certain business milestones. We encourage you to review our requirements and reapply 
                      when your business qualifications have changed. Our support team can provide guidance 
                      on what might help strengthen a future application.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="hover:text-wisetack-blue">
                      <div className="flex items-center text-left">
                        <Files className="h-5 w-5 mr-3 text-wisetack-blue" />
                        <span>What documents might be requested during review?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10">
                      During the review process, we may request additional documents such as business formation 
                      documents, proof of business insurance, professional licensing information, or financial 
                      statements. Having these documents ready can help expedite the review process if they're requested.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center text-wisetack-blue">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For questions about your application status:</p>
                  <a 
                    href="mailto:merchants@wisetack.com" 
                    className="text-wisetack-blue font-medium hover:underline"
                  >
                    merchants@wisetack.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Typically responds within 24 hours</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-wisetack-blue border-wisetack-blue/50 hover:border-wisetack-blue hover:bg-wisetack-blue/5"
                    onClick={() => window.location.href = 'mailto:merchants@wisetack.com'}
                  >
                    Send Email
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center text-wisetack-blue">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For immediate assistance with your application:</p>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UnderReview;
