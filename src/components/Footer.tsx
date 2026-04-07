import { Heart, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pink-light border-t-3 border-ink mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Star
              size={20}
              fill="var(--color-yellow)"
              stroke="var(--color-ink)"
              strokeWidth={2.5}
            />
            <span className="font-heading font-bold text-lg">
              TamaPortfolio
            </span>
          </div>
          <p className="text-sm opacity-80">
            Collecting virtual pets, one shell at a time ★
          </p>
        </div>
        <div className="h-[2px] bg-ink opacity-15 my-5" />
        <div className="flex justify-between items-center flex-wrap gap-2 text-sm opacity-70">
          <p className="flex items-center gap-1">
            Made with{' '}
            <Heart
              size={14}
              fill="var(--color-pink-dark)"
              stroke="var(--color-pink-dark)"
            />{' '}
            and lots of Tamagotchi care
          </p>
          <p className="font-heading">
            &copy; {new Date().getFullYear()} TamaPortfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
