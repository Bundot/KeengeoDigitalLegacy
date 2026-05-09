import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DiamondPattern from '../shared/DiamondPattern';

const HERO_IMG = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="High-voltage substation at dusk with dramatic industrial lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <DiamondPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-body font-semibold text-primary tracking-wider">ESTABLISHED 1990 · RC. 284018</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.7, 0, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1]"
          >
            Great Ideas Are Like{' '}
            <span className="text-primary italic">Diamonds</span>{' '}
            and Are Forever
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.7, 0, 0.3, 1] }}
            className="mt-6 text-lg text-muted-foreground font-body leading-relaxed max-w-lg"
          >
            Over 33 years delivering excellence in electrical engineering, civil construction, and renewable energy across Nigeria and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.7, 0, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 h-12 text-base">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-body font-semibold px-8 h-12 text-base border-primary/30 text-foreground hover:bg-primary/10">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 33 Years Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-40 h-40 rounded-full border-2 border-primary/40 flex flex-col items-center justify-center bg-background/60 backdrop-blur-md">
            <span className="font-heading text-5xl font-bold text-primary">33</span>
            <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Years</span>
            <span className="font-body text-[10px] text-muted-foreground tracking-wider">of Service</span>
            <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.15]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}