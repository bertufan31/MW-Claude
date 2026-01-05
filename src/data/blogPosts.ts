// Blog posts data
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'manifestation' | 'crystals' | 'rituals' | 'product-tips' | 'wellness';
  author: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'beginners-guide-to-manifestation',
    title: 'The Complete Beginner\'s Guide to Manifestation',
    excerpt: 'Learn the fundamentals of manifestation and how to start attracting your desires into reality with these proven techniques.',
    content: `
      <p>Manifestation is the practice of bringing your desires into reality through focused intention, belief, and aligned action. Whether you're new to this practice or looking to deepen your understanding, this guide will walk you through everything you need to know.</p>
      
      <h2>What is Manifestation?</h2>
      <p>At its core, manifestation is based on the principle that our thoughts and energy can influence our reality. By aligning our thoughts, emotions, and actions with our desires, we can attract what we want into our lives.</p>
      
      <h2>The Basic Steps of Manifestation</h2>
      <ol>
        <li><strong>Get Clear on What You Want</strong> - Specificity is key. The universe responds to clear intentions.</li>
        <li><strong>Visualize Your Desire</strong> - See it, feel it, believe it as if it's already yours.</li>
        <li><strong>Release Attachment</strong> - Trust the process and let go of how and when it will happen.</li>
        <li><strong>Take Inspired Action</strong> - Move towards your goals when opportunities arise.</li>
        <li><strong>Practice Gratitude</strong> - Be thankful for what you have and what's coming.</li>
      </ol>
      
      <h2>Tools to Enhance Your Practice</h2>
      <p>Many practitioners use tools like crystals, sage, and manifestation cards to amplify their intentions. Our Manifestation Starter Pack includes everything you need to begin your journey.</p>
    `,
    image: '/placeholder.svg',
    category: 'manifestation',
    author: 'Manifest Queen',
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    slug: 'crystal-guide-for-manifestation',
    title: 'Which Crystals Are Best for Manifestation?',
    excerpt: 'Discover the most powerful crystals for manifesting love, abundance, healing, and more. Plus, learn how to use them effectively.',
    content: `
      <p>Crystals have been used for thousands of years to amplify energy and intentions. Each crystal carries unique vibrations that can support different aspects of your manifestation practice.</p>
      
      <h2>Top Crystals for Manifestation</h2>
      
      <h3>Clear Quartz - The Master Healer</h3>
      <p>Known as the "master healer," clear quartz amplifies any intention you set. It's perfect for all types of manifestation work.</p>
      
      <h3>Citrine - The Abundance Stone</h3>
      <p>Citrine is the go-to crystal for manifesting wealth, success, and prosperity. It carries the energy of the sun.</p>
      
      <h3>Rose Quartz - The Love Stone</h3>
      <p>For manifesting love (including self-love), rose quartz opens the heart chakra and attracts loving energy.</p>
      
      <h3>Amethyst - The Intuition Crystal</h3>
      <p>Amethyst enhances intuition and spiritual awareness, helping you connect with your higher guidance.</p>
      
      <h2>How to Use Crystals for Manifestation</h2>
      <ol>
        <li>Cleanse your crystal with sage or palo santo</li>
        <li>Hold it during meditation and set your intention</li>
        <li>Place it on your altar or carry it with you</li>
        <li>Recharge under the full moon monthly</li>
      </ol>
    `,
    image: '/placeholder.svg',
    category: 'crystals',
    author: 'Manifest Queen',
    publishedAt: '2024-01-10',
    readTime: 6
  },
  {
    id: '3',
    slug: 'new-moon-manifestation-ritual',
    title: 'Powerful New Moon Manifestation Ritual',
    excerpt: 'Harness the energy of the new moon to set intentions and manifest your dreams. A step-by-step ritual guide.',
    content: `
      <p>The new moon is the perfect time to plant seeds of intention. As the moon grows fuller, so too will your manifestations. Here's a powerful ritual to perform during the new moon.</p>
      
      <h2>What You'll Need</h2>
      <ul>
        <li>White sage or palo santo for cleansing</li>
        <li>A journal and pen</li>
        <li>Crystals (clear quartz is perfect)</li>
        <li>A candle</li>
        <li>Our Cat Tarot Manifesting Cards (optional but powerful!)</li>
      </ul>
      
      <h2>The Ritual</h2>
      <ol>
        <li><strong>Cleanse Your Space</strong> - Light your sage or palo santo and clear the energy of your space.</li>
        <li><strong>Ground Yourself</strong> - Take deep breaths and connect with the earth beneath you.</li>
        <li><strong>Light Your Candle</strong> - As you light it, set the intention for new beginnings.</li>
        <li><strong>Write Your Intentions</strong> - In your journal, write what you wish to manifest as if it's already happening.</li>
        <li><strong>Draw a Card</strong> - Pull a manifesting card for guidance on your journey.</li>
        <li><strong>Meditate</strong> - Hold your crystal and visualize your intentions manifesting.</li>
        <li><strong>Close with Gratitude</strong> - Thank the universe for what's coming.</li>
      </ol>
    `,
    image: '/placeholder.svg',
    category: 'rituals',
    author: 'Manifest Queen',
    publishedAt: '2024-01-05',
    readTime: 5,
    featured: true
  },
  {
    id: '4',
    slug: 'how-to-use-sage-for-cleansing',
    title: 'How to Use Sage for Energy Cleansing',
    excerpt: 'A complete guide to smudging with sage, including when to cleanse, how to do it safely, and what to say during your practice.',
    content: `
      <p>Sage cleansing, or smudging, is an ancient practice used to clear negative energy from spaces, objects, and people. Here's everything you need to know.</p>
      
      <h2>When to Cleanse</h2>
      <ul>
        <li>When moving into a new home</li>
        <li>After arguments or negative events</li>
        <li>Before and after spiritual work</li>
        <li>When you feel stuck or heavy</li>
        <li>To cleanse new crystals</li>
      </ul>
      
      <h2>How to Smudge</h2>
      <ol>
        <li>Open windows to let negative energy escape</li>
        <li>Light your sage bundle and let it catch fire</li>
        <li>Blow out the flame so it smokes</li>
        <li>Walk through your space, letting smoke reach all corners</li>
        <li>Focus on doorways, windows, and dark corners</li>
        <li>Extinguish in a fireproof dish</li>
      </ol>
      
      <h2>What to Say</h2>
      <p>"I cleanse this space of all negative energy. Only love and light may remain. I am protected, I am safe, I am whole."</p>
    `,
    image: '/placeholder.svg',
    category: 'product-tips',
    author: 'Manifest Queen',
    publishedAt: '2024-01-01',
    readTime: 4
  },
  {
    id: '5',
    slug: 'daily-manifestation-practice',
    title: '5 Minute Daily Manifestation Practice',
    excerpt: 'Don\'t have hours to spare? This quick daily practice will keep your manifestations on track even with a busy schedule.',
    content: `
      <p>Consistency is more important than duration when it comes to manifestation. Here's a powerful 5-minute practice you can do every day.</p>
      
      <h2>Morning Manifestation Routine</h2>
      
      <h3>Minute 1: Gratitude</h3>
      <p>Before getting out of bed, think of three things you're grateful for. Feel the gratitude in your heart.</p>
      
      <h3>Minute 2: Visualization</h3>
      <p>Close your eyes and visualize your biggest desire as if it's already real. What does it look like? How does it feel?</p>
      
      <h3>Minute 3: Affirmation</h3>
      <p>Speak or think your most powerful affirmation three times. Feel it as truth.</p>
      
      <h3>Minute 4: Card Draw</h3>
      <p>Pull a card from your manifesting deck. Let its message guide your day.</p>
      
      <h3>Minute 5: Intention Setting</h3>
      <p>Set one clear intention for the day ahead. What energy do you want to embody?</p>
      
      <p>That's it! Five minutes that can change your entire day—and eventually, your entire life.</p>
    `,
    image: '/placeholder.svg',
    category: 'wellness',
    author: 'Manifest Queen',
    publishedAt: '2023-12-28',
    readTime: 3
  },
  {
    id: '6',
    slug: 'palo-santo-vs-sage',
    title: 'Palo Santo vs Sage: When to Use Each',
    excerpt: 'Both are powerful cleansing tools, but they have different purposes. Learn when to reach for sage and when to use palo santo.',
    content: `
      <p>While both sage and palo santo are used for spiritual cleansing, they have distinct energies and purposes. Understanding their differences will help you choose the right tool for your practice.</p>
      
      <h2>White Sage</h2>
      <p><strong>Best for:</strong> Deep cleansing, removing negative energy, clearing stagnant energy</p>
      <p><strong>Energy:</strong> Powerful, clearing, purifying</p>
      <p><strong>Scent:</strong> Strong, herbal, earthy</p>
      <p><strong>Use when:</strong> You need to clear heavy or negative energy, moving to a new space, after illness or conflict</p>
      
      <h2>Palo Santo</h2>
      <p><strong>Best for:</strong> Inviting positive energy, daily cleansing, meditation</p>
      <p><strong>Energy:</strong> Gentle, uplifting, warming</p>
      <p><strong>Scent:</strong> Sweet, woody, with hints of citrus</p>
      <p><strong>Use when:</strong> Setting intentions, before meditation, everyday spiritual maintenance</p>
      
      <h2>Using Them Together</h2>
      <p>For a complete cleansing ritual, use sage first to clear negative energy, then follow with palo santo to invite positive energy in. This is what we do before every manifestation session!</p>
    `,
    image: '/placeholder.svg',
    category: 'product-tips',
    author: 'Manifest Queen',
    publishedAt: '2023-12-20',
    readTime: 4
  }
];

export const blogCategories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'manifestation', name: 'Manifestation Techniques', count: blogPosts.filter(p => p.category === 'manifestation').length },
  { id: 'crystals', name: 'Crystal Guides', count: blogPosts.filter(p => p.category === 'crystals').length },
  { id: 'rituals', name: 'Rituals & Ceremonies', count: blogPosts.filter(p => p.category === 'rituals').length },
  { id: 'product-tips', name: 'Product Usage Tips', count: blogPosts.filter(p => p.category === 'product-tips').length },
  { id: 'wellness', name: 'Spiritual Wellness', count: blogPosts.filter(p => p.category === 'wellness').length },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
