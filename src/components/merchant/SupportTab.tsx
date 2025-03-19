
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";

const SupportTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default SupportTab;
