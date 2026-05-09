import React from 'react';
import { motion } from 'framer-motion';

const MD_IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80';

export default function LeadershipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      <div className="relative">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-primary/20">
          <img
            src={MD_IMG}
            alt="Chief Geoffrey Ejiofor, Managing Director and CEO of Keengeo Technical"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
      </div>

      <div>
        <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-primary">Leadership</span>
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
          Chief Geoffrey Ejiofor
        </h3>
        <p className="font-body text-sm text-primary font-semibold mt-1 tracking-wide">Managing Director / CEO</p>

        <div className="mt-6 space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
          <p>
            A rigorously schooled engineer with decades of experience in electrical and civil engineering, Chief Geoffrey Ejiofor founded Keengeo Technical in 1990 with a singular vision: to establish long-lasting partnerships built on honesty, integrity, and technical excellence.
          </p>
          <p>
            Under his leadership, the company has grown from a local firm into an indigenous engineering powerhouse with international partnerships spanning Germany, Turkey, India, and China.
          </p>
          <p>
            His philosophy of "extra sensory perception" in evaluating ideas before execution has guided the company through three decades of consistent delivery and innovation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}