import React from 'react';
import { motion } from 'framer-motion';

interface WisetackVideoProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const WisetackVideo = ({ 
  title = "Watch the Demo", 
  subtitle = "See how Wisetack financing works inside Contractor+ in just a few minutes",
  className = ""
}: WisetackVideoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {title && (
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-wisetack-dark mb-2">{title}</h3>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video max-w-4xl mx-auto">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://killerplayer.com/watch/video/45aa7290-e0c1-4e51-bc3a-381ee9bc4c77"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          title="Wisetack demo for Contractor+"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default WisetackVideo;
