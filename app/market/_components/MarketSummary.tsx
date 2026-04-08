'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  PieChart,
} from 'lucide-react';
import { useItems } from '@/hooks/useItems';

export default function MarketSummary() {
  const { data: response } = useItems();
  const items = response?.data;

  const totalInvested =
    items?.reduce((sum, t) => sum + parseFloat(t.price_bought), 0) ??
    0;
  const totalValue =
    items?.reduce((sum, t) => sum + parseFloat(t.market_price), 0) ??
    0;
  const totalProfit = totalValue - totalInvested;
  const roi =
    totalInvested > 0
      ? ((totalProfit / totalInvested) * 100).toFixed(1)
      : '0';

  const stats = [
    {
      icon: <DollarSign size={24} />,
      label: 'Total Invested',
      value: `$${totalInvested.toFixed(2)}`,
      bg: 'bg-mint',
      color: '',
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'Current Value',
      value: `$${totalValue.toFixed(2)}`,
      bg: 'bg-lavender',
      color: '',
    },
    {
      icon: <ArrowUpRight size={24} />,
      label: 'Total Profit',
      value: `${totalProfit >= 0 ? '+' : ''}$${totalProfit.toFixed(2)}`,
      bg: 'bg-pink-light',
      color: totalProfit >= 0 ? 'text-[#2E7D32]' : 'text-[#C62828]',
    },
    {
      icon: <PieChart size={24} />,
      label: 'ROI',
      value: `${parseFloat(roi) >= 0 ? '+' : ''}${roi}%`,
      bg: 'bg-yellow',
      color:
        parseFloat(roi) >= 0 ? 'text-[#2E7D32]' : 'text-[#C62828]',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((card, i) => (
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
  );
}
