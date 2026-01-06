import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RefreshCw, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getRandomCard, manifestationCards, ManifestationCard } from '@/data/manifestationCards';

// Element colors for card backgrounds
const elementColors = {
  fire: 'from-orange-400 to-red-500',
  water: 'from-blue-400 to-cyan-500',
  earth: 'from-amber-400 to-yellow-600',
  air: 'from-sky-300 to-indigo-400',
  spirit: 'from-lavender to-purple-500',
};

export default function DailyCard() {
  const [drawnCard, setDrawnCard] = useState<ManifestationCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setDrawnCard(getRandomCard());
      setIsFlipping(false);
    }, 600);
  };

  const shareCard = () => {
    if (drawnCard && navigator.share) {
      navigator.share({
        title: drawnCard.title,
        text: `${drawnCard.affirmation} - Manifesting Works`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-olive text-peach text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-12 w-12 text-lavender mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Daily Manifestation Card
              </h1>
              <p className="font-body text-peach/80 max-w-xl mx-auto text-lg">
                Let the universe guide you. Draw a card to receive your daily manifestation message and affirmation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Card Drawing Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="relative w-72 h-[432px] perspective-1000 mb-8">
                <AnimatePresence mode="wait">
                  {!drawnCard ? (
                    <motion.div
                      key="back"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: isFlipping ? 180 : 0 }}
                      exit={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 cursor-pointer"
                      onClick={drawCard}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-lavender to-primary rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow animate-glow-pulse">
                        <div className="text-center p-8">
                          <Sparkles className="h-20 w-20 text-olive mx-auto mb-6" />
                          <p className="font-display text-olive text-2xl font-bold">
                            Tap to Draw
                          </p>
                          <p className="font-body text-olive/70 mt-2">
                            Your daily guidance awaits
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="front"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-xl">
                        <div className={`h-2/5 bg-gradient-to-br ${elementColors[drawnCard.element]} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <Sparkles className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-body text-sm uppercase tracking-wider">{drawnCard.element}</p>
                            <p className="font-display text-lg mt-1">{drawnCard.catName}</p>
                          </div>
                        </div>
                        <div className="p-6 text-center h-3/5 flex flex-col justify-center">
                          <h2 className="font-display text-foreground text-xl font-bold mb-3">
                            {drawnCard.title}
                          </h2>
                          <p className="font-body text-muted-foreground text-sm mb-4">
                            {drawnCard.message}
                          </p>
                          <p className="font-display text-lavender text-base italic">
                            "{drawnCard.affirmation}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex gap-4">
                {drawnCard && (
                  <>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={drawCard}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Draw Again
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={shareCard}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Card Collection */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Card Collection
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Explore all the manifestation cards in our deck. Own the physical deck to enhance your daily practice.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {manifestationCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-card">
                    <div className={`w-full aspect-[2/3] bg-gradient-to-br ${elementColors[card.element]} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      <div className="text-center text-white p-4">
                        <Sparkles className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-display font-bold text-lg">{card.catName}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-olive/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="text-center">
                        <p className="font-display text-peach font-bold mb-2">{card.title}</p>
                        <p className="font-body text-lavender text-sm italic">"{card.affirmation}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/product/manifesting-cards">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Get the Full Deck
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
