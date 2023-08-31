import {
  StatsProgressBar,
  StatsProgressBarTypes,
} from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TStat } from './StatsContainer';

interface IStatsRowProps {
  stat: TStat;
}

function StatsRow({ stat: { name, home, away } }: IStatsRowProps) {
  return (
    <div className="text-white">
      <div className="flex flex-row items-center justify-between">
        <p>{home}</p>
        <p>{name}</p>
        <p>{away}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <StatsProgressBar value={home} type={StatsProgressBarTypes.Home} />
        <StatsProgressBar value={away} type={StatsProgressBarTypes.Away} />
      </div>
    </div>
  );
}

export default StatsRow;
