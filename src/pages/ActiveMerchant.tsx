
import React from 'react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Lightbulb, 
  Mail, 
  Settings,
  FileText
} from "lucide-react";

// Import the new components
import MerchantHeader from "@/components/merchant/MerchantHeader";
import ResourcesTab from "@/components/merchant/ResourcesTab";
import ManageFinancingTab from "@/components/merchant/ManageFinancingTab";
import SupportTab from "@/components/merchant/SupportTab";
import LoansTab from "@/components/merchant/LoansTab";

// Import Toaster for notifications
import { Toaster } from "@/components/ui/toaster";

const ActiveMerchant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wisetack-gray/20 pb-16">
      {/* Hero Section with Status */}
      <MerchantHeader />

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
              Manage Pricing Plan
            </TabsTrigger>
            <TabsTrigger value="loans" className="rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-wisetack-blue">
              <FileText className="mr-2 h-4 w-4" />
              Loans
            </TabsTrigger>
            <TabsTrigger value="support" className="rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-wisetack-blue">
              <Mail className="mr-2 h-4 w-4" />
              Support
            </TabsTrigger>
          </TabsList>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <ResourcesTab />
          </TabsContent>

          {/* Manage Financing Tab */}
          <TabsContent value="manage">
            <ManageFinancingTab />
          </TabsContent>

          {/* Loans Tab */}
          <TabsContent value="loans">
            <LoansTab />
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <SupportTab />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Add Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default ActiveMerchant;
