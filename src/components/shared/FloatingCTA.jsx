import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <Link to="/contact">
      <motion.div
        className="fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl shadow-accent/30 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
    </Link>
  );
}