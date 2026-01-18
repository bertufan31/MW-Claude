// Daily manifestation cards data with comprehensive manifestation vocabulary
export interface ManifestationCard {
  id: number;
  title: string;
  category: string;
  message: string;
  element: 'fire' | 'water' | 'earth' | 'air' | 'spirit';
}

// Categories for the cards
export const categories = {
  core: 'Core Manifestation',
  affirmation: 'Affirmation Language',
  intention: 'Intention Setting',
  emotion: 'Emotional Frequency',
  energy: 'Energy & Vibration',
  abundance: 'Abundance & Prosperity',
  selfWorth: 'Self-Worth & Identity',
  action: 'Action & Embodiment',
  release: 'Release & Letting Go',
  trust: 'Time & Trust',
  spiritual: 'Spiritual Wisdom',
  power: 'Power Affirmations',
};

export const manifestationCards: ManifestationCard[] = [
  // Core Manifestation Terms
  { id: 1, title: 'Manifestation', category: categories.core, message: 'Your thoughts shape your reality—what you envision, you create.', element: 'spirit' },
  { id: 2, title: 'Intention', category: categories.core, message: 'Set your intention clearly and watch the universe conspire in your favor.', element: 'air' },
  { id: 3, title: 'Alignment', category: categories.core, message: 'When your thoughts, feelings, and actions align, magic happens.', element: 'spirit' },
  { id: 4, title: 'Awareness', category: categories.core, message: 'Consciousness is the first step to transformation.', element: 'air' },
  { id: 5, title: 'Conscious Creation', category: categories.core, message: 'You are the architect of your destiny—build wisely.', element: 'fire' },
  { id: 6, title: 'Co-Creation', category: categories.core, message: 'Partner with the universe; together you manifest miracles.', element: 'spirit' },
  { id: 7, title: 'Attraction', category: categories.core, message: 'Like attracts like—become what you wish to receive.', element: 'water' },
  { id: 8, title: 'Allowing', category: categories.core, message: 'Stop pushing; start allowing your good to flow to you.', element: 'water' },
  { id: 9, title: 'Flow', category: categories.core, message: 'Life moves in cycles—trust the current carrying you forward.', element: 'water' },
  { id: 10, title: 'Presence', category: categories.core, message: 'The power to manifest lives only in this present moment.', element: 'earth' },

  // Affirmation Language
  { id: 11, title: 'Affirmation', category: categories.affirmation, message: 'Your words are spells—speak your dreams into existence.', element: 'air' },
  { id: 12, title: 'Declaration', category: categories.affirmation, message: 'Declare your truth boldly and watch reality shift.', element: 'fire' },
  { id: 13, title: 'Self-Belief', category: categories.affirmation, message: 'Believe in yourself first; the world will follow.', element: 'fire' },
  { id: 14, title: 'Inner Dialogue', category: categories.affirmation, message: 'Transform your inner critic into your biggest cheerleader.', element: 'air' },
  { id: 15, title: 'Reprogramming', category: categories.affirmation, message: 'Rewrite the old stories that no longer serve your highest good.', element: 'spirit' },
  { id: 16, title: 'Identity Shift', category: categories.affirmation, message: 'Become the version of you who already has what you desire.', element: 'spirit' },
  { id: 17, title: 'Self-Concept', category: categories.affirmation, message: 'How you see yourself determines what you attract.', element: 'water' },

  // Intention Setting
  { id: 18, title: 'Focus', category: categories.intention, message: 'Where attention goes, energy flows.', element: 'fire' },
  { id: 19, title: 'Clarity', category: categories.intention, message: 'Get crystal clear on what you want; the universe loves specificity.', element: 'air' },
  { id: 20, title: 'Direction', category: categories.intention, message: 'Know where you are going and every step becomes purposeful.', element: 'earth' },
  { id: 21, title: 'Desire', category: categories.intention, message: 'Your desires are sacred clues to your purpose.', element: 'fire' },
  { id: 22, title: 'Purpose', category: categories.intention, message: 'Live aligned with your why and watch everything fall into place.', element: 'spirit' },
  { id: 23, title: 'Vision', category: categories.intention, message: 'See it clearly in your mind and you will hold it in your hands.', element: 'air' },
  { id: 24, title: 'Choice', category: categories.intention, message: 'Every choice is a vote for the life you want to live.', element: 'earth' },

  // Emotional Frequency
  { id: 25, title: 'Gratitude', category: categories.emotion, message: 'Gratitude multiplies blessings—count them and watch them grow.', element: 'earth' },
  { id: 26, title: 'Trust', category: categories.emotion, message: 'Trust that everything is working out for your highest good.', element: 'water' },
  { id: 27, title: 'Faith', category: categories.emotion, message: 'Faith is believing in what you cannot yet see.', element: 'spirit' },
  { id: 28, title: 'Confidence', category: categories.emotion, message: 'Step forward with the knowing that you are capable of anything.', element: 'fire' },
  { id: 29, title: 'Calm', category: categories.emotion, message: 'In stillness, you access your greatest power.', element: 'water' },
  { id: 30, title: 'Certainty', category: categories.emotion, message: 'Feel the certainty of your manifestation as if it has already happened.', element: 'earth' },
  { id: 31, title: 'Joy', category: categories.emotion, message: 'Joy is the highest frequency—let it be your compass.', element: 'fire' },
  { id: 32, title: 'Ease', category: categories.emotion, message: 'Manifestation can be effortless when you release resistance.', element: 'water' },
  { id: 33, title: 'Peace', category: categories.emotion, message: 'Inner peace is the foundation of outer abundance.', element: 'water' },
  { id: 34, title: 'Fulfilment', category: categories.emotion, message: 'True fulfilment comes from within—everything else is a bonus.', element: 'spirit' },

  // Energy & Vibration
  { id: 35, title: 'Energy', category: categories.energy, message: 'You are pure energy—direct it with intention.', element: 'fire' },
  { id: 36, title: 'Frequency', category: categories.energy, message: 'Raise your frequency to match what you desire to attract.', element: 'air' },
  { id: 37, title: 'Vibration', category: categories.energy, message: 'Everything vibrates—tune into the frequency of your dreams.', element: 'spirit' },
  { id: 38, title: 'Resonance', category: categories.energy, message: 'When you resonate with your desire, it finds its way to you.', element: 'water' },
  { id: 39, title: 'Expansion', category: categories.energy, message: 'You are meant to expand—grow beyond your comfort zone.', element: 'fire' },
  { id: 40, title: 'Magnetism', category: categories.energy, message: 'You are magnetic—what you radiate, you attract.', element: 'spirit' },
  { id: 41, title: 'Flow State', category: categories.energy, message: 'In flow, you become unstoppable and creation becomes effortless.', element: 'water' },
  { id: 42, title: 'Elevation', category: categories.energy, message: 'Rise above old patterns and claim your higher self.', element: 'air' },

  // Abundance & Prosperity
  { id: 43, title: 'Abundance', category: categories.abundance, message: 'The universe is infinitely abundant—there is more than enough for everyone.', element: 'earth' },
  { id: 44, title: 'Prosperity', category: categories.abundance, message: 'Prosperity is your birthright—claim it without guilt.', element: 'earth' },
  { id: 45, title: 'Wealth', category: categories.abundance, message: 'Wealth flows to those who believe they deserve it.', element: 'earth' },
  { id: 46, title: 'Overflow', category: categories.abundance, message: 'When your cup overflows, you have more to share.', element: 'water' },
  { id: 47, title: 'Receiving', category: categories.abundance, message: 'Open your hands and heart to receive all that is meant for you.', element: 'water' },
  { id: 48, title: 'Deserving', category: categories.abundance, message: 'You are inherently deserving of all good things.', element: 'spirit' },
  { id: 49, title: 'Worthiness', category: categories.abundance, message: 'Your worth is not earned—it simply is.', element: 'spirit' },
  { id: 50, title: 'Openness', category: categories.abundance, message: 'Stay open to receiving in unexpected ways.', element: 'air' },

  // Self-Worth & Identity
  { id: 51, title: 'Self-Respect', category: categories.selfWorth, message: 'Honor yourself and others will honor you too.', element: 'earth' },
  { id: 52, title: 'Empowerment', category: categories.selfWorth, message: 'Your power was never lost—remember who you are.', element: 'fire' },
  { id: 53, title: 'Authenticity', category: categories.selfWorth, message: 'Your authentic self is your most magnetic self.', element: 'spirit' },
  { id: 54, title: 'Sovereignty', category: categories.selfWorth, message: 'You are the ruler of your inner kingdom.', element: 'fire' },
  { id: 55, title: 'Inner Authority', category: categories.selfWorth, message: 'Trust your own wisdom above all external voices.', element: 'air' },
  { id: 56, title: 'Self-Trust', category: categories.selfWorth, message: 'You have everything you need within you.', element: 'earth' },
  { id: 57, title: 'Belonging', category: categories.selfWorth, message: 'You belong here—the universe made space just for you.', element: 'earth' },

  // Action & Embodiment
  { id: 58, title: 'Embody', category: categories.action, message: 'Feel it in your body—embodiment bridges dreams to reality.', element: 'earth' },
  { id: 59, title: 'Commit', category: categories.action, message: 'Commitment activates the forces of the universe.', element: 'fire' },
  { id: 60, title: 'Practice', category: categories.action, message: 'Daily practice turns possibilities into probabilities.', element: 'earth' },
  { id: 61, title: 'Integrate', category: categories.action, message: 'Integration transforms knowledge into lasting change.', element: 'spirit' },
  { id: 62, title: 'Decide', category: categories.action, message: 'Decision is the starting point of all transformation.', element: 'fire' },
  { id: 63, title: 'Move', category: categories.action, message: 'Movement creates momentum—take the first step today.', element: 'fire' },
  { id: 64, title: 'Anchor', category: categories.action, message: 'Anchor your intentions in daily rituals and habits.', element: 'earth' },
  { id: 65, title: 'Live', category: categories.action, message: 'Live as if your dream is already your reality.', element: 'spirit' },

  // Release & Letting Go
  { id: 66, title: 'Release', category: categories.release, message: 'Let go of what no longer serves you.', element: 'air' },
  { id: 67, title: 'Surrender', category: categories.release, message: 'Surrender the how and trust the process.', element: 'water' },
  { id: 68, title: 'Detach', category: categories.release, message: 'Detachment is not giving up—it is trusting more deeply.', element: 'air' },
  { id: 69, title: 'Let Go', category: categories.release, message: 'What you release creates space for what you desire.', element: 'air' },
  { id: 70, title: 'Forgive', category: categories.release, message: 'Forgiveness frees you to receive your blessings.', element: 'water' },
  { id: 71, title: 'Cleanse', category: categories.release, message: 'Clear the old energy to welcome the new.', element: 'water' },
  { id: 72, title: 'Dissolve', category: categories.release, message: 'Watch old limitations dissolve in the light of awareness.', element: 'spirit' },
  { id: 73, title: 'Reset', category: categories.release, message: 'Every moment offers a fresh start—press reset now.', element: 'air' },

  // Time & Trust
  { id: 74, title: 'Divine Timing', category: categories.trust, message: 'Everything arrives at the perfect moment—trust the timing.', element: 'spirit' },
  { id: 75, title: 'Patience', category: categories.trust, message: 'Patience is trusting that seeds planted will bloom.', element: 'earth' },
  { id: 76, title: 'Unfolding', category: categories.trust, message: 'Your life is unfolding exactly as it should.', element: 'water' },
  { id: 77, title: 'Process', category: categories.trust, message: 'Trust the process even when you cannot see the path.', element: 'earth' },
  { id: 78, title: 'Becoming', category: categories.trust, message: 'You are always becoming—embrace the journey.', element: 'spirit' },
  { id: 79, title: 'Evolution', category: categories.trust, message: 'Evolution is constant—allow yourself to grow.', element: 'spirit' },
  { id: 80, title: 'Journey', category: categories.trust, message: 'The journey is as sacred as the destination.', element: 'earth' },

  // Spiritual / Higher-Self Language
  { id: 81, title: 'Higher Self', category: categories.spiritual, message: 'Connect with the wisest version of you—your Higher Self.', element: 'spirit' },
  { id: 82, title: 'Inner Wisdom', category: categories.spiritual, message: 'Your inner wisdom knows the way—listen closely.', element: 'spirit' },
  { id: 83, title: 'Intuition', category: categories.spiritual, message: 'Your intuition is your soul speaking—honor it.', element: 'water' },
  { id: 84, title: 'Guidance', category: categories.spiritual, message: 'You are always guided—signs are everywhere.', element: 'air' },
  { id: 85, title: 'Source', category: categories.spiritual, message: 'You are connected to infinite Source energy.', element: 'spirit' },
  { id: 86, title: 'Universal Support', category: categories.spiritual, message: 'The entire universe is supporting your dreams.', element: 'spirit' },
  { id: 87, title: 'Inner Knowing', category: categories.spiritual, message: 'Deep within, you already know the truth.', element: 'spirit' },

  // Power Affirmations (I Am statements)
  { id: 88, title: 'I Am', category: categories.power, message: 'These two words shape your reality—choose them wisely.', element: 'spirit' },
  { id: 89, title: 'I Choose', category: categories.power, message: 'Every choice is a declaration of who you are becoming.', element: 'fire' },
  { id: 90, title: 'I Allow', category: categories.power, message: 'Allow good things to flow effortlessly into your life.', element: 'water' },
  { id: 91, title: 'I Receive', category: categories.power, message: 'Receiving is an act of self-love—welcome your blessings.', element: 'water' },
  { id: 92, title: 'I Create', category: categories.power, message: 'You are the creator of your experience.', element: 'fire' },
  { id: 93, title: 'I Welcome', category: categories.power, message: 'Welcome abundance, love, and miracles into your life.', element: 'air' },
];

export const getRandomCard = (): ManifestationCard => {
  const randomIndex = Math.floor(Math.random() * manifestationCards.length);
  return manifestationCards[randomIndex];
};

export const getCardById = (id: number): ManifestationCard | undefined => {
  return manifestationCards.find(card => card.id === id);
};

export const getCardsByElement = (element: ManifestationCard['element']): ManifestationCard[] => {
  return manifestationCards.filter(card => card.element === element);
};

export const getCardsByCategory = (category: string): ManifestationCard[] => {
  return manifestationCards.filter(card => card.category === category);
};
