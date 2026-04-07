import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star } from 'lucide-react';
import { tamagotchiCollection } from '../data/collection.ts';
import type { Tamagotchi } from '../data/collection.ts';

const rarities = [
  'All',
  'Common',
  'Uncommon',
  'Rare',
  'Ultra Rare',
  'Grail',
];
const conditions = ['All', 'Mint', 'Excellent', 'Good', 'Fair'];

const rarityColors: Record<string, string> = {
  Common: 'bg-mint',
  Uncommon: 'bg-sky',
  Rare: 'bg-lavender',
  'Ultra Rare': 'bg-pink',
  Grail: 'bg-yellow',
};

const conditionColors: Record<string, string> = {
  Mint: 'bg-mint',
  Excellent: 'bg-sky',
  Good: 'bg-yellow',
  Fair: 'bg-peach',
};

export default function Collection() {
  const [search, setSearch] = useState('');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [conditionFilter, setConditionFilter] = useState('All');
  const [selectedTama, setSelectedTama] = useState<Tamagotchi | null>(
    null,
  );

  const filtered = tamagotchiCollection.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.series.toLowerCase().includes(search.toLowerCase());
    const matchRarity =
      rarityFilter === 'All' || t.rarity === rarityFilter;
    const matchCondition =
      conditionFilter === 'All' || t.condition === conditionFilter;
    return matchSearch && matchRarity && matchCondition;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="flex items-center justify-center gap-3 text-4xl">
          <Star
            size={32}
            fill="var(--color-yellow)"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          />
          My Collection
        </h1>
        <p className="mt-2 text-base opacity-60">
          Every Tamagotchi tells a story ♡
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative max-w-[400px]">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50"
          />
          <input
            type="text"
            placeholder="Search by name or series..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-10 pr-4 font-body text-base border-3 border-ink rounded-xl shadow-[4px_4px_0_var(--color-ink)] outline-none bg-cream focus:shadow-[6px_6px_0_var(--color-ink)] transition-shadow"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={16} />
          <span className="font-heading font-semibold text-sm">
            Rarity:
          </span>
          {rarities.map((r) => (
            <button
              key={r}
              className={`px-3.5 py-1.5 font-heading text-xs font-semibold border-2 border-ink rounded-full bg-cream cursor-pointer transition-all shadow-[2px_2px_0_var(--color-ink)] hover:bg-pink-light ${
                rarityFilter === r
                  ? 'bg-pink! -translate-x-px -translate-y-px shadow-[3px_3px_0_var(--color-ink)]'
                  : ''
              }`}
              onClick={() => setRarityFilter(r)}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={16} />
          <span className="font-heading font-semibold text-sm">
            Condition:
          </span>
          {conditions.map((c) => (
            <button
              key={c}
              className={`px-3.5 py-1.5 font-heading text-xs font-semibold border-2 border-ink rounded-full bg-cream cursor-pointer transition-all shadow-[2px_2px_0_var(--color-ink)] hover:bg-pink-light ${
                conditionFilter === c
                  ? 'bg-pink! -translate-x-px -translate-y-px shadow-[3px_3px_0_var(--color-ink)]'
                  : ''
              }`}
              onClick={() => setConditionFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm opacity-60 mb-5">
        {filtered.length} Tamagotchi{filtered.length !== 1 && 's'}{' '}
        found
      </p>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {filtered.map((tama, i) => (
          <motion.div
            key={tama.id}
            className="neo-card p-5 cursor-pointer flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onClick={() => setSelectedTama(tama)}
          >
            <div className="text-3xl w-16 h-16 flex items-center justify-center bg-pink-light border-2 border-ink rounded-2xl shadow-[3px_3px_0_var(--color-ink)]">
              {tama.image}
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold">{tama.name}</h3>
              <p className="text-sm opacity-60">
                {tama.series} · {tama.year}
              </p>
              <div className="flex gap-1.5 flex-wrap mt-1">
                <span
                  className={`neo-badge ${rarityColors[tama.rarity] ?? ''}`}
                >
                  {tama.rarity}
                </span>
                <span
                  className={`neo-badge ${conditionColors[tama.condition] ?? ''}`}
                >
                  {tama.condition}
                </span>
              </div>
              <div className="font-heading font-bold text-xl text-lavender-dark mt-1">
                ${tama.marketValue}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedTama && (
        <div
          className="fixed inset-0 bg-ink/40 z-[200] flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setSelectedTama(null)}
        >
          <motion.div
            className="neo-card max-w-[520px] w-full p-8 relative max-h-[90vh] overflow-y-auto flex flex-col gap-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 border-2 border-ink rounded-lg bg-peach cursor-pointer text-base flex items-center justify-center shadow-[2px_2px_0_var(--color-ink)] hover:bg-coral transition-colors"
              onClick={() => setSelectedTama(null)}
            >
              ✕
            </button>
            <div className="flex items-center gap-4">
              <div className="text-4xl w-20 h-20 bg-pink-light border-2 border-ink rounded-2xl flex items-center justify-center shadow-[4px_4px_0_var(--color-ink)] shrink-0">
                {selectedTama.image}
              </div>
              <div>
                <h2 className="text-xl">{selectedTama.name}</h2>
                <p className="text-sm opacity-60 mt-1">
                  {selectedTama.series} · {selectedTama.year}
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed opacity-80">
              {selectedTama.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Rarity
                </span>
                <span
                  className={`neo-badge ${rarityColors[selectedTama.rarity] ?? ''}`}
                >
                  {selectedTama.rarity}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Condition
                </span>
                <span
                  className={`neo-badge ${conditionColors[selectedTama.condition] ?? ''}`}
                >
                  {selectedTama.condition}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Color
                </span>
                <span>{selectedTama.color}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Purchase Price
                </span>
                <span>${selectedTama.purchasePrice}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Market Value
                </span>
                <span className="font-heading font-bold text-lg text-lavender-dark">
                  ${selectedTama.marketValue}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Profit
                </span>
                <span
                  className="font-bold"
                  style={{
                    color:
                      selectedTama.marketValue >
                      selectedTama.purchasePrice
                        ? '#2E7D32'
                        : '#C62828',
                  }}
                >
                  {selectedTama.marketValue >
                  selectedTama.purchasePrice
                    ? '+'
                    : ''}
                  $
                  {(
                    selectedTama.marketValue -
                    selectedTama.purchasePrice
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                Features
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedTama.features.map((f) => (
                  <span key={f} className="neo-badge bg-pink-light">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
