import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart, TrendingUp, Archive } from 'lucide-react';
import {
  collectionStats,
  tamagotchiCollection,
} from '../data/collection.ts';

const floatingEmojis = [
  '⭐',
  '🌸',
  '💖',
  '🎀',
  '✨',
  '🌟',
  '💜',
  '🩷',
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-15 select-none"
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Hero */}
      <section className="relative z-[1] max-w-[1200px] mx-auto px-6 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col gap-5 lg:text-left text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-yellow border-2 border-ink rounded-full font-heading font-semibold text-sm shadow-[3px_3px_0_var(--color-ink)] w-fit mx-auto lg:mx-0">
            <Sparkles size={16} />
            <span>Tamagotchi Collector</span>
          </div>
          <h1 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight">
            My Tamagotchi
            <br />
            <span className="bg-gradient-to-br from-pink to-lavender bg-clip-text text-transparent">
              Portfolio ★
            </span>
          </h1>
          <p className="text-lg leading-relaxed opacity-80 max-w-[480px] mx-auto lg:mx-0">
            A curated collection of virtual pet treasures — from
            vintage classics to modern Sanrio collaborations. Track,
            showcase, and celebrate every shell!
          </p>
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <Link to="/collection" className="neo-btn bg-pink">
              <Heart size={18} />
              View Collection
            </Link>
            <Link to="/market" className="neo-btn bg-lavender">
              <TrendingUp size={18} />
              Market Values
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-[280px] h-[360px] bg-gradient-to-br from-pink to-pink-dark border-3 border-ink rounded-[140px_140px_100px_100px] shadow-[8px_8px_0_var(--color-ink)] flex flex-col items-center justify-center gap-6 relative">
            <span className="absolute top-5 right-10 text-xl text-cream">
              ♡
            </span>
            <div className="w-[140px] h-[140px] bg-mint border-3 border-ink rounded-xl flex items-center justify-center shadow-[inset_3px_3px_0_rgba(0,0,0,0.1)]">
              <motion.span
                className="text-6xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🐣
              </motion.span>
            </div>
            <div className="flex gap-4">
              <span className="w-6 h-6 bg-yellow border-2 border-ink rounded-full shadow-[2px_2px_0_var(--color-ink)]" />
              <span className="w-6 h-6 bg-yellow border-2 border-ink rounded-full shadow-[2px_2px_0_var(--color-ink)]" />
              <span className="w-6 h-6 bg-yellow border-2 border-ink rounded-full shadow-[2px_2px_0_var(--color-ink)]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-[1] max-w-[1200px] mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            {
              icon: <Archive size={28} />,
              value: collectionStats.totalItems,
              label: 'Tamagotchis',
              bg: 'bg-pink-light',
            },
            {
              icon: <TrendingUp size={28} />,
              value: `$${collectionStats.totalValue.toFixed(0)}`,
              label: 'Total Value',
              bg: 'bg-mint',
            },
            {
              icon: <Sparkles size={28} />,
              value: `${collectionStats.profitPercentage}%`,
              label: 'ROI',
              bg: 'bg-lavender',
            },
            {
              icon: <Heart size={28} />,
              value:
                collectionStats.rarityBreakdown['Ultra Rare'] +
                collectionStats.rarityBreakdown['Grail'],
              label: 'Rare+ Items',
              bg: 'bg-yellow',
            },
          ].map((stat) => (
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

      {/* Featured */}
      <section className="relative z-[1] max-w-[1200px] mx-auto px-6 pt-12 pb-20">
        <h2 className="text-2xl text-center mb-8">
          <span className="text-yellow-dark">★</span> Featured Pieces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[400px] md:max-w-none mx-auto">
          {tamagotchiCollection.slice(0, 3).map((tama, i) => (
            <motion.div
              key={tama.id}
              className="neo-card p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <div className="text-4xl w-20 h-20 bg-pink-light border-2 border-ink rounded-2xl flex items-center justify-center shadow-[3px_3px_0_var(--color-ink)]">
                {tama.image}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg">{tama.name}</h3>
                <p className="text-sm opacity-60">{tama.series}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="neo-badge bg-pink-light">
                    {tama.rarity}
                  </span>
                  <span className="font-heading font-bold text-xl text-lavender-dark">
                    ${tama.marketValue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/collection" className="neo-btn bg-mint">
            See All Collection →
          </Link>
        </div>
      </section>
    </div>
  );
}
