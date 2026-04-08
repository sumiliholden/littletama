'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Loader2 } from 'lucide-react';
import { formatLabel } from '@/lib/format';
import { useInfiniteItems } from '@/hooks/useInfiniteItems';
import TamagotchiCard from '@/components/TamagotchiCard';

const rarities = [
  'all',
  'common',
  'uncommon',
  'rare',
  'ultra_rare',
  'grail',
];
const conditions = ['all', 'mint', 'excellent', 'good', 'fair'];

export default function Collection() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');
  const [conditionFilter, setConditionFilter] = useState('all');
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteItems({
    search: debouncedSearch,
    rarity: rarityFilter,
    condition: conditionFilter,
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '200px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleObserver]);

  const allItems = data?.pages.flatMap((page) => page.data) ?? [];
  const total = data?.pages[0]?.total ?? 0;

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="flex items-center justify-center gap-3 text-4xl">
          <Star
            size={32}
            fill="var(--color-yellow)"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          />
          My Collection
        </h1>
        <p className="mt-2 text-base opacity-60">
          Every Tamagotchi tells a story ♡
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative max-w-[400px]">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50"
          />
          <input
            type="text"
            placeholder="Search by name or series..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-10 pr-4 font-body text-base border-3 border-ink rounded-xl shadow-[4px_4px_0_var(--color-ink)] outline-none bg-cream focus:shadow-[6px_6px_0_var(--color-ink)] transition-shadow"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={16} />
          <span className="font-heading font-semibold text-sm">
            Rarity:
          </span>
          {rarities.map((r) => (
            <button
              key={r}
              className={`px-3.5 py-1.5 font-heading text-xs font-semibold border-2 border-ink rounded-full bg-cream cursor-pointer transition-all shadow-[2px_2px_0_var(--color-ink)] hover:bg-pink-light ${
                rarityFilter === r
                  ? 'bg-pink! -translate-x-px -translate-y-px shadow-[3px_3px_0_var(--color-ink)]'
                  : ''
              }`}
              onClick={() => setRarityFilter(r)}
            >
              {formatLabel(r)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={16} />
          <span className="font-heading font-semibold text-sm">
            Condition:
          </span>
          {conditions.map((c) => (
            <button
              key={c}
              className={`px-3.5 py-1.5 font-heading text-xs font-semibold border-2 border-ink rounded-full bg-cream cursor-pointer transition-all shadow-[2px_2px_0_var(--color-ink)] hover:bg-pink-light ${
                conditionFilter === c
                  ? 'bg-pink! -translate-x-px -translate-y-px shadow-[3px_3px_0_var(--color-ink)]'
                  : ''
              }`}
              onClick={() => setConditionFilter(c)}
            >
              {formatLabel(c)}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm opacity-60 mb-5">
        {total} Tamagotchi{total !== 1 && 's'} found
      </p>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="neo-card p-6 flex flex-col gap-4 animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
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
          : allItems.map((tama, i) => (
              <TamagotchiCard key={tama.id} tama={tama} index={i} />
            ))}
      </div>

      {/* Infinite scroll sentinel */}
      <div ref={observerRef} className="h-10" />
      {isFetchingNextPage && (
        <div className="flex justify-center py-6">
          <Loader2 size={28} className="animate-spin opacity-50" />
        </div>
      )}
    </div>
  );
}
