
import React, { forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  icon?: boolean;
  iconRight?: React.ReactNode;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  disabled?: boolean;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(({
  children, 
  onClick, 
  className,
  icon = true,
  iconRight,
  size = "default",
  variant = "default",
  disabled = false,
  ...props
}, ref) => {
  return (
    <Button 
      ref={ref}
      onClick={onClick}
      size={size}
      variant={variant}
      disabled={disabled}
      className={cn(
        "bg-wisetack-blue hover:bg-wisetack-darkblue transition-all duration-300 font-medium",
        "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        "relative z-0", // Added z-index to ensure sparkles appear on top
        className
      )}
      {...props}
    >
      {children}
      {icon && (iconRight || <ArrowRight className="ml-2 h-4 w-4" />)}
    </Button>
  );
});

CTAButton.displayName = "CTAButton";

export default CTAButton;
