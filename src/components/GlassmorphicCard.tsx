
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

const GlassmorphicCard = ({ 
  children, 
  className,
  animationDelay = 0 
}: GlassmorphicCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card animate-fade-in-up", 
        className
      )} 
      style={{ 
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
