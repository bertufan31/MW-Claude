import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getRandomCard, type ManifestationCard } from '@/data/manifestationCards';
import { Link } from 'react-router-dom';

const elementColors = {
  fire: 'from-orange-500 to-red-500',
  water: 'from-blue-400 to-cyan-500',
  earth: 'from-amber-600 to-yellow-700',
  air: 'from-sky-300 to-indigo-400',
  spirit: 'from-purple-500 to-pink-500',
};

const elementIcons = {
  fire: '🔥',
  water: '💧',
  earth: '🌍',
  air: '💨',
  spirit: '✨',
};

export default function DailyCardWidget() {
  const [card, setCard] = useState<ManifestationCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const drawCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCard(getRandomCard());
      setIsFlipping(false);
      setHasDrawn(true);
    }, 600);
  };

  const handleShare = async () => {
    if (!card) return;
    
    const shareText = `✨ My Daily Manifestation Card: ${card.title}\n\n"${card.affirmation}"\n\nDraw your card at Manifesting Works!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Daily Manifestation Card',
          text: shareText,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-celestial/10 text-celestial text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Daily Guidance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
              Draw Your Daily Manifestation Card
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Let the universe guide you today. Draw a card from our mystical cat tarot deck 
              and receive your daily affirmation.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="perspective-1000 w-72 h-96">
              <AnimatePresence mode="wait">
                {!hasDrawn ? (
                  // Card Back - Ready to Draw
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, rotateY: isFlipping ? 180 : 0 }}
                    exit={{ opacity: 0, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full cursor-pointer"
                    onClick={drawCard}
                  >
                    <div className="w-full h-full rounded-2xl bg-gradient-mystical shadow-mystical p-6 flex flex-col items-center justify-center text-primary-foreground relative overflow-hidden group">
                      {/* Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                      </div>

                      <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <Sparkles className="h-16 w-16 mb-6 text-gold" />
                      </motion.div>
                      
                      <h3 className="font-display text-2xl font-medium mb-2 relative z-10">
                        Tap to Draw
                      </h3>
                      <p className="text-sm text-primary-foreground/70 relative z-10">
                        Your daily guidance awaits
                      </p>

                      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors" />
                    </div>
                  </motion.div>
                ) : (
                  // Card Front - Revealed
                  <motion.div
                    key="front"
                    initial={{ opacity: 0, rotateY: -180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${card ? elementColors[card.element] : 'from-gold to-gold-glow'} shadow-mystical p-6 flex flex-col text-white relative overflow-hidden`}>
                      {/* Element Badge */}
                      <div className="absolute top-4 right-4 text-2xl">
                        {card ? elementIcons[card.element] : '✨'}
                      </div>

                      {/* Card Content */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-medium opacity-80 mb-2">
                          {card?.catName}'s Message
                        </span>
                        <h3 className="font-display text-xl font-medium mb-4">
                          {card?.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-6 leading-relaxed">
                          "{card?.message}"
                        </p>
                        <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          <p className="text-sm font-medium italic">
                            "{card?.affirmation}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Actions */}
          {hasDrawn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Button
                variant="outline"
                onClick={() => {
                  setHasDrawn(false);
                  setCard(null);
                }}
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Draw Again
              </Button>
              <Button variant="secondary" onClick={handleShare} className="gap-2">
                <Share2 className="h-4 w-4" />
                Share Card
              </Button>
              <Button variant="gold" asChild>
                <Link to="/shop?category=cards">
                  Get the Full Deck
                </Link>
              </Button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link to="/daily-card" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              View all 44 cards in the collection →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
