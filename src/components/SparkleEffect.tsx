
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  shape: 'rectangle' | 'circle' | 'triangle' | 'star';
}

const ConfettiShape = ({ color, shape }: { color: string, shape: 'rectangle' | 'circle' | 'triangle' | 'star' }) => {
  switch (shape) {
    case 'rectangle':
      return <rect width="100%" height="100%" fill={color} />;
    case 'circle':
      return <circle cx="50%" cy="50%" r="50%" fill={color} />;
    case 'triangle':
      return <polygon points="50,0 100,100 0,100" fill={color} />;
    case 'star':
      return (
        <path 
          d="M10 0 L13 7 L20 7 L14 12 L16 20 L10 15 L4 20 L6 12 L0 7 L7 7 Z" 
          fill={color} 
          transform="scale(0.8)"
        />
      );
  }
};

const Confetti = ({ x, y, size, color, delay, duration, rotation, shape }: ConfettiProps) => {
  // Calculate a random end position for more realistic falling motion
  const endX = x + (Math.random() * 200 - 100);
  const endY = window.innerHeight + 100; // Always fall below screen
  
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{ 
        left: x, 
        top: y,
        width: size,
        height: shape === 'rectangle' ? size * 0.5 : size, // Rectangles are more elongated
      }}
      initial={{ opacity: 0, y: y, x: x, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [y, endY],
        x: [x, endX],
        rotate: [0, rotation],
      }}
      transition={{ 
        duration: duration, 
        ease: "easeInOut", 
        delay: delay,
        times: [0, 0.1, 0.8, 1]
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
        <ConfettiShape color={color} shape={shape} />
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
  const [confetti, setConfetti] = useState<ConfettiProps[]>([]);

  useEffect(() => {
    if (!isActive) return;
    
    // Clear existing confetti
    setConfetti([]);
    
    // Create a new set of confetti pieces
    const newConfetti = [];
    const colors = [
      '#FFD700', // gold
      '#42B7C1', // wisetack blue
      '#9b87f5', // vivid purple
      '#D946EF', // magenta pink
      '#F97316', // bright orange
      '#0EA5E9', // ocean blue
      '#7FD3DB', // wisetack light blue
      '#D6BCFA', // light purple
      '#FF3857', // bright red
      '#22C55E', // green
      '#FFEB3B', // yellow
    ];
    
    const shapes: ('rectangle' | 'circle' | 'triangle' | 'star')[] = ['rectangle', 'circle', 'triangle', 'star'];
    
    // Determine the number of confetti pieces based on intensity
    const confettiCount = intensity === 'celebration' ? 200 : 100;
    
    // Generate confetti across the entire top of the screen
    for (let i = 0; i < confettiCount; i++) {
      // Distribute confetti across the viewport width
      const x = Math.random() * window.innerWidth;
      // Start near the top of the screen
      const y = Math.random() * -100;
      
      // Vary sizes for visual interest
      const size = 8 + Math.random() * 12;
      
      // Random color from our palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Add random delays for a staggered animation
      const delay = Math.random() * 1;
      
      // Vary duration for more organic movement
      const duration = 3 + Math.random() * 4;
      
      // Random rotation amount
      const rotation = Math.random() * 720 - 360; // -360 to 360 degrees
      
      // Random shape
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      newConfetti.push({ 
        x, 
        y, 
        size, 
        color, 
        delay, 
        duration,
        rotation,
        shape
      });
    }
    
    setConfetti(newConfetti);
    
    // Reset after all animations complete
    const maxDuration = 7000; // 7 seconds should be enough for all animations
    const timer = setTimeout(() => {
      setConfetti([]);
    }, maxDuration);
    
    return () => clearTimeout(timer);
  }, [isActive, intensity]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {confetti.map((piece, i) => (
        <Confetti key={i} {...piece} />
      ))}
    </div>
  );
};

export default SparkleEffect;
