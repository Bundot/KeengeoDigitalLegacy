import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import DiamondPattern from '../components/shared/DiamondPattern';

const offices = [
  {
    name: 'Head Office — Kaduna',
    address: 'Kaduna, Nigeria',
    phone: '+234 (0) 803 000 0000',
    email: 'kaduna@keengeo.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  },
  {
    name: 'Branch Office — Enugu',
    address: 'Enugu, Nigeria',
    phone: '+234 (0) 803 000 0001',
    email: 'enugu@keengeo.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <DiamondPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get in Touch"
            title="Connect With Our Engineers"
            description="Ready to discuss your next project? Reach out to our team for a consultation or request a detailed quote."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
              className="lg:col-span-3 bg-card border border-border rounded-lg p-6 lg:p-10"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Request a Quote</h3>
              <p className="font-body text-sm text-muted-foreground mb-8">Fill out the form and our engineering team will respond within 24 hours.</p>
              <ContactForm />
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
              className="lg:col-span-2 space-y-6"
            >
              {offices.map(office => (
                <div key={office.name} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{office.name}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Registration */}
              <div className="bg-secondary/50 border border-border rounded-lg p-6">
                <p className="font-body text-xs text-muted-foreground tracking-wide uppercase font-semibold">Company Registration</p>
                <p className="font-heading text-lg font-bold text-primary mt-1">RC. No. 284018</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Incorporated 1995</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}