import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '../components/shared/SectionHeader';
import DiamondPattern from '../components/shared/DiamondPattern';

const partners = [
  {
    name: 'ABB',
    country: 'Germany',
    desc: 'Global leader in electrification and automation technologies, powering our high-voltage and transformer solutions.',
    flag: '🇩🇪',
  },
  {
    name: 'TIMSAN',
    country: 'Turkey',
    desc: 'Trusted partner in electrical panel manufacturing and industrial engineering components.',
    flag: '🇹🇷',
  },
  {
    name: 'Transtech',
    country: 'India',
    desc: 'Engineering solutions provider specializing in power transmission and distribution equipment.',
    flag: '🇮🇳',
  },
  {
    name: 'Andil Group',
    country: 'China',
    desc: 'Strategic partner in renewable energy systems, solar technology, and infrastructure materials.',
    flag: '🇨🇳',
  },
];

export default function Partnerships() {
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <DiamondPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Global Reach"
            title="International Engineering Alliances"
            description="Strategic partnerships with world-class firms across four continents, bringing global expertise to Nigerian infrastructure."
          />
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.7, 0, 0.3, 1] }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">{partner.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg">{partner.flag}</span>
                      <span className="font-body text-sm text-primary font-semibold">{partner.country}</span>
                    </div>
                  </div>
                  <Globe className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="bg-card border border-border rounded-lg p-8 lg:p-12"
          >
            <div className="text-center mb-10">
              <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-primary">Presence</span>
              <h3 className="font-heading text-2xl font-bold text-foreground mt-2">Where We Operate</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <div className="text-2xl mb-3">🇳🇬</div>
                <h4 className="font-heading font-semibold text-foreground">Nigeria — Head Office</h4>
                <p className="font-body text-sm text-muted-foreground mt-2">Kaduna</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Primary operations hub</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <div className="text-2xl mb-3">🇳🇬</div>
                <h4 className="font-heading font-semibold text-foreground">Nigeria — Branch</h4>
                <p className="font-body text-sm text-muted-foreground mt-2">Enugu</p>
                <p className="font-body text-xs text-muted-foreground mt-1">South-East operations</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <div className="text-2xl mb-3">🌍</div>
                <h4 className="font-heading font-semibold text-foreground">Global Partners</h4>
                <p className="font-body text-sm text-muted-foreground mt-2">Germany, Turkey, India, China</p>
                <p className="font-body text-xs text-muted-foreground mt-1">International alliances</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold">
                  Connect with our Engineers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}