import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Bundles & Sets', href: '/shop?category=bundles' },
    { name: 'Crystals', href: '/shop?category=crystals' },
    { name: 'Sage & Palo Santo', href: '/shop?category=sage' },
    { name: 'Manifesting Cards', href: '/shop?category=cards' },
  ],
  learn: [
    { name: 'Blog', href: '/blog' },
    { name: 'Manifestation Guides', href: '/blog?category=manifestation' },
    { name: 'Crystal Guides', href: '/blog?category=crystals' },
    { name: 'Daily Card', href: '/daily-card' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="h-7 w-7 text-gold" />
              <span className="font-display text-2xl font-semibold">Manifesting Works</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm font-body">
              Curated spiritual tools to help you manifest your dreams. Every product is selected with 
              intention and love by Manifest Queen.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://etsy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-medium mb-2">Join the Manifestation Community</h3>
              <p className="text-primary-foreground/70 font-body text-sm">
                Get manifestation tips, exclusive offers, and your weekly cosmic forecast.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold font-body text-sm"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-lg bg-gold text-gold-foreground font-body font-medium text-sm hover:bg-gold-glow transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-primary-foreground/60 font-body text-sm">
            © {new Date().getFullYear()} Manifesting Works. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 font-body text-sm flex items-center gap-1">
            Made with <span className="text-gold">✨</span> by Manifest Queen
          </p>
        </div>
      </div>
    </footer>
  );
}
