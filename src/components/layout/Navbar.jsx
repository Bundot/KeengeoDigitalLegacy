import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChronosLogo from './ChronosLogo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <ChronosLogo size={40} />
            <div className="hidden sm:block">
              <p className="font-heading text-sm font-bold text-foreground tracking-wide leading-tight">KEENGEO</p>
              <p className="text-[10px] text-primary font-body tracking-[0.2em]">TECHNICAL W.A NIG. LTD</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm font-semibold px-6">
                <Phone className="w-4 h-4 mr-2" />
                Request a Quote
              </Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-body font-medium rounded-md transition-colors ${
                  location.pathname === link.path ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}