// Daily manifestation cards data
export interface ManifestationCard {
  id: number;
  title: string;
  message: string;
  affirmation: string;
  catName: string;
  element: 'fire' | 'water' | 'earth' | 'air' | 'spirit';
}

export const manifestationCards: ManifestationCard[] = [
  {
    id: 1,
    title: 'The Abundance Cat',
    message: 'Prosperity flows to you effortlessly. Open your arms to receive the abundance the universe has prepared for you.',
    affirmation: 'I am a magnet for abundance and prosperity.',
    catName: 'Luna',
    element: 'earth'
  },
  {
    id: 2,
    title: 'The Love Seeker',
    message: 'Love surrounds you in unexpected ways. Trust that your heart knows the way to connection and joy.',
    affirmation: 'I am worthy of deep, unconditional love.',
    catName: 'Rose',
    element: 'water'
  },
  {
    id: 3,
    title: 'The Courageous Heart',
    message: 'Fear is just excitement in disguise. Step boldly into your power and watch miracles unfold.',
    affirmation: 'I am brave, bold, and unstoppable.',
    catName: 'Phoenix',
    element: 'fire'
  },
  {
    id: 4,
    title: 'The Peaceful Dreamer',
    message: 'In stillness, you find your greatest strength. Take time to rest and your dreams will crystallize.',
    affirmation: 'I trust in divine timing.',
    catName: 'Whisper',
    element: 'air'
  },
  {
    id: 5,
    title: 'The Creative Spark',
    message: 'Your creativity is a gift to the world. Express yourself freely and watch inspiration multiply.',
    affirmation: 'I am infinitely creative and inspired.',
    catName: 'Prism',
    element: 'fire'
  },
  {
    id: 6,
    title: 'The Intuitive Guide',
    message: 'Your inner knowing is your compass. Trust the whispers of your soul—they are leading you home.',
    affirmation: 'I trust my intuition completely.',
    catName: 'Mystic',
    element: 'spirit'
  },
  {
    id: 7,
    title: 'The Joyful Soul',
    message: 'Joy is your birthright. Release what dims your light and embrace the happiness waiting for you.',
    affirmation: 'I choose joy in every moment.',
    catName: 'Sunny',
    element: 'fire'
  },
  {
    id: 8,
    title: 'The Healer',
    message: 'Healing is happening now, even in ways you cannot see. Trust the process and be gentle with yourself.',
    affirmation: 'I am healing and whole.',
    catName: 'Sage',
    element: 'water'
  },
  {
    id: 9,
    title: 'The Manifestor',
    message: 'What you focus on expands. Keep your vision clear and your intentions pure—magic is coming.',
    affirmation: 'Everything I desire is on its way to me.',
    catName: 'Star',
    element: 'spirit'
  },
  {
    id: 10,
    title: 'The Grounded One',
    message: 'Roots before wings. Build a solid foundation and you will rise higher than you ever imagined.',
    affirmation: 'I am grounded, stable, and secure.',
    catName: 'Oak',
    element: 'earth'
  },
  {
    id: 11,
    title: 'The Transformer',
    message: 'Change is your superpower. Embrace the transformation unfolding within you—you are becoming magnificent.',
    affirmation: 'I welcome positive change into my life.',
    catName: 'Shadow',
    element: 'spirit'
  },
  {
    id: 12,
    title: 'The Communicator',
    message: 'Your voice matters. Speak your truth with love and watch how the universe responds.',
    affirmation: 'I express myself clearly and confidently.',
    catName: 'Echo',
    element: 'air'
  },
  {
    id: 13,
    title: 'The Grateful Heart',
    message: 'Gratitude unlocks abundance. Count your blessings and multiply them with your appreciation.',
    affirmation: 'I am grateful for all that I have and all that is coming.',
    catName: 'Blessing',
    element: 'earth'
  },
  {
    id: 14,
    title: 'The Warrior',
    message: 'You are stronger than you know. Stand tall in your power and face any challenge with grace.',
    affirmation: 'I am powerful beyond measure.',
    catName: 'Valor',
    element: 'fire'
  },
  {
    id: 15,
    title: 'The Flowing One',
    message: 'Like water, flow around obstacles. Flexibility is your gift—adapt and thrive.',
    affirmation: 'I flow with life effortlessly.',
    catName: 'River',
    element: 'water'
  },
  {
    id: 16,
    title: 'The Seeker',
    message: 'The answers you seek are already within you. Be still and listen to the wisdom of your soul.',
    affirmation: 'I have all the answers I need within me.',
    catName: 'Quest',
    element: 'air'
  }
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
