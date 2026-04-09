'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, TrendingUp, Egg } from 'lucide-react';
import { useItems } from '@/hooks/useItems';

export default function QuickStats() {
  const { data: response } = useItems();
  const items = response?.data;

  const stats = [
    {
      icon: <Egg size={28} />,
      value: response?.total ?? 0,
      label: 'Tamagotchis',
      bg: 'bg-pink-light',
    },
    {
      icon: <TrendingUp size={28} />,
      value: `₱${items?.reduce((sum, t) => sum + parseFloat(t.market_price), 0).toFixed(0) ?? 0}`,
      label: 'Total Value',
      bg: 'bg-mint',
    },
    {
      icon: <Sparkles size={28} />,
      value: `${items && items.length > 0 ? (((items.reduce((s, t) => s + parseFloat(t.market_price), 0) - items.reduce((s, t) => s + parseFloat(t.price_bought), 0)) / items.reduce((s, t) => s + parseFloat(t.price_bought), 0)) * 100).toFixed(1) : 0}%`,
      label: 'ROI',
      bg: 'bg-lavender',
    },
    {
      icon: <Heart size={28} />,
      value:
        items?.filter(
          (t) =>
            t.rarity === 'rare' ||
            t.rarity === 'ultra_rare' ||
            t.rarity === 'grail',
        ).length ?? 0,
      label: 'Rare+ Items',
      bg: 'bg-yellow',
    },
  ];

  return (
    <section className="relative z-[1] max-w-[1200px] mx-auto px-6 py-10">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`neo-card ${stat.bg} p-6 flex flex-col items-center gap-2 text-center`}
          >
            {stat.icon}
            <span className="font-heading text-3xl font-bold">
              {stat.value}
            </span>
            <span className="text-xs font-semibold opacity-70 uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
