import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return <section className="relative overflow-hidden bg-gradient-celestial min-h-[90vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-gold/60 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8]
      }} transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-celestial/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left my-[16px]">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Begin Your Manifestation Journey</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary-foreground leading-tight mb-6">
              Manifest Your
              <span className="block text-gradient-gold">Dreams Into Reality</span>
            </h1>

            <p className="text-lg text-primary-foreground/95 mb-8 max-w-xl mx-auto lg:mx-0 font-body">
              Curated spiritual tools, crystals, and manifestation essentials to align your energy 
              with your deepest desires. Welcome to your transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl" asChild>
                <Link to="/shop" className="gap-2">
                  Shop the Collection
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/daily-card">
                  Draw Your Daily Card
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }} className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <span className="text-primary-foreground/90 text-sm">
                500+ Happy Manifestors
              </span>
            </motion.div>
          </motion.div>

          {/* Featured Product - Starter Pack */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative bg-gradient-card rounded-3xl p-5 lg:p-6 shadow-mystical">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gold text-gold-foreground text-sm font-semibold flex items-center gap-2 shadow-lg whitespace-nowrap z-10">
                <Star className="h-4 w-4 fill-current" />
                Best Seller
              </div>

              {/* Product Image */}
              <div className="h-40 sm:h-48 lg:h-56 xl:h-64 rounded-2xl bg-secondary mt-4 mb-3 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-celestial/20 to-gold/20">
                  <Sparkles className="h-12 w-12 lg:h-16 lg:w-16 text-gold/50" />
                </div>
              </div>

              <h3 className="font-display text-lg lg:text-xl font-medium text-center mb-1">
                Manifestation Starter Pack
              </h3>
              <p className="text-muted-foreground text-center text-xs mb-2 leading-snug">
                Everything you need to begin: Crystal, Sage, Palo Santo, Vase & Cat Tarot Cards
              </p>

              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-xl font-bold text-foreground">£12</span>
                <span className="text-base text-muted-foreground line-through">£18</span>
                <span className="px-2 py-1 rounded-full bg-sage/20 text-sage text-xs font-medium">
                  Save 33%
                </span>
              </div>

              <Button variant="gold" size="lg" className="w-full" asChild>
                <Link to="/product/starter-pack">
                  View Bundle
                </Link>
              </Button>
            </div>

            {/* Floating Elements */}
            <motion.div animate={{
            y: [-5, 5, -5]
          }} transition={{
            duration: 4,
            repeat: Infinity
          }} className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gold/20 blur-xl" />
            <motion.div animate={{
            y: [5, -5, 5]
          }} transition={{
            duration: 5,
            repeat: Infinity
          }} className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-celestial/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>;
}