import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
const navigation = [{
  name: 'Shop',
  href: '/shop'
}, {
  name: 'Daily Card',
  href: '/daily-card'
}, {
  name: 'Blog',
  href: '/blog'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Contact',
  href: '/contact'
}];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    toggleCart,
    totalItems
  } = useCart();
  const location = useLocation();
  return <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left - Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 flex-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`font-body text-sm font-semibold transition-colors relative py-2 ${location.pathname === item.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}>
                {item.name}
                {location.pathname === item.href && <motion.div layoutId="activeNav" className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary" />}
              </Link>)}
          </div>

          {/* Mobile menu button - Left on mobile */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>

          {/* Center - Logo */}
          <Link to="/" className="flex items-center justify-center group absolute left-1/2 -translate-x-1/2 max-w-[55%] lg:max-w-none">
            <span className="relative lg:text-2xl text-foreground transition-transform group-hover:scale-105 font-serif font-bold text-center text-sm sm:text-base whitespace-nowrap">
              Manifesting Works
              <motion.span
                className="absolute inset-0 text-gradient-gold"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  times: [0, 0.6, 0.75, 0.88, 1],
                  ease: 'easeInOut',
                }}
              >
                Manifesting Works
              </motion.span>
            </span>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Etsy Link - Desktop only */}
            <a href="https://etsy.com" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors">
              <ExternalLink className="h-4 w-4" />
              Etsy
            </a>

            {/* Cart Button */}
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-background shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border bg-background">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-display text-xl font-medium italic text-foreground">Manifesting Works</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <motion.div
                className="p-6 flex-1 bg-background"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.07 } },
                }}
              >
                <div className="space-y-1">
                  {navigation.map(item => (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center min-h-[44px] font-body text-lg font-medium py-3 transition-colors ${location.pathname === item.href ? 'text-gold' : 'text-foreground hover:text-gold'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-8 pt-8 border-t border-border"
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                  }}
                >
                  <a href="https://etsy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="h-5 w-5" />
                    <span>Shop on Etsy</span>
                  </a>
                  <div className="flex gap-4 mt-6">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>}
      </AnimatePresence>
    </header>;
}