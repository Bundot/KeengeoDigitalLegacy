import React from 'react';
import SectionHeader from '../components/shared/SectionHeader';
import TimelineSection from '../components/about/TimelineSection';
import LeadershipCard from '../components/about/LeadershipCard';
import CoreValues from '../components/about/CoreValues';
import DiamondPattern from '../components/shared/DiamondPattern';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <DiamondPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About Keengeo"
            title="Building Nigeria's Infrastructure Since 1990"
            description="An indigenous firm of rigorously schooled engineers dedicated to establishing long-lasting partnerships in electrical, building, and civil construction."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Our Mission
              </h3>
              <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
                To establish long-lasting partnerships with clients in electrical engineering, building construction, and civil engineering by delivering projects with meticulous evaluation, technical precision, and unwavering dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Our Vision
              </h3>
              <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
                To be a leader in the Electrical Engineering industry by providing enhanced services, driving profitability, and positioning ourselves at the forefront of sustainable infrastructure development in Nigeria and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Core Values" title="The Pillars of Our Practice" />
          <CoreValues />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Journey" title="33 Years of Engineering Excellence" />
          <TimelineSection />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadershipCard />
        </div>
      </section>
    </div>
  );
}