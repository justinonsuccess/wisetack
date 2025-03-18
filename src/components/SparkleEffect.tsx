
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  x: number;
  y: number;
  size: number;
  color: string;
}

const Sparkle = ({ x, y, size, color }: SparkleProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1, scale: 0 }}
      animate={{
        opacity: [1, 1, 0],
        scale: [0, 1, 0.5],
        rotate: [0, 90, 180],
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d="M26.5 4.5C30.5 12.5 37.5 20.5 46.5 22.5C37.5 24.5 30.5 32.5 26.5 40.5C22.5 32.5 15.5 24.5 6.5 22.5C15.5 20.5 22.5 12.5 26.5 4.5Z" 
          fill={color} />
      </svg>
    </motion.div>
  );
};

interface SparkleEffectProps {
  isActive: boolean;
  originX: number;
  originY: number;
}

const SparkleEffect = ({ isActive, originY, originX }: SparkleEffectProps) => {
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
      '#FFA500', // orange
      '#7FD3DB', // wisetack light blue
    ];
    
    // Generate 20 sparkles with random positions, sizes, and colors
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 80; // Distance from origin
      const x = originX + Math.cos(angle) * distance;
      const y = originY + Math.sin(angle) * distance;
      const size = 12 + Math.random() * 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newSparkles.push({ x, y, size, color });
    }
    
    setSparkles(newSparkles);
    
    // Reset after animation completes
    const timer = setTimeout(() => {
      setSparkles([]);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [isActive, originX, originY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
    </div>
  );
};

export default SparkleEffect;
