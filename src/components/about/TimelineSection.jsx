import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const milestones = [
  { year: '1990', title: 'Company Established', desc: 'Keengeo Technical W.A Nig. Ltd. was founded with a vision for engineering excellence.' },
  { year: '1995', title: 'Incorporation', desc: 'Officially incorporated as a registered company (RC. No. 284018).' },
  { year: '2000', title: 'Expansion to Enugu', desc: 'Opened a second office in Enugu to serve the South-East region.' },
  { year: '2005', title: 'International Partnerships', desc: 'Forged strategic alliances with ABB, TIMSAN, and other global partners.' },
  { year: '2015', title: 'Renewable Energy Division', desc: 'Launched the solar and renewable energy services arm of operations.' },
  { year: '2023', title: '33 Years of Service', desc: 'Celebrated over three decades of continuous engineering excellence across Nigeria.' },
];

export default function TimelineSection() {
  return (
    <div className="relative">
      {/* Dashed line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30" />

      <div className="space-y-12">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.7, 0, 0.3, 1] }}
            className={`relative flex items-start gap-6 md:gap-12 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Pin */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10">
              <MapPin className="w-3 h-3 text-primary absolute -top-5 left-1/2 -translate-x-1/2" />
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
              <span className="font-heading text-2xl font-bold text-primary">{m.year}</span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-1">{m.title}</h4>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
            </div>

            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}