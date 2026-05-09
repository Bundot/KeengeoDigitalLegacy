import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Droplets, Sun, Building2, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '../components/shared/SectionHeader';
import DiamondPattern from '../components/shared/DiamondPattern';

const ELEC_IMG = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80';
const WATER_IMG = 'https://images.unsplash.com/photo-1548191937-03d7366a1d81?w=800&q=80';
const SOLAR_IMG = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80';
const TRANSFORMER_IMG = 'https://images.unsplash.com/photo-1626747176153-25835beab2bb?w=800&q=80';

const services = [
  {
    icon: Zap,
    title: 'Power & Electrification',
    image: ELEC_IMG,
    alt: 'Digital multimeter testing complex HV electric panel',
    items: [
      'Rural and urban electrification projects',
      'HV/MV electric panel design and installation',
      'Transformer installation and maintenance',
      '33KV distribution line construction',
      'Industrial power systems',
    ],
  },
  {
    icon: Droplets,
    title: 'Water Infrastructure',
    image: WATER_IMG,
    alt: 'Water distribution network infrastructure',
    items: [
      'Borehole construction and rehabilitation',
      'Water distribution networks',
      'Water treatment systems',
      'Pumping station design and construction',
      'Irrigation system engineering',
    ],
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    image: SOLAR_IMG,
    alt: 'Solar panel farm at golden hour',
    items: [
      'Solar street light installation',
      'Solar panel systems and farms',
      'Solar-powered water distribution',
      'Hybrid energy solutions',
      'Off-grid power systems',
    ],
  },
  {
    icon: Building2,
    title: 'Civil Engineering',
    image: TRANSFORMER_IMG,
    alt: 'High-voltage transformer installation at construction site',
    items: [
      'Building construction',
      'Road and bridge infrastructure',
      'Hydro-power dam maintenance',
      'Structural engineering',
      'Project management and consulting',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <DiamondPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title="The Capability Matrix"
            description="Comprehensive engineering solutions backed by 33 years of technical mastery and meticulous evaluation of every project."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">{service.title}</h3>
                </div>

                <ul className="space-y-3 mt-6">
                  {service.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold">
                      Request a Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* General Contracts */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="bg-card border border-border rounded-lg p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Wrench className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold text-foreground">General Contracts</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                Beyond our core specializations, Keengeo undertakes general engineering contracts across civil construction, industrial maintenance, and government infrastructure projects. Our team of rigorously schooled engineers ensures every contract is executed with precision and dedication.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="outline" className="font-body font-semibold border-primary/30 text-foreground hover:bg-primary/10 whitespace-nowrap">
                Contact our Engineers
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}