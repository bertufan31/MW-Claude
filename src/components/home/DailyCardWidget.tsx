import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RotateCcw, Loader2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getRandomCard } from '@/data/manifestationCards';
import { useTarotCardGenerator } from '@/hooks/useTarotCardGenerator';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

export default function DailyCardWidget() {
  const [hasDrawn, setHasDrawn] = useState(false);
  const { isGenerating, generatedCard, generateCard, reset } = useTarotCardGenerator();

  const drawCard = async () => {
    const card = getRandomCard();
    setHasDrawn(true);
    await generateCard(card);
  };

  const handleDownload = async () => {
    if (!generatedCard?.imageUrl || !generatedCard.card) return;
    try {
      const res = await fetch(generatedCard.imageUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `manifestation-${generatedCard.card.title.toLowerCase().replace(/\s+/g, '-')}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({ title: 'Downloaded', description: 'Your card has been saved.' });
    } catch {
      toast({ title: 'Download failed', description: 'Please try again.', variant: 'destructive' });
    }
  };

  const handleShare = async () => {
    if (!generatedCard?.card) return;
    const shareText = `✨ My Daily Manifestation Card: ${generatedCard.card.title}\n\n"${generatedCard.card.message}"\n\nDraw your card at Manifesting Works!`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Daily Manifestation Card', text: shareText });
      } catch { /* cancelled */ }
    } else {
      navigator.clipboard.writeText(shareText);
      toast({ title: 'Copied', description: 'Card message copied to clipboard.' });
    }
  };

  const handleReset = () => {
    setHasDrawn(false);
    reset();
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
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
              A unique vintage tarot-style cat illustration, generated just for you.
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Card area — 3:4 portrait */}
            <div className="w-full max-w-sm aspect-[3/4]">
              <AnimatePresence mode="wait">
                {!hasDrawn ? (
                  <motion.button
                    key="back"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={drawCard}
                    className="w-full h-full rounded-2xl bg-gradient-mystical shadow-mystical p-6 flex flex-col items-center justify-center text-primary-foreground relative overflow-hidden group"
                    aria-label="Draw your daily manifestation card"
                  >
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <Sparkles className="h-16 w-16 mb-6 text-gold" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-medium mb-2 relative z-10">Tap to Draw</h3>
                    <p className="text-sm text-primary-foreground/80 relative z-10">
                      Your AI-generated guidance awaits
                    </p>
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors" />
                  </motion.button>
                ) : isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full rounded-2xl bg-gradient-mystical shadow-mystical flex flex-col items-center justify-center text-primary-foreground"
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
                    className="w-full h-full rounded-2xl shadow-mystical overflow-hidden bg-card"
                  >
                    {generatedCard.imageUrl ? (
                      <img
                        src={generatedCard.imageUrl}
                        alt={`Tarot card: ${generatedCard.card.title}`}
                        className="w-full h-full object-cover"
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

            {/* Description under the card */}
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
          </div>

          {/* Actions */}
          {hasDrawn && !isGenerating && generatedCard?.card && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              <Button variant="outline" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Draw Again
              </Button>
              {generatedCard.imageUrl && (
                <Button variant="gold" onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              )}
              <Button variant="secondary" onClick={handleShare} className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
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
