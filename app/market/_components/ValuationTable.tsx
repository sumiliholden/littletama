'use client';

import { motion } from 'framer-motion';
import { useItems } from '@/hooks/useItems';
import { formatLabel } from '@/lib/format';

const rarityBg: Record<string, string> = {
  common: 'bg-mint',
  uncommon: 'bg-sky',
  rare: 'bg-lavender',
  ultra_rare: 'bg-pink',
  grail: 'bg-yellow',
};

export default function ValuationTable() {
  const { data: response } = useItems();
  const items = response?.data ?? [];

  const sorted = [...items].sort(
    (a, b) => parseFloat(b.market_price) - parseFloat(a.market_price),
  );

  return (
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
              const pl =
                parseFloat(tama.market_price) -
                parseFloat(tama.price_bought);
              return (
                <tr
                  key={tama.id}
                  className="hover:bg-pink-light transition-colors"
                >
                  <td className="px-4 py-3 border-b border-ink/10 align-middle">
                    <span className="mr-2">{tama.avatar}</span>
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
                      className={`neo-badge ${rarityBg[tama.rarity] ?? ''}`}
                    >
                      {formatLabel(tama.rarity)}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-ink/10">
                    {formatLabel(tama.condition)}
                  </td>
                  <td className="px-4 py-3 border-b border-ink/10">
                    ₱{tama.price_bought}
                  </td>
                  <td className="px-4 py-3 border-b border-ink/10 font-bold">
                    ₱{tama.market_price}
                  </td>
                  <td
                    className="px-4 py-3 border-b border-ink/10 font-bold"
                    style={{
                      color: pl >= 0 ? '#2E7D32' : '#C62828',
                    }}
                  >
                    {pl >= 0 ? '+' : ''}₱{pl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
