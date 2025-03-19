
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  sparkleType: 'star' | 'circle' | 'diamond';
  scale?: number;
  distance?: number;
}

const SparkleSvg = ({ color, sparkleType }: { color: string, sparkleType: 'star' | 'circle' | 'diamond' }) => {
  switch (sparkleType) {
    case 'star':
      return (
        <path 
          d="M26.5 4.5C30.5 12.5 37.5 20.5 46.5 22.5C37.5 24.5 30.5 32.5 26.5 40.5C22.5 32.5 15.5 24.5 6.5 22.5C15.5 20.5 22.5 12.5 26.5 4.5Z"
          fill={color}
        />
      );
    case 'circle':
      return (
        <circle 
          cx="34" 
          cy="34" 
          r="14" 
          fill={color} 
        />
      );
    case 'diamond':
      return (
        <path 
          d="M34 15L53 34L34 53L15 34L34 15Z" 
          fill={color} 
        />
      );
  }
};

const Sparkle = ({ x, y, size, color, delay, duration, sparkleType, scale = 1, distance = 1 }: SparkleProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, scale * 1.2, scale * 0.8, 0],
        rotate: [0, Math.random() * 90, Math.random() * 180, Math.random() * 270],
      }}
      transition={{ 
        duration: duration, 
        ease: "easeOut", 
        delay: delay,
        times: [0, 0.3, 0.8, 1]
      }}
    >
      <svg width={size} height={size} viewBox="0 0 68 68" fill="none" filter="drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))">
        <SparkleSvg color={color} sparkleType={sparkleType} />
      </svg>
    </motion.div>
  );
};

interface SparkleEffectProps {
  isActive: boolean;
  originX: number;
  originY: number;
  intensity?: 'normal' | 'celebration';
}

const SparkleEffect = ({ isActive, originY, originX, intensity = 'normal' }: SparkleEffectProps) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    if (!isActive) return;
    
    // Clear existing sparkles
    setSparkles([]);
    
    // Create a new set of sparkles
    const newSparkles = [];
    const colors = [
      '#FFD700', // gold
      '#42B7C1', // wisetack blue
      '#9b87f5', // vivid purple
      '#D946EF', // magenta pink
      '#F97316', // bright orange
      '#0EA5E9', // ocean blue
      '#7FD3DB', // wisetack light blue
      '#D6BCFA', // light purple
    ];
    
    const sparkleTypes: ('star' | 'circle' | 'diamond')[] = ['star', 'circle', 'diamond'];
    
    // Determine the number of sparkles based on intensity
    const sparkleCount = intensity === 'celebration' ? 100 : 40;
    // Max distance for the sparkles
    const maxDistance = intensity === 'celebration' ? 200 : 120;
    // Size multiplier
    const sizeMultiplier = intensity === 'celebration' ? 1.5 : 1;
    
    // Generate many sparkles with random properties for a more stunning effect
    for (let i = 0; i < sparkleCount; i++) {
      // For celebration mode, create a more explosive pattern
      const angle = Math.random() * Math.PI * 2;
      // Vary the distance for a more natural burst effect
      const distance = 20 + Math.random() * maxDistance; 
      const x = originX + Math.cos(angle) * distance;
      const y = originY + Math.sin(angle) * distance;
      
      // Vary sizes for visual interest
      const size = (10 + Math.random() * 30) * sizeMultiplier;
      
      // Random color from our enhanced palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Add random delays for a staggered animation
      const delay = Math.random() * 0.4;
      
      // Vary duration slightly for more organic feel
      const duration = 0.6 + Math.random() * 0.8;
      
      // Random sparkle type
      const sparkleType = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
      
      // For celebration, add some extra scale for bigger impact
      const scale = intensity === 'celebration' ? 1 + Math.random() * 0.5 : 1;
      
      newSparkles.push({ 
        x, 
        y, 
        size, 
        color, 
        delay, 
        duration,
        sparkleType,
        scale,
        distance
      });
    }
    
    setSparkles(newSparkles);
    
    // Reset after all animations complete (use the maximum possible duration plus delay)
    const maxDuration = intensity === 'celebration' ? 2400 : 1400;
    const timer = setTimeout(() => {
      setSparkles([]);
    }, maxDuration);
    
    return () => clearTimeout(timer);
  }, [isActive, originX, originY, intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
    </div>
  );
};

export default SparkleEffect;
