import { motion } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-celestial relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Sparkles className="h-10 w-10 text-gold mx-auto mb-6" />
          
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-primary-foreground mb-4">
            Join the Manifestation Circle
          </h2>
          
          <p className="text-primary-foreground/95 mb-8">
            Receive weekly manifestation tips, exclusive offers, new moon rituals, 
            and be the first to know about new products.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/75 focus:outline-none focus:border-gold font-body"
              />
              <Button type="submit" variant="gold" size="lg" className="gap-2">
                Subscribe
                <Send className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold/20 text-gold"
            >
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Welcome to the circle! Check your inbox.</span>
            </motion.div>
          )}

          <p className="text-sm text-primary-foreground/85 mt-4">
            No spam, just magic. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
