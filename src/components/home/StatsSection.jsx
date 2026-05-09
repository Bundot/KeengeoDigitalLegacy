import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Clock, value: '33+', label: 'Years of Service', desc: 'Since 1990' },
  { icon: Zap, value: '500+', label: 'Projects Completed', desc: 'Across Nigeria' },
  { icon: Globe, value: '4', label: 'International Partners', desc: 'Global Reach' },
  { icon: Award, value: 'RC 284018', label: 'Incorporated', desc: 'Since 1995' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.7, 0, 0.3, 1] }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-sm font-medium text-foreground mt-1">{stat.label}</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}