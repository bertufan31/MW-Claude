import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RotateCcw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getRandomCard, type ManifestationCard } from '@/data/manifestationCards';
import { useTarotCardGenerator } from '@/hooks/useTarotCardGenerator';
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
  const [hasDrawn, setHasDrawn] = useState(false);
  const { isGenerating, generatedCard, generateCard, reset } = useTarotCardGenerator();

  const drawCard = async () => {
    const card = getRandomCard();
    setHasDrawn(true);
    await generateCard(card);
  };

  const handleShare = async () => {
    if (!generatedCard?.card) return;
    
    const shareText = `✨ My Daily Manifestation Card: ${generatedCard.card.title}\n\nCategory: ${generatedCard.card.category}\n\n"${generatedCard.card.message}"\n\nDraw your card at Manifesting Works!`;
    
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

  const handleReset = () => {
    setHasDrawn(false);
    reset();
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
              AI-Powered Daily Guidance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
              Draw Your Daily Manifestation Card
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Each card features a unique AI-generated tarot-style cat illustration 
              with your personalized manifestation message.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="perspective-1000 w-72 h-[420px]">
              <AnimatePresence mode="wait">
                {!hasDrawn ? (
                  // Card Back - Ready to Draw
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                        Your AI-generated guidance awaits
                      </p>

                      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors" />
                    </div>
                  </motion.div>
                ) : isGenerating ? (
                  // Loading State
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotateY: -180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <div className="w-full h-full rounded-2xl bg-gradient-mystical shadow-mystical flex flex-col items-center justify-center text-white">
                      <Loader2 className="h-12 w-12 animate-spin mb-4 text-gold" />
                      <p className="font-display text-lg">Creating your card...</p>
                      <p className="text-sm opacity-70 mt-2">AI is painting your mystical cat</p>
                    </div>
                  </motion.div>
                ) : generatedCard?.card ? (
                  // Card Front - Revealed
                  <motion.div
                    key="front"
                    initial={{ opacity: 0, rotateY: -180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <div className="w-full h-full rounded-2xl shadow-mystical overflow-hidden relative bg-card">
                      {/* AI Generated Image */}
                      {generatedCard.imageUrl ? (
                        <div className="h-1/2 w-full relative">
                          <img 
                            src={generatedCard.imageUrl} 
                            alt={`Tarot card: ${generatedCard.card.title}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 text-2xl bg-black/30 rounded-full w-10 h-10 flex items-center justify-center">
                            {elementIcons[generatedCard.card.element]}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                            <span className="text-xs font-medium text-white/80 bg-white/20 px-2 py-1 rounded-full">
                              {generatedCard.card.category}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className={`h-1/2 w-full bg-gradient-to-br ${elementColors[generatedCard.card.element]} flex items-center justify-center relative`}>
                          <div className="absolute top-2 right-2 text-2xl">
                            {elementIcons[generatedCard.card.element]}
                          </div>
                          <div className="text-center text-white">
                            <Sparkles className="h-12 w-12 mx-auto mb-2" />
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                              {generatedCard.card.category}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="h-1/2 p-4 flex flex-col justify-center text-center">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {generatedCard.card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          "{generatedCard.card.message}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          {/* Actions */}
          {hasDrawn && !isGenerating && generatedCard?.card && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Button
                variant="outline"
                onClick={handleReset}
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
              View all 93 cards in the collection →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
