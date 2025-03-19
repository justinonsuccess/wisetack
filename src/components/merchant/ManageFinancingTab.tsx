
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import CTAButton from "@/components/CTAButton";

interface FinancingOptionsState {
  months6: boolean;
  months12: boolean;
  months24: boolean;
  months36: boolean;
  months60: boolean;
  promo0: boolean;
}

const ManageFinancingTab = () => {
  const [financingOptions, setFinancingOptions] = useState<FinancingOptionsState>({
    months6: true,
    months12: true,
    months24: false,
    months36: false,
    months60: false,
    promo0: false
  });

  const handleSwitchChange = (key: keyof FinancingOptionsState) => {
    setFinancingOptions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default ManageFinancingTab;
