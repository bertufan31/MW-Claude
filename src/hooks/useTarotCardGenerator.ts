import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { ManifestationCard } from '@/data/manifestationCards';

interface GeneratedCard {
  card: ManifestationCard;
  imageUrl: string | null;
}

export function useTarotCardGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCard, setGeneratedCard] = useState<GeneratedCard | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateCard = useCallback(async (card: ManifestationCard) => {
    setIsGenerating(true);
    setError(null);

    try {
      console.log('Generating tarot card for:', card.title);

      const { data, error: fnError } = await supabase.functions.invoke('generate-tarot-card', {
        body: {
          title: card.title,
          category: card.category,
          element: card.element,
        },
      });

      if (fnError) {
        console.error('Function error:', fnError);
        throw new Error(fnError.message || 'Failed to generate card');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      console.log('Card generated successfully');
      
      setGeneratedCard({
        card,
        imageUrl: data?.imageUrl || null,
      });
    } catch (err) {
      console.error('Error generating card:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate card');
      // Still set the card but without image
      setGeneratedCard({
        card,
        imageUrl: null,
      });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const reset = useCallback(() => {
    setGeneratedCard(null);
    setError(null);
  }, []);

  return {
    isGenerating,
    generatedCard,
    error,
    generateCard,
    reset,
  };
}
