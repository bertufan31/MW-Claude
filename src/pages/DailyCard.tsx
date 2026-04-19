import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RefreshCw, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getRandomCard } from '@/data/manifestationCards';
import { useTarotCardGenerator } from '@/hooks/useTarotCardGenerator';

export default function DailyCard() {
  const { isGenerating, generatedCard, generateCard, reset } = useTarotCardGenerator();
  const [hasDrawn, setHasDrawn] = useState(false);

  const drawCard = async () => {
    setHasDrawn(true);
    const card = getRandomCard();
    await generateCard(card);
  };

  const shareCard = () => {
    if (!generatedCard?.card) return;
    const shareText = `✨ My Daily Manifestation Card: ${generatedCard.card.title}\n\n"${generatedCard.card.message}"\n\nDraw your card at Manifesting Works!`;
    if (navigator.share) {
      navigator.share({ title: 'My Daily Manifestation Card', text: shareText, url: window.location.href });
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  const handleReset = () => {
    setHasDrawn(false);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-olive text-peach text-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Sparkles className="h-12 w-12 text-lavender mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                AI Daily Manifestation Card
              </h1>
              <p className="font-body text-peach/80 max-w-xl mx-auto text-lg">
                Each card features a unique AI-generated tarot-style cat illustration. Draw your card to receive mystical guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Card Drawing Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              {/* Card area */}
              <div className="w-full max-w-sm">
                <AnimatePresence mode="wait">
                  {!hasDrawn ? (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="cursor-pointer group rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.55)] transition-shadow duration-300 relative"
                      onClick={drawCard}
                    >
                      <video
                        src={`${import.meta.env.BASE_URL}zoltar-cat-loop.mp4`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto block"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </motion.div>
                  ) : isGenerating ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full aspect-[3/4] rounded-2xl bg-gradient-mystical shadow-mystical flex flex-col items-center justify-center text-primary-foreground"
                    >
                      <Loader2 className="h-12 w-12 animate-spin mb-4 text-gold" />
                      <p className="font-display text-lg">Painting your card...</p>
                      <p className="text-sm text-primary-foreground/80 mt-2">This takes ~10 seconds</p>
                    </motion.div>
                  ) : generatedCard?.card ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full aspect-[3/4] rounded-2xl shadow-mystical overflow-hidden bg-card"
                    >
                      {generatedCard.imageUrl ? (
                        <img
                          src={generatedCard.imageUrl}
                          alt={`Tarot card: ${generatedCard.card.title}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-mystical text-primary-foreground">
                          <Sparkles className="h-12 w-12 mb-3 text-gold" />
                          <h3 className="font-display text-3xl font-bold">{generatedCard.card.title}</h3>
                          <p className="text-sm mt-2 opacity-80">Image unavailable</p>
                        </div>
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              {/* Description below card */}
              {hasDrawn && !isGenerating && generatedCard?.card && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 max-w-md text-center"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {generatedCard.card.category}
                  </p>
                  <p className="font-display text-xl text-foreground leading-relaxed">
                    "{generatedCard.card.message}"
                  </p>
                </motion.div>
              )}

              {/* Actions */}
              {hasDrawn && !isGenerating && generatedCard?.card && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4 mt-8"
                >
                  <Button variant="outline" onClick={handleReset} className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Draw Again
                  </Button>
                  <Button variant="secondary" onClick={shareCard} className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
