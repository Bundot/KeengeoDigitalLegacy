import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Scale, Handshake, Users } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Honesty', desc: 'Transparent dealings in every engagement, from initial consultation to project delivery.' },
  { icon: Scale, title: 'Integrity', desc: 'Unwavering commitment to ethical business practices that stand the test of time.' },
  { icon: Handshake, title: 'Business Ethics', desc: 'Operating with the highest professional standards in every project and partnership.' },
  { icon: Users, title: 'Respect for Customers', desc: 'Placing client needs at the center of every engineering decision and solution.' },
];

export default function CoreValues() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.7, 0, 0.3, 1] }}
          className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <v.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-heading text-lg font-semibold text-foreground">{v.title}</h4>
          <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}