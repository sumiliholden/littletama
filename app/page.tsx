import FloatingEmojis from './_components/FloatingEmojis';
import HeroSection from './_components/HeroSection';
import QuickStats from './_components/QuickStats';
import FeaturedPieces from './_components/FeaturedPieces';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <FloatingEmojis />
      <HeroSection />
      <QuickStats />
      <FeaturedPieces />
    </div>
  );
}
