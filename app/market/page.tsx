import { BarChart3 } from 'lucide-react';
import MarketSummary from './_components/MarketSummary';
import RarityBreakdown from './_components/RarityBreakdown';
import MarketRankings from './_components/MarketRankings';
import ValuationTable from './_components/ValuationTable';

export default function Market() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex items-center justify-center gap-3 text-4xl">
          <BarChart3 size={32} />
          Market Overview
        </h1>
        <p className="mt-2 text-base opacity-60">
          Track your collection&apos;s value and market trends
        </p>
      </div>

      <MarketSummary />
      <RarityBreakdown />
      <MarketRankings />
      <ValuationTable />
    </div>
  );
}
