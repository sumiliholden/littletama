'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { useItems } from '@/hooks/useItems';

export default function MarketRankings() {
  const { data: response } = useItems();
  const items = response?.data ?? [];

  const sorted = [...items].sort(
    (a, b) => parseFloat(b.market_price) - parseFloat(a.market_price),
  );

  const topGainers = [...items]
    .map((t) => {
      const market = parseFloat(t.market_price);
      const paid = parseFloat(t.price_bought);
      return {
        ...t,
        profit: market - paid,
        profitPct: paid > 0 ? ((market - paid) / paid) * 100 : 0,
      };
    })
    .sort((a, b) => b.profitPct - a.profitPct);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
      <motion.div
        className="neo-card p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl mb-5 flex items-center gap-2">
          <TrendingUp size={20} /> Most Valuable
        </h2>
        <div className="flex flex-col gap-3">
          {sorted.slice(0, 5).map((tama, i) => (
            <div
              key={tama.id}
              className="flex items-center gap-3 p-3 bg-pink-light border-2 border-ink rounded-xl hover:translate-x-1 transition-transform"
            >
              <span className="font-heading font-bold text-sm opacity-50 min-w-[28px]">
                #{i + 1}
              </span>
              <span className="text-xl">{tama.avatar}</span>
              <div className="flex-1 flex flex-col">
                <span className="font-heading font-semibold text-sm">
                  {tama.name}
                </span>
                <span className="text-xs opacity-60">
                  {tama.series}
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-lavender-dark">
                ₱{tama.market_price}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="neo-card p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-xl mb-5 flex items-center gap-2">
          <ArrowUpRight size={20} /> Biggest Gains
        </h2>
        <div className="flex flex-col gap-3">
          {topGainers.slice(0, 5).map((tama, i) => (
            <div
              key={tama.id}
              className="flex items-center gap-3 p-3 bg-pink-light border-2 border-ink rounded-xl hover:translate-x-1 transition-transform"
            >
              <span className="font-heading font-bold text-sm opacity-50 min-w-[28px]">
                #{i + 1}
              </span>
              <span className="text-xl">{tama.avatar}</span>
              <div className="flex-1 flex flex-col">
                <span className="font-heading font-semibold text-sm">
                  {tama.name}
                </span>
                <span className="text-xs opacity-60">
                  ₱{tama.price_bought} → ₱{tama.market_price}
                </span>
              </div>
              <span
                className={`flex items-center gap-1 font-heading font-bold text-sm ${tama.profit >= 0 ? 'text-[#2E7D32]' : 'text-[#C62828]'}`}
              >
                {tama.profit >= 0 ? (
                  <>
                    <TrendingUp size={14} /> +
                    {tama.profitPct.toFixed(0)}%
                  </>
                ) : (
                  <>
                    <TrendingDown size={14} />{' '}
                    {tama.profitPct.toFixed(0)}%
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
