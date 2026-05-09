import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ChronosLogo from './ChronosLogo';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <ChronosLogo size={36} />
              <div>
                <p className="font-heading text-sm font-bold text-foreground tracking-wide">KEENGEO</p>
                <p className="text-[9px] text-primary font-body tracking-[0.15em]">TECHNICAL W.A NIG. LTD</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Delivering excellence in electrical engineering, civil construction, and renewable energy since 1990.
            </p>
            <div className="flex items-center gap-2 mt-4 px-3 py-2 bg-secondary/50 rounded-md w-fit">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs font-body font-semibold text-primary">33+ Years in Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-6 tracking-wide">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Partnerships', path: '/partnerships' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-6 tracking-wide">Services</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <p>Power & Electrification</p>
              <p>Water Infrastructure</p>
              <p>Renewable Energy</p>
              <p>Civil Engineering</p>
              <p>General Contracts</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-6 tracking-wide">Head Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">Kaduna, Nigeria</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">+234 (0) 803 000 0000</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">info@keengeo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Keengeo Technical W.A Nig. Ltd. RC. No. 284018. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-body italic">
            "Great ideas are like diamonds and are forever"
          </p>
        </div>
      </div>
    </footer>
  );
}