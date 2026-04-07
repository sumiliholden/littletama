import { motion } from 'framer-motion';
import {
  Heart,
  Star,
  Sparkles,
  Calendar,
  MapPin,
} from 'lucide-react';

const timeline = [
  {
    year: '2006',
    event: 'Got my first Tamagotchi Connection as a birthday gift 🎂',
    color: 'var(--color-pink)',
  },
  {
    year: '2008',
    event:
      'Discovered the Music Star — became obsessed with the band feature 🎸',
    color: 'var(--color-lavender)',
  },
  {
    year: '2019',
    event: 'Rediscovered Tamagotchi with the Meets/ON series 💜',
    color: 'var(--color-mint)',
  },
  {
    year: '2020',
    event: 'Scored the ultra-rare Sanrio ON — the crown jewel 🌸',
    color: 'var(--color-yellow)',
  },
  {
    year: '2022',
    event:
      'Started seriously collecting and tracking market values 📊',
    color: 'var(--color-sky)',
  },
  {
    year: '2023',
    event:
      'Collection hit double digits! Built this portfolio to showcase it all ★',
    color: 'var(--color-pink)',
  },
];

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
  { emoji: '💰', fact: 'Rare vintage models can sell for $500+' },
  {
    emoji: '📱',
    fact: 'Modern models have Bluetooth, Wi-Fi, and color screens',
  },
  {
    emoji: '💜',
    fact: 'The Tamagotchi ON Sanrio is considered a "holy grail" item',
  },
];

export default function About() {
  return (
    <div className="max-w-[900px] mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h1
          className="flex items-center justify-center gap-3 text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heart
            size={32}
            fill="var(--color-pink)"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          />
          About This Collection
        </motion.h1>
        <p className="mt-2 text-base opacity-60">
          The story behind the shells ♡
        </p>
      </div>

      {/* Intro */}
      <motion.div
        className="neo-card bg-pink-light! p-8 flex flex-col md:flex-row gap-6 items-start md:items-start mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="w-20 h-20 bg-cream border-2 border-ink rounded-2xl flex items-center justify-center shadow-[3px_3px_0_var(--color-ink)] shrink-0 mx-auto md:mx-0">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl block"
          >
            🐣
          </motion.span>
        </div>
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-xl">Hey there! ★</h2>
          <p className="text-base leading-relaxed opacity-80">
            Welcome to my Tamagotchi portfolio — a labor of love
            dedicated to these adorable virtual pets that have been
            part of my life since childhood. What started as a
            nostalgic hobby has evolved into a passionate collection
            spanning multiple generations of Tamagotchi devices.
          </p>
          <p className="text-base leading-relaxed opacity-80">
            I'm especially drawn to Sanrio collaborations and rare
            limited editions. Each piece in my collection has its own
            story, and this site is my way of sharing that journey
            with fellow collectors and enthusiasts.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6 flex items-center gap-2.5">
          <Calendar size={24} /> My Collector Journey
        </h2>
        <div className="flex flex-col gap-4 relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[3px] before:bg-ink before:opacity-15 before:rounded">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="relative"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div
                className="absolute -left-[27px] top-4 w-4 h-4 border-3 border-ink rounded-full z-[1]"
                style={{ background: item.color }}
              />
              <div
                className="neo-card p-4 px-5 border-l-4"
                style={{ borderLeftColor: item.color }}
              >
                <span className="font-heading font-bold text-sm opacity-50 uppercase tracking-widest">
                  {item.year}
                </span>
                <p className="mt-1 text-base leading-relaxed">
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
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

      {/* Collecting Tips */}
      <motion.div
        className="neo-card bg-mint! p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-2xl mb-6 flex items-center gap-2.5">
          <Star
            size={24}
            fill="var(--color-yellow)"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          />
          Collecting Tips
        </h2>
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
              title: 'Check the Shell Condition',
              desc: 'Scratches and discoloration significantly affect value. Always ask for detailed photos.',
            },
            {
              num: '02',
              title: 'Verify Authenticity',
              desc: 'Look for the official Bandai logo and proper packaging. Bootlegs are common in the market.',
            },
            {
              num: '03',
              title: 'Track Market Prices',
              desc: 'Values fluctuate! Keep an eye on sold listings, not just asking prices.',
            },
            {
              num: '04',
              title: 'Join the Community',
              desc: 'Connect with other collectors on Discord, Reddit, and Instagram for trades and tips.',
            },
          ].map((tip) => (
            <div key={tip.num} className="flex gap-4 items-start">
              <span className="font-heading font-bold text-2xl opacity-20 min-w-[40px]">
                {tip.num}
              </span>
              <div>
                <h3 className="text-base font-bold mb-1">
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Where to Find */}
      <motion.div
        className="neo-card p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl mb-6 flex items-center gap-2.5">
          <MapPin size={24} /> Where to Find Tamagotchis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: 'Japan Yahoo Auctions',
              desc: 'Best for JP exclusives',
              bg: 'bg-pink-light',
            },
            {
              name: 'Mercari Japan',
              desc: 'Great prices, use a proxy',
              bg: 'bg-mint',
            },
            {
              name: 'eBay',
              desc: 'Wide selection, verify sellers',
              bg: 'bg-lavender',
            },
            {
              name: 'r/tamagotchi',
              desc: 'Community trades & sales',
              bg: 'bg-yellow',
            },
          ].map((place) => (
            <div
              key={place.name}
              className={`${place.bg} p-4 px-5 border-2 border-ink rounded-xl shadow-[3px_3px_0_var(--color-ink)]`}
            >
              <h3 className="text-sm font-bold mb-1">{place.name}</h3>
              <p className="text-xs opacity-60">{place.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
