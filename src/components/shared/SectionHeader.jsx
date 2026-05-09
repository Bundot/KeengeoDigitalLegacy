import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description, align = 'center', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
      className={`mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}
    >
      {label && (
        <span className={`inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase mb-4 ${light ? 'text-primary' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base font-body leading-relaxed ${light ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
      <div className={`mt-6 h-px w-16 bg-primary/50 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}