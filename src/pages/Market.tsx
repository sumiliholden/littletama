import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  PieChart,
  ArrowUpRight,
} from 'lucide-react';
import {
  tamagotchiCollection,
  collectionStats,
} from '../data/collection.ts';

const rarityOrder = [
  'Common',
  'Uncommon',
  'Rare',
  'Ultra Rare',
  'Grail',
] as const;

const rarityBg: Record<string, string> = {
  Common: 'bg-mint',
  Uncommon: 'bg-sky',
  Rare: 'bg-lavender',
  'Ultra Rare': 'bg-pink',
  Grail: 'bg-yellow',
};

const rarityInline: Record<string, string> = {
  Common: 'var(--color-mint)',
  Uncommon: 'var(--color-sky)',
  Rare: 'var(--color-lavender)',
  'Ultra Rare': 'var(--color-pink)',
  Grail: 'var(--color-yellow)',
};

export default function Market() {
  const sorted = [...tamagotchiCollection].sort(
    (a, b) => b.marketValue - a.marketValue,
  );
  const topGainers = [...tamagotchiCollection]
    .map((t) => ({
      ...t,
      profit: t.marketValue - t.purchasePrice,
      profitPct:
        ((t.marketValue - t.purchasePrice) / t.purchasePrice) * 100,
    }))
    .sort((a, b) => b.profitPct - a.profitPct);

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex items-center justify-center gap-3 text-4xl">
          <BarChart3 size={32} />
          Market Overview
        </h1>
        <p className="mt-2 text-base opacity-60">
          Track your collection's value and market trends
        </p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            icon: <DollarSign size={24} />,
            label: 'Total Invested',
            value: `$${collectionStats.totalInvested.toFixed(2)}`,
            bg: 'bg-mint',
            color: '',
          },
          {
            icon: <TrendingUp size={24} />,
            label: 'Current Value',
            value: `$${collectionStats.totalValue.toFixed(2)}`,
            bg: 'bg-lavender',
            color: '',
          },
          {
            icon: <ArrowUpRight size={24} />,
            label: 'Total Profit',
            value: `+$${collectionStats.totalProfit.toFixed(2)}`,
            bg: 'bg-pink-light',
            color: 'text-[#2E7D32]',
          },
          {
            icon: <PieChart size={24} />,
            label: 'ROI',
            value: `+${collectionStats.profitPercentage}%`,
            bg: 'bg-yellow',
            color: 'text-[#2E7D32]',
          },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            className={`neo-card ${card.bg} p-6 flex flex-col gap-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            {card.icon}
            <span className="text-xs font-heading font-semibold uppercase tracking-widest opacity-60">
              {card.label}
            </span>
            <span
              className={`font-heading text-3xl font-bold ${card.color}`}
            >
              {card.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Rarity Breakdown */}
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
          {rarityOrder.map((rarity) => {
            const count = collectionStats.rarityBreakdown[rarity];
            if (count === 0) return null;
            const pct = (count / collectionStats.totalItems) * 100;
            return (
              <div
                key={rarity}
                className="flex items-center justify-center min-w-[30px] border-r-2 border-ink last:border-r-0 transition-all"
                style={{
                  width: `${pct}%`,
                  background: rarityInline[rarity],
                }}
                title={`${rarity}: ${count}`}
              >
                <span className="font-heading font-bold text-sm">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          {rarityOrder.map((rarity) => (
            <div
              key={rarity}
              className="flex items-center gap-1.5 text-sm"
            >
              <span
                className="w-3 h-3 border-2 border-ink rounded"
                style={{ background: rarityInline[rarity] }}
              />
              <span>
                {rarity} ({collectionStats.rarityBreakdown[rarity]})
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Two Column - Most Valuable & Biggest Gains */}
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
                <span className="text-xl">{tama.image}</span>
                <div className="flex-1 flex flex-col">
                  <span className="font-heading font-semibold text-sm">
                    {tama.name}
                  </span>
                  <span className="text-xs opacity-60">
                    {tama.series}
                  </span>
                </div>
                <span className="font-heading font-bold text-lg text-lavender-dark">
                  ${tama.marketValue}
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
                <span className="text-xl">{tama.image}</span>
                <div className="flex-1 flex flex-col">
                  <span className="font-heading font-semibold text-sm">
                    {tama.name}
                  </span>
                  <span className="text-xs opacity-60">
                    ${tama.purchasePrice} → ${tama.marketValue}
                  </span>
                </div>
                <span className="flex items-center gap-1 font-heading font-bold text-sm text-[#2E7D32]">
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

      {/* Full Table */}
      <motion.div
        className="neo-card p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl mb-5">Full Valuation Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                {[
                  'Name',
                  'Series',
                  'Year',
                  'Rarity',
                  'Condition',
                  'Paid',
                  'Value',
                  'P/L',
                ].map((h) => (
                  <th
                    key={h}
                    className="font-heading font-semibold text-xs uppercase tracking-widest px-4 py-3 text-left border-b-2 border-ink opacity-60"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((tama) => {
                const pl = tama.marketValue - tama.purchasePrice;
                return (
                  <tr
                    key={tama.id}
                    className="hover:bg-pink-light transition-colors"
                  >
                    <td className="px-4 py-3 border-b border-ink/10 align-middle">
                      <span className="mr-2">{tama.image}</span>
                      {tama.name}
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10">
                      {tama.series}
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10">
                      {tama.year}
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10">
                      <span
                        className={`neo-badge text-[0.7rem] ${rarityBg[tama.rarity] ?? ''}`}
                      >
                        {tama.rarity}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10">
                      {tama.condition}
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10">
                      ${tama.purchasePrice.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 border-b border-ink/10 font-heading font-bold text-lavender-dark">
                      ${tama.marketValue.toFixed(2)}
                    </td>
                    <td
                      className="px-4 py-3 border-b border-ink/10 font-bold"
                      style={{
                        color: pl >= 0 ? '#2E7D32' : '#C62828',
                      }}
                    >
                      {pl >= 0 ? '+' : ''}
                      {pl.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
