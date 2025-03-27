
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
import { Settings, ExternalLink, Info, TrendingUp, PlusCircle, Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface APROptionState {
  selected: "3months" | "6months" | "12months" | "24months";
}

const ManageFinancingTab = () => {
  const [aprOption, setAprOption] = useState<APROptionState>({
    selected: "3months"
  });

  const handleAprOptionChange = (value: "3months" | "6months" | "12months" | "24months") => {
    setAprOption({ selected: value });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-wisetack-dark flex items-center">
        <Settings className="mr-2 h-6 w-6 text-wisetack-blue" />
        Manage Your Financing Offers
      </h2>
      <p className="text-gray-600 max-w-3xl">
        Tailor the financing options you present to customers. Below are the standard financing terms available 
        to all your customers, with a flat 3.9% fee. You can also offer extended 0% APR options to help increase conversion.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Standard Financing Terms</CardTitle>
          <CardDescription>
            All approved merchants offer terms from 3 to 60 months with a flat 3.9% fee.
            These standard financing options are automatically available to your customers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-wisetack-blue/30 bg-wisetack-blue/5">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">3 Month Financing</CardTitle>
                  <Badge variant="outline" className="bg-wisetack-blue/10 text-wisetack-blue border-wisetack-blue/30">Default</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">3<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">5.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t border-wisetack-blue/20">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">6 Month Financing</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">6<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">5.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">12 Month Financing</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">12<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">6.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">24 Month Financing</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">24<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">7.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">36 Month Financing</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">36<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">8.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">60 Month Financing</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-wisetack-dark">60<span className="text-lg font-normal ml-1">mo.</span></h3>
                  <Check className="h-5 w-5 text-wisetack-blue" />
                </div>
                <p className="text-sm text-gray-600 mt-1">9.9-29.9% APR</p>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <p className="text-sm font-medium text-wisetack-blue">3.9% merchant fee</p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-6 bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3">
            <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              All standard financing terms are available to your customers automatically. The 3.9% merchant fee applies to all standard financing options regardless of which term the customer selects.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-8 border-wisetack-blue/20">
        <CardHeader className="bg-wisetack-blue/5 border-b border-wisetack-blue/20 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-wisetack-dark">0% APR Financing Options</CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Increase average ticket size by offering extended interest-free terms to customers
              </CardDescription>
            </div>
            <TrendingUp className="h-10 w-10 text-wisetack-blue/70" />
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <p className="text-gray-700">
              Make it easier for your customers to say "yes" by offering extended 0% APR options. 
              Select one of the following plans to boost your sales with interest-free financing.
            </p>
            
            <RadioGroup 
              defaultValue={aprOption.selected} 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onValueChange={(value) => handleAprOptionChange(value as "3months" | "6months" | "12months" | "24months")}
            >
              <div className={`flex items-start space-x-2 p-4 border rounded-lg ${aprOption.selected === "3months" ? "border-wisetack-blue bg-wisetack-blue/5" : "border-gray-200"}`}>
                <RadioGroupItem value="3months" id="3months" className="mt-1 data-[state=checked]:bg-wisetack-blue data-[state=checked]:text-white" />
                <div className="flex-1">
                  <Label htmlFor="3months" className="text-base font-semibold flex items-center">
                    Up to 3 months 0% APR 
                    <Badge variant="outline" className="ml-2 bg-wisetack-blue/10 text-wisetack-blue border-wisetack-blue/30">Default</Badge>
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">3.9% merchant fee - included with all Wisetack financing</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-2 p-4 border rounded-lg ${aprOption.selected === "6months" ? "border-wisetack-blue bg-wisetack-blue/5" : "border-gray-200"}`}>
                <RadioGroupItem value="6months" id="6months" className="mt-1 data-[state=checked]:bg-wisetack-blue data-[state=checked]:text-white" />
                <div className="flex-1">
                  <Label htmlFor="6months" className="text-base font-semibold">Up to 6 months 0% APR</Label>
                  <p className="text-sm text-gray-500 mt-1">4.9% merchant fee</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-2 p-4 border rounded-lg ${aprOption.selected === "12months" ? "border-wisetack-blue bg-wisetack-blue/5" : "border-gray-200"}`}>
                <RadioGroupItem value="12months" id="12months" className="mt-1 data-[state=checked]:bg-wisetack-blue data-[state=checked]:text-white" />
                <div className="flex-1">
                  <Label htmlFor="12months" className="text-base font-semibold">Up to 12 months 0% APR</Label>
                  <p className="text-sm text-gray-500 mt-1">6.9% merchant fee</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-2 p-4 border rounded-lg ${aprOption.selected === "24months" ? "border-wisetack-blue bg-wisetack-blue/5" : "border-gray-200"}`}>
                <RadioGroupItem value="24months" id="24months" className="mt-1 data-[state=checked]:bg-wisetack-blue data-[state=checked]:text-white" />
                <div className="flex-1">
                  <Label htmlFor="24months" className="text-base font-semibold flex items-center">
                    Up to 24 months 0% APR
                    <Badge className="ml-2 bg-wisetack-blue text-white">Most Popular</Badge>
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">9.9% merchant fee</p>
                </div>
              </div>
            </RadioGroup>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3">
              <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-amber-800">
                  <span className="font-medium">Note:</span> The increased fee only applies when a customer qualifies for and selects the 0% APR option for 6, 12 or 24 months.
                  <Button 
                    variant="link" 
                    className="text-wisetack-blue px-1 h-auto"
                    onClick={() => window.open('https://www.wisetack.com/merchant-pricing', '_blank', 'noopener,noreferrer')}
                  >
                    Learn more <ExternalLink className="h-3 w-3 inline ml-0.5" />
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <p className="text-sm text-gray-500 max-w-md">
            <span className="font-medium">Pro Tip:</span> 0% APR financing options can increase average project size by 30% or more.
          </p>
          <Button className="bg-wisetack-blue hover:bg-wisetack-darkblue">
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
      
      <div className="bg-wisetack-blue/5 p-6 rounded-lg border border-wisetack-blue/20 mt-8">
        <h3 className="font-semibold text-wisetack-dark text-lg mb-2">Remember:</h3>
        <p className="text-gray-700">
          The more actively you promote financing options, the more value you'll see. Customers are 4x more likely 
          to choose you when interest-free financing is available. Always mention financing early in your sales process 
          and highlight the 0% APR options when discussing larger projects.
        </p>
        <div className="mt-4">
          <CTAButton>
            View Pricing Guide
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ManageFinancingTab;
