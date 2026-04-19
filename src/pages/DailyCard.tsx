import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RefreshCw, ShoppingBag, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getRandomCard, manifestationCards, categories } from '@/data/manifestationCards';
import { useTarotCardGenerator } from '@/hooks/useTarotCardGenerator';

// Element colors for card backgrounds
const elementColors = {
  fire: 'from-orange-400 to-red-500',
  water: 'from-blue-400 to-cyan-500',
  earth: 'from-amber-400 to-yellow-600',
  air: 'from-sky-300 to-indigo-400',
  spirit: 'from-lavender to-purple-500',
};

const elementIcons = {
  fire: '🔥',
  water: '💧',
  earth: '🌍',
  air: '💨',
  spirit: '✨',
};

export default function DailyCard() {
  const { isGenerating, generatedCard, generateCard, reset } = useTarotCardGenerator();
  const [hasDrawn, setHasDrawn] = useState(false);

  const drawCard = async () => {
    setHasDrawn(true);
    const card = getRandomCard();
    await generateCard(card);
  };

  const shareCard = () => {
    if (generatedCard?.card && navigator.share) {
      navigator.share({
        title: generatedCard.card.title,
        text: `${generatedCard.card.message} - Manifesting Works`,
        url: window.location.href,
      });
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
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
              <div className="relative w-80 h-[480px] perspective-1000 mb-8">
                <AnimatePresence mode="wait">
                  {!hasDrawn ? (
                    <motion.div
                      key="back"
                      initial={{ rotateY: 0 }}
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
                            Your AI-generated guidance awaits
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : isGenerating ? (
                    <motion.div
                      key="loading"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-lavender to-primary rounded-2xl flex flex-col items-center justify-center shadow-xl">
                        <Loader2 className="h-16 w-16 text-olive animate-spin mb-4" />
                        <p className="font-display text-olive text-xl">Creating your card...</p>
                        <p className="font-body text-olive/70 mt-2">AI is painting your mystical cat</p>
                      </div>
                    </motion.div>
                  ) : generatedCard?.card ? (
                    <motion.div
                      key="front"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-xl">
                        {/* AI Generated Image or Fallback */}
                        {generatedCard.imageUrl ? (
                          <div className="h-1/2 relative">
                            <img
                              src={generatedCard.imageUrl}
                              alt={`Tarot card: ${generatedCard.card.title}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3 text-2xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center">
                              {elementIcons[generatedCard.card.element]}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <span className="text-xs font-medium text-white bg-white/20 px-3 py-1 rounded-full">
                                {generatedCard.card.category}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className={`h-1/2 bg-gradient-to-br ${elementColors[generatedCard.card.element]} flex items-center justify-center relative`}>
                            <div className="absolute top-3 right-3 text-2xl">
                              {elementIcons[generatedCard.card.element]}
                            </div>
                            <div className="text-center text-white">
                              <Sparkles className="h-12 w-12 mx-auto mb-2" />
                              <p className="font-body text-sm uppercase tracking-wider">{generatedCard.card.element}</p>
                              <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2 inline-block">
                                {generatedCard.card.category}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6 text-center h-1/2 flex flex-col justify-center">
                          <h2 className="font-display text-foreground text-2xl font-bold mb-3">
                            {generatedCard.card.title}
                          </h2>
                          <p className="font-body text-muted-foreground text-sm leading-relaxed">
                            "{generatedCard.card.message}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="flex gap-4">
                {hasDrawn && !isGenerating && generatedCard?.card && (
                  <>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={handleReset}
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
                Explore all 93 manifestation cards organized by category. Each card offers unique guidance for your journey.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.values(categories).map((cat) => (
                <span key={cat} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {manifestationCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-card">
                    <div className={`w-full aspect-[2/3] bg-gradient-to-br ${elementColors[card.element]} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative`}>
                      <div className="absolute top-2 right-2 text-lg">
                        {elementIcons[card.element]}
                      </div>
                      <div className="text-center text-white p-4">
                        <Sparkles className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-display font-bold text-sm">{card.title}</p>
                        <span className="text-xs opacity-70 mt-1 block">{card.category}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-olive/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="text-center">
                        <p className="font-display text-peach font-bold mb-2 text-lg">{card.title}</p>
                        <p className="font-body text-lavender text-xs italic">"{card.message}"</p>
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
