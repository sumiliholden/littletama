'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useCollectorJourney } from '@/hooks/useCollectorJourney';

const timelineColors = [
  'var(--color-pink)',
  'var(--color-lavender)',
  'var(--color-mint)',
  'var(--color-yellow)',
  'var(--color-sky)',
];
export default function CollectorJourney() {
  const { data: timeline, isLoading } = useCollectorJourney();

  return (
    <section className="mb-12">
      <h2 className="text-2xl mb-6 flex items-center gap-2.5">
        <Calendar size={24} /> My Collector Journey
      </h2>
      <div className="flex flex-col gap-4 relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[3px] before:bg-ink before:opacity-15 before:rounded">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-[27px] top-4 w-4 h-4 border-3 border-ink rounded-full z-[1] bg-cream" />
                <div className="neo-card p-4 px-5 border-l-4 border-l-ink/20 animate-pulse">
                  <div className="h-4 w-16 bg-ink/10 rounded mb-2" />
                  <div className="h-5 w-3/4 bg-ink/10 rounded" />
                </div>
              </motion.div>
            ))
          : timeline?.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div
                  className="absolute -left-[27px] top-4 w-4 h-4 border-3 border-ink rounded-full z-[1]"
                  style={{
                    background:
                      timelineColors[i % timelineColors.length],
                  }}
                />
                <div
                  className="neo-card p-4 px-5 border-l-4"
                  style={{
                    borderLeftColor:
                      timelineColors[i % timelineColors.length],
                  }}
                >
                  <span className="font-heading font-bold text-sm opacity-50 uppercase tracking-widest">
                    {item.year}
                  </span>
                  <p className="mt-1 text-base leading-relaxed capitalize">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
