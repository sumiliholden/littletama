'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useCollectingTips } from '@/hooks/useCollectingTips';

export default function CollectingTips() {
  const { data: tips, isLoading } = useCollectingTips();

  return (
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
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex gap-4 items-start animate-pulse"
              >
                <div className="h-8 w-10 bg-ink/10 rounded" />
                <div className="flex-1">
                  <div className="h-5 w-1/3 bg-ink/10 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-ink/10 rounded" />
                </div>
              </div>
            ))
          : tips?.map((tip, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-heading font-bold text-2xl opacity-20 min-w-[40px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-bold mb-1 capitalize">
                    {tip.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70 capitalize">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </motion.div>
  );
}
