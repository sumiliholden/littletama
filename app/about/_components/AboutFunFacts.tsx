'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const funFacts = [
  {
    emoji: '🥚',
    fact: 'First Tamagotchi was released in 1996 by Bandai',
  },
  { emoji: '🌍', fact: 'Over 91 million units sold worldwide' },
  {
    emoji: '🎀',
    fact: 'Sanrio collabs are the most sought-after by collectors',
  },
  { emoji: '💰', fact: 'Rare vintage models can sell for ₱10000+' },
  {
    emoji: '📱',
    fact: 'Modern models have Bluetooth, Wi-Fi, and color screens',
  },
  {
    emoji: '💜',
    fact: 'The Tamagotchi ON Sanrio is considered a "holy grail" item',
  },
];

export default function AboutFunFacts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl mb-6 flex items-center gap-2.5">
        <Sparkles size={24} /> Tamagotchi Fun Facts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {funFacts.map((item, i) => (
          <motion.div
            key={i}
            className="neo-card p-5 flex flex-col gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-sm leading-relaxed opacity-80">
              {item.fact}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
