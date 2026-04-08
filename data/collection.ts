export interface Tamagotchi {
  id: number;
  name: string;
  series: string;
  year: number;
  avatar: string;
  condition: string;
  market_price: string;
  price_bought: string;
  date_bought: string;
  rarity: string;
  is_featured: boolean;
  image_urls: string[];
  images: string[];
  created_at: string;
  updated_at: string;
}

export const tamagotchiCollection: Tamagotchi[] = [
  {
    id: 1,
    name: 'Tamagotchi Uni',
    series: 'Tamagotchi Uni',
    year: 2023,
    avatar: '🟣',
    condition: 'Mint',
    market_price: '59.99',
    price_bought: '49.99',
    date_bought: '2023-01-01T00:00:00.000000Z',
    rarity: 'Common',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2023-01-01T00:00:00.000000Z',
    updated_at: '2023-01-01T00:00:00.000000Z',
  },
  {
    id: 2,
    name: 'Tamagotchi Pix Party',
    series: 'Tamagotchi Pix',
    year: 2022,
    avatar: '🎉',
    condition: 'Excellent',
    market_price: '89.99',
    price_bought: '59.99',
    date_bought: '2022-01-01T00:00:00.000000Z',
    rarity: 'Uncommon',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2022-01-01T00:00:00.000000Z',
    updated_at: '2022-01-01T00:00:00.000000Z',
  },
  {
    id: 3,
    name: 'Tamagotchi ON Sanrio',
    series: 'Tamagotchi ON',
    year: 2020,
    avatar: '🌸',
    condition: 'Mint',
    market_price: '299.99',
    price_bought: '59.99',
    date_bought: '2020-01-01T00:00:00.000000Z',
    rarity: 'Ultra Rare',
    is_featured: true,
    image_urls: [],
    images: [],
    created_at: '2020-01-01T00:00:00.000000Z',
    updated_at: '2020-01-01T00:00:00.000000Z',
  },
  {
    id: 4,
    name: 'Tamagotchi Smart Sanrio',
    series: 'Tamagotchi Smart',
    year: 2022,
    avatar: '⌚',
    condition: 'Mint',
    market_price: '179.99',
    price_bought: '89.99',
    date_bought: '2022-01-01T00:00:00.000000Z',
    rarity: 'Rare',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2022-01-01T00:00:00.000000Z',
    updated_at: '2022-01-01T00:00:00.000000Z',
  },
  {
    id: 5,
    name: 'Original P1 Rerelease',
    series: 'Tamagotchi Original',
    year: 2023,
    avatar: '💖',
    condition: 'Mint',
    market_price: '24.99',
    price_bought: '19.99',
    date_bought: '2023-01-01T00:00:00.000000Z',
    rarity: 'Common',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2023-01-01T00:00:00.000000Z',
    updated_at: '2023-01-01T00:00:00.000000Z',
  },
  {
    id: 6,
    name: 'Tamagotchi Connection V4',
    series: 'Tamagotchi Connection',
    year: 2007,
    avatar: '✨',
    condition: 'Good',
    market_price: '149.99',
    price_bought: '25.00',
    date_bought: '2007-01-01T00:00:00.000000Z',
    rarity: 'Rare',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2007-01-01T00:00:00.000000Z',
    updated_at: '2007-01-01T00:00:00.000000Z',
  },
  {
    id: 7,
    name: 'Tamagotchi Music Star',
    series: 'Tamagotchi Connection',
    year: 2008,
    avatar: '🎸',
    condition: 'Good',
    market_price: '199.99',
    price_bought: '30.00',
    date_bought: '2008-01-01T00:00:00.000000Z',
    rarity: 'Rare',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2008-01-01T00:00:00.000000Z',
    updated_at: '2008-01-01T00:00:00.000000Z',
  },
  {
    id: 8,
    name: 'Tamagotchi Meets Pastel',
    series: 'Tamagotchi Meets',
    year: 2019,
    avatar: '💜',
    condition: 'Excellent',
    market_price: '159.99',
    price_bought: '69.99',
    date_bought: '2019-01-01T00:00:00.000000Z',
    rarity: 'Rare',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2019-01-01T00:00:00.000000Z',
    updated_at: '2019-01-01T00:00:00.000000Z',
  },
  {
    id: 9,
    name: 'Gudetama Tamagotchi',
    series: 'Tamagotchi Nano',
    year: 2021,
    avatar: '🥚',
    condition: 'Mint',
    market_price: '39.99',
    price_bought: '19.99',
    date_bought: '2021-01-01T00:00:00.000000Z',
    rarity: 'Uncommon',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2021-01-01T00:00:00.000000Z',
    updated_at: '2021-01-01T00:00:00.000000Z',
  },
  {
    id: 10,
    name: 'Hello Kitty Tamagotchi',
    series: 'Tamagotchi Nano',
    year: 2020,
    avatar: '🎀',
    condition: 'Mint',
    market_price: '49.99',
    price_bought: '19.99',
    date_bought: '2020-01-01T00:00:00.000000Z',
    rarity: 'Uncommon',
    is_featured: false,
    image_urls: [],
    images: [],
    created_at: '2020-01-01T00:00:00.000000Z',
    updated_at: '2020-01-01T00:00:00.000000Z',
  },
];

export const collectionStats = {
  totalItems: tamagotchiCollection.length,
  totalValue: tamagotchiCollection.reduce(
    (sum, t) => sum + parseFloat(t.market_price),
    0,
  ),
  totalInvested: tamagotchiCollection.reduce(
    (sum, t) => sum + parseFloat(t.price_bought),
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
