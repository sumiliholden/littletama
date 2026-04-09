'use client';

import { motion } from 'framer-motion';

const emojis = ['⭐', '🌸', '💖', '🎀', '✨', '🌟', '💜', '🩷'];

export default function FloatingEmojis() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl opacity-15 select-none"
          style={{
            left: `₱{10 + i * 11}%`,
            top: `₱{15 + (i % 3) * 20}%`,
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
  );
}
