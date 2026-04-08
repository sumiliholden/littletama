'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/market', label: 'Market' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-pink-light border-b-3 border-ink">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline text-ink font-heading text-xl font-bold"
        >
          <Star
            size={24}
            fill="var(--color-yellow)"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          />
          <span>LittleTama</span>
        </Link>

        <div className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 no-underline text-ink font-heading font-semibold text-sm border-2 border-transparent rounded-lg transition-all duration-150 hover:bg-pink hover:border-ink hover:shadow-[3px_3px_0px_var(--color-ink)] ${
                pathname === link.href
                  ? 'bg-yellow border-ink! shadow-[3px_3px_0px_var(--color-ink)]'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex bg-cream border-2 border-ink rounded-lg p-2 cursor-pointer shadow-[3px_3px_0px_var(--color-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col px-6 pb-4 gap-1 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 no-underline text-ink font-heading font-semibold border-2 border-transparent rounded-lg transition-all duration-150 hover:bg-yellow hover:border-ink ${
                  pathname === link.href
                    ? 'bg-yellow border-ink!'
                    : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
