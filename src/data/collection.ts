export interface Tamagotchi {
  id: number;
  name: string;
  series: string;
  year: number;
  color: string;
  image: string;
  description: string;
  condition: 'Mint' | 'Excellent' | 'Good' | 'Fair';
  marketValue: number;
  purchasePrice: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Ultra Rare' | 'Grail';
  features: string[];
}

export const tamagotchiCollection: Tamagotchi[] = [
  {
    id: 1,
    name: 'Tamagotchi Uni',
    series: 'Tamagotchi Uni',
    year: 2023,
    color: 'Purple',
    image: '🟣',
    description:
      'The latest Wi-Fi connected Tamagotchi with online features and the Tamaverse.',
    condition: 'Mint',
    marketValue: 59.99,
    purchasePrice: 49.99,
    rarity: 'Common',
    features: [
      'Wi-Fi',
      'Color Screen',
      'Tamaverse',
      'Accessory Crafting',
    ],
  },
  {
    id: 2,
    name: 'Tamagotchi Pix Party',
    series: 'Tamagotchi Pix',
    year: 2022,
    color: 'Confetti',
    image: '🎉',
    description:
      'Party-themed Pix with exclusive party games, group playdates, and confetti design.',
    condition: 'Excellent',
    marketValue: 89.99,
    purchasePrice: 59.99,
    rarity: 'Uncommon',
    features: ['Camera', 'Touch Buttons', 'Party Games', 'QR Codes'],
  },
  {
    id: 3,
    name: 'Tamagotchi ON Sanrio',
    series: 'Tamagotchi ON',
    year: 2020,
    color: 'Pink Sanrio',
    image: '🌸',
    description:
      'Special Sanrio collaboration with Hello Kitty, My Melody, Cinnamoroll and more characters.',
    condition: 'Mint',
    marketValue: 299.99,
    purchasePrice: 59.99,
    rarity: 'Ultra Rare',
    features: [
      'Bluetooth',
      'Color Screen',
      'Sanrio Characters',
      'Marriage System',
    ],
  },
  {
    id: 4,
    name: 'Tamagotchi Smart Sanrio',
    series: 'Tamagotchi Smart',
    year: 2022,
    color: 'Sanrio White',
    image: '⌚',
    description:
      'Watch-style Tamagotchi with Sanrio character card compatibility and touch screen.',
    condition: 'Mint',
    marketValue: 179.99,
    purchasePrice: 89.99,
    rarity: 'Rare',
    features: [
      'Touch Screen',
      'Watch Form',
      'TamaSma Cards',
      'Microphone',
    ],
  },
  {
    id: 5,
    name: 'Original P1 Rerelease',
    series: 'Tamagotchi Original',
    year: 2023,
    color: 'Neon Pink',
    image: '💖',
    description:
      'Faithful rerelease of the original 1996 Tamagotchi with updated shell designs.',
    condition: 'Mint',
    marketValue: 24.99,
    purchasePrice: 19.99,
    rarity: 'Common',
    features: ['Classic Gameplay', 'Chain Accessory', 'Retro LCD'],
  },
  {
    id: 6,
    name: 'Tamagotchi Connection V4',
    series: 'Tamagotchi Connection',
    year: 2007,
    color: 'Glow-in-the-Dark',
    image: '✨',
    description:
      'Rare glow-in-the-dark shell V4 with jobs, mail, and infrared connection features.',
    condition: 'Good',
    marketValue: 149.99,
    purchasePrice: 25.0,
    rarity: 'Rare',
    features: ['Infrared', 'Jobs System', 'Mail', 'Shopping'],
  },
  {
    id: 7,
    name: 'Tamagotchi Music Star',
    series: 'Tamagotchi Connection',
    year: 2008,
    color: 'Rock Band',
    image: '🎸',
    description:
      'Music-themed Tamagotchi where your character forms a band and plays concerts.',
    condition: 'Good',
    marketValue: 199.99,
    purchasePrice: 30.0,
    rarity: 'Rare',
    features: [
      'Band Formation',
      'Concerts',
      'Instruments',
      'Fan System',
    ],
  },
  {
    id: 8,
    name: 'Tamagotchi Meets Pastel',
    series: 'Tamagotchi Meets',
    year: 2019,
    color: 'Pastel Purple',
    image: '💜',
    description:
      'Japanese exclusive Meets version with pastel-themed world and exclusive characters.',
    condition: 'Excellent',
    marketValue: 159.99,
    purchasePrice: 69.99,
    rarity: 'Rare',
    features: [
      'Color Screen',
      'Bluetooth',
      'Genetic Mixing',
      'Pastel Land',
    ],
  },
  {
    id: 9,
    name: 'Gudetama Tamagotchi',
    series: 'Tamagotchi Nano',
    year: 2021,
    color: 'Egg Yellow',
    image: '🥚',
    description:
      'Sanrio collab nano featuring the lazy egg Gudetama in adorable mini form.',
    condition: 'Mint',
    marketValue: 39.99,
    purchasePrice: 19.99,
    rarity: 'Uncommon',
    features: [
      'Nano Size',
      'Gudetama Characters',
      'Mini Games',
      'Animations',
    ],
  },
  {
    id: 10,
    name: 'Hello Kitty Tamagotchi',
    series: 'Tamagotchi Nano',
    year: 2020,
    color: 'Red Bow',
    image: '🎀',
    description:
      'Hello Kitty themed nano Tamagotchi with iconic red bow design and Sanrio friends.',
    condition: 'Mint',
    marketValue: 49.99,
    purchasePrice: 19.99,
    rarity: 'Uncommon',
    features: [
      'Nano Size',
      'Hello Kitty Theme',
      'Sanrio Friends',
      'Special Animations',
    ],
  },
];

export const collectionStats = {
  totalItems: tamagotchiCollection.length,
  totalValue: tamagotchiCollection.reduce(
    (sum, t) => sum + t.marketValue,
    0,
  ),
  totalInvested: tamagotchiCollection.reduce(
    (sum, t) => sum + t.purchasePrice,
    0,
  ),
  get totalProfit() {
    return this.totalValue - this.totalInvested;
  },
  get profitPercentage() {
    return ((this.totalProfit / this.totalInvested) * 100).toFixed(1);
  },
  rarityBreakdown: {
    Common: tamagotchiCollection.filter((t) => t.rarity === 'Common')
      .length,
    Uncommon: tamagotchiCollection.filter(
      (t) => t.rarity === 'Uncommon',
    ).length,
    Rare: tamagotchiCollection.filter((t) => t.rarity === 'Rare')
      .length,
    'Ultra Rare': tamagotchiCollection.filter(
      (t) => t.rarity === 'Ultra Rare',
    ).length,
    Grail: tamagotchiCollection.filter((t) => t.rarity === 'Grail')
      .length,
  },
};
