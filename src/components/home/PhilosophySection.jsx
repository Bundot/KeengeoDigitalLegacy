import React from 'react';
import { motion } from 'framer-motion';
import DiamondPattern from '../shared/DiamondPattern';

export default function PhilosophySection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <DiamondPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase mb-6 text-primary">
            Our Philosophy
          </span>
          <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-snug italic">
            "We believe in turning waste into wealth, ensuring any dead bone rises again through meticulous evaluation and extra sensory perception of every idea before execution."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-primary/50" />
            <p className="font-body text-sm text-primary font-semibold tracking-wide">Chief Geoffrey Ejiofor</p>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <p className="font-body text-xs text-muted-foreground mt-1">Managing Director / CEO</p>
        </motion.div>
      </div>
    </section>
  );
}