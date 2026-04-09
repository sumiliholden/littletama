'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatLabel } from '@/lib/format';
import type { Tamagotchi } from '@/data/collection';

const rarityColors: Record<string, string> = {
  common: 'bg-mint',
  uncommon: 'bg-sky',
  rare: 'bg-lavender',
  ultra_rare: 'bg-pink',
  grail: 'bg-yellow',
};

const conditionColors: Record<string, string> = {
  mint: 'bg-mint',
  excellent: 'bg-sky',
  good: 'bg-yellow',
  fair: 'bg-peach',
};

interface TamagotchiCardProps {
  tama: Tamagotchi;
  index?: number;
}

export default function TamagotchiCard({
  tama,
  index = 0,
}: TamagotchiCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        className="neo-card p-6 flex flex-col gap-4 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
        onClick={() => setShowDetail(true)}
      >
        <div className="text-4xl w-20 h-20 bg-pink-light border-2 border-ink rounded-2xl flex items-center justify-center shadow-[3px_3px_0_var(--color-ink)]">
          {tama.avatar}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">{tama.name}</h3>
          <p className="text-sm opacity-60">{tama.series}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="neo-badge bg-pink-light">
              {formatLabel(tama.rarity)}
            </span>
            <span className="font-heading font-bold text-xl text-lavender-dark">
              ₱{tama.market_price}
            </span>
          </div>
        </div>
      </motion.div>

      {showDetail && (
        <div
          className="fixed inset-0 bg-ink/40 z-[200] flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setShowDetail(false)}
        >
          <motion.div
            className="neo-card max-w-[520px] w-full p-8 relative max-h-[90vh] overflow-y-auto flex flex-col gap-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 border-2 border-ink rounded-lg bg-peach cursor-pointer text-base flex items-center justify-center shadow-[2px_2px_0_var(--color-ink)] hover:bg-coral transition-colors"
              onClick={() => setShowDetail(false)}
            >
              ✕
            </button>
            <div className="flex items-center gap-4">
              <div className="text-4xl w-20 h-20 bg-pink-light border-2 border-ink rounded-2xl flex items-center justify-center shadow-[4px_4px_0_var(--color-ink)] shrink-0">
                {tama.avatar}
              </div>
              <div>
                <h2 className="text-xl">{tama.name}</h2>
                <p className="text-sm opacity-60 mt-1">
                  {tama.series} · {tama.year}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Rarity
                </span>
                <span
                  className={`neo-badge ${rarityColors[tama.rarity] ?? ''}`}
                >
                  {formatLabel(tama.rarity)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Condition
                </span>
                <span
                  className={`neo-badge ${conditionColors[tama.condition] ?? ''}`}
                >
                  {formatLabel(tama.condition)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Purchase Price
                </span>
                <span>₱{tama.price_bought}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-xs uppercase tracking-widest opacity-50">
                  Market Value
                </span>
                <span className="font-heading font-bold text-lg text-lavender-dark">
                  ₱{tama.market_price}
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
                      parseFloat(tama.market_price) >
                      parseFloat(tama.price_bought)
                        ? '#2E7D32'
                        : '#C62828',
                  }}
                >
                  {parseFloat(tama.market_price) >
                  parseFloat(tama.price_bought)
                    ? '+'
                    : ''}
                  ₱
                  {(
                    parseFloat(tama.market_price) -
                    parseFloat(tama.price_bought)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
