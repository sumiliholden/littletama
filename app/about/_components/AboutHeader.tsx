'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function AboutHeader() {
  return (
    <>
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
    </>
  );
}
