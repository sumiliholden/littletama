'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useItems } from '@/hooks/useItems';
import TamagotchiCard from '@/components/TamagotchiCard';

export default function FeaturedPieces() {
  const { data: response, isLoading } = useItems();
  const items = response?.data;

  return (
    <section className="relative z-[1] max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      <h2 className="text-2xl text-center mb-8">
        <span className="text-yellow-dark">★</span> Featured Pieces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[400px] md:max-w-none mx-auto">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="neo-card p-6 flex flex-col gap-4 animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.1,
                }}
              >
                <div className="w-20 h-20 bg-pink-light/50 border-2 border-ink/10 rounded-2xl" />
                <div className="flex flex-col gap-2">
                  <div className="h-5 w-3/4 bg-ink/10 rounded" />
                  <div className="h-4 w-1/2 bg-ink/10 rounded" />
                  <div className="flex items-center justify-between mt-2">
                    <div className="h-6 w-20 bg-ink/10 rounded-full" />
                    <div className="h-6 w-16 bg-ink/10 rounded" />
                  </div>
                </div>
              </motion.div>
            ))
          : items
              ?.filter((item) => item.is_featured)
              .map((tama, i) => (
                <TamagotchiCard key={tama.id} tama={tama} index={i} />
              ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/collection" className="neo-btn bg-mint">
          See All Collection →
        </Link>
      </div>
    </section>
  );
}
