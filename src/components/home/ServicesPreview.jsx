import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Droplets, Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '../shared/SectionHeader';

const ELEC_IMG = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80';
const WATER_IMG = 'https://images.unsplash.com/photo-1548191937-03d7366a1d81?w=800&q=80';
const SOLAR_IMG = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80';

const services = [
  {
    icon: Zap,
    title: 'Power & Electrification',
    desc: 'Rural and urban electrification, HV/MV electric panels, transformer installation and maintenance.',
    image: ELEC_IMG,
    alt: 'Digital multimeter testing complex HV electric panel with copper wiring',
  },
  {
    icon: Droplets,
    title: 'Water Infrastructure',
    desc: 'Borehole construction, water distribution networks, and treatment systems.',
    image: WATER_IMG,
    alt: 'Civil water distribution network with steel pipes integrated into landscape',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    desc: 'Solar street lights, solar panels, and solar-powered water distribution systems.',
    image: SOLAR_IMG,
    alt: 'Sprawling solar panel farm at golden hour with deep blue and gold sky',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Capabilities"
          title="Engineering Excellence Across Sectors"
          description="From power infrastructure to renewable energy, we deliver comprehensive engineering solutions with meticulous evaluation and precision."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.7, 0, 0.3, 1] }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" className="font-body font-semibold border-primary/30 text-foreground hover:bg-primary/10">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}