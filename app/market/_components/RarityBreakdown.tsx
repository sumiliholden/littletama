'use client';

import { motion } from 'framer-motion';
import { useItems } from '@/hooks/useItems';

const rarityOrder = [
  'common',
  'uncommon',
  'rare',
  'ultra_rare',
  'grail',
] as const;

const rarityLabels: Record<string, string> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  ultra_rare: 'Ultra Rare',
  grail: 'Grail',
};

const rarityInline: Record<string, string> = {
  common: 'var(--color-mint)',
  uncommon: 'var(--color-sky)',
  rare: 'var(--color-lavender)',
  ultra_rare: 'var(--color-pink)',
  grail: 'var(--color-yellow)',
};

export default function RarityBreakdown() {
  const { data: response } = useItems();
  const items = response?.data ?? [];
  const total = items.length;

  const breakdown = rarityOrder.map((rarity) => ({
    rarity,
    count: items.filter((t) => t.rarity === rarity).length,
  }));

  return (
    <motion.div
      className="neo-card p-7 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl mb-5 flex items-center gap-2">
        Rarity Breakdown
      </h2>
      <div className="flex h-10 border-2 border-ink rounded-xl overflow-hidden mb-4">
        {breakdown.map(({ rarity, count }) => {
          if (count === 0) return null;
          const pct = total > 0 ? (count / total) * 100 : 0;
          return (
            <div
              key={rarity}
              className="flex items-center justify-center min-w-[30px] border-r-2 border-ink last:border-r-0 transition-all"
              style={{
                width: `${pct}%`,
                background: rarityInline[rarity],
              }}
              title={`${rarityLabels[rarity]}: ${count}`}
            >
              <span className="font-heading font-bold text-sm">
                {count}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        {breakdown.map(({ rarity, count }) => (
          <div
            key={rarity}
            className="flex items-center gap-1.5 text-sm"
          >
            <span
              className="w-3 h-3 border-2 border-ink rounded"
              style={{ background: rarityInline[rarity] }}
            />
            <span>
              {rarityLabels[rarity]} ({count})
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
