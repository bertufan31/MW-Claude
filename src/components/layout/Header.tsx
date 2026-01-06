import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import logo from '@/assets/logo.svg';

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Daily Card', href: '/daily-card' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Manifesting Works" className="h-10 w-auto lg:h-12 transition-transform group-hover:scale-105" />
            <span className="font-display text-xl lg:text-2xl font-semibold text-foreground hidden sm:block">
              Manifesting Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body text-sm font-medium transition-colors relative py-2 ${
                  location.pathname === item.href
                    ? 'text-gold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Etsy Link - Desktop only */}
            <a
              href="https://etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Etsy
            </a>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link 
                  to="/" 
                  className="flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src={logo} alt="Manifesting Works" className="h-10 w-auto" />
                  <span className="font-display text-xl font-semibold">Manifesting Works</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block font-body text-lg font-medium py-2 transition-colors ${
                        location.pathname === item.href
                          ? 'text-gold'
                          : 'text-foreground hover:text-gold'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href="https://etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Shop on Etsy</span>
                  </a>
                  <div className="flex gap-4 mt-6">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
