import { useState, useCallback } from 'react';
import type { ManifestationCard } from '@/data/manifestationCards';

interface GeneratedCard {
  card: ManifestationCard;
  imageUrl: string | null;
}

const palettes: Record<string, string> = {
  fire: "warm terracotta, burnt orange, deep red, golden ochre, cream background",
  water: "teal, soft blue, coral red accents, off-white background",
  earth: "sage green, mossy olive, dusty rose, muted cream background",
  air: "dusty lavender, soft violet, pale gold, parchment background",
  spirit: "muted indigo, antique gold, terracotta accents, cream background",
};

export function useTarotCardGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCard, setGeneratedCard] = useState<GeneratedCard | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateCard = useCallback(async (card: ManifestationCard) => {
    setIsGenerating(true);
    setError(null);

    try {
      const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
      if (!GOOGLE_API_KEY) throw new Error("Google API key not configured");

      const palette = palettes[card.element] || palettes.spirit;
      const prompt = `A vintage hand-drawn tarot card illustration, vertical 3:4 portrait composition, full-bleed artwork that fills the entire frame. The card features an expressive, charming cat as the central character — stylized in a vintage woodcut / linocut / Art Nouveau storybook style with bold black inked outlines, hand-textured shading, slight paper grain, and subtly aged edges. The cat embodies the concept of "${card.title}" through its pose, expression, and the symbolic objects around it (props, plants, herbs, flowers, celestial elements relevant to "${card.title}").

Surround the scene with an ornate decorative border featuring botanical and mystical motifs (vines, flowers, sacred geometry, small symbols). At the bottom of the card, integrate a horizontal scroll/banner ribbon containing ONLY the single word "${card.title.toUpperCase()}" in bold vintage serif typography (clean, large, perfectly spelled — no extra letters, no typos, no other words anywhere on the card).

Color palette: ${palette}. Slightly desaturated, vintage printed look with risograph / screen-print texture. NO modern UI elements, NO photographs, NO digital gradients — pure hand-illustrated tarot art. The composition should feel like a single complete antique tarot card you could hold in your hand. Ultra detailed, high resolution, centered composition.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
          }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`API error ${response.status}: ${text}`);
      }

      const data = await response.json();
      const imagePart = data.candidates?.[0]?.content?.parts?.find(
        (p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData
      );

      if (!imagePart?.inlineData) throw new Error("No image in response");

      const { mimeType, data: base64Data } = imagePart.inlineData;
      setGeneratedCard({ card, imageUrl: `data:${mimeType};base64,${base64Data}` });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to generate card';
      setError(msg);
      setGeneratedCard({ card, imageUrl: null });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const reset = useCallback(() => {
    setGeneratedCard(null);
    setError(null);
  }, []);

  return { isGenerating, generatedCard, error, generateCard, reset };
}
