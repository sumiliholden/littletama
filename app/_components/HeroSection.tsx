'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
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
          A curated collection of virtual pet treasures — from vintage
          classics to modern Sanrio collaborations. Track, showcase,
          and celebrate every shell!
        </p>
        <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
          <Link href="/collection" className="neo-btn bg-pink">
            <Heart size={18} />
            View Collection
          </Link>
          <Link href="/market" className="neo-btn bg-lavender">
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
  );
}
