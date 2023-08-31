import { StatsRow } from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TStat } from './StatsContainer';

interface IStatsDisplayProps {
  filteredStats: TStat[];
}

function StatsDisplay({ filteredStats }: IStatsDisplayProps) {
  return (
    <div className="flex w-max flex-col space-y-4">
      {filteredStats.map((stat) => (
        <StatsRow stat={stat} key={stat.name} />
      ))}
    </div>
  );
}

export default StatsDisplay;
