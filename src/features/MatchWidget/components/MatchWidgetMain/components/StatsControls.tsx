import {
  StatsControlsButton,
  StatsSubsets,
} from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TStatsSubset } from '@/features/MatchWidget/components/MatchWidgetMain/components';

interface IStatsControlsProps {
  setStatsSubset: (value: TStatsSubset) => void;
}

function StatsControls({ setStatsSubset }: IStatsControlsProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <StatsControlsButton
        onClick={() => setStatsSubset(StatsSubsets.FullTime)}
      >
        Full Time
      </StatsControlsButton>
      <StatsControlsButton
        onClick={() => setStatsSubset(StatsSubsets.FirstHalf)}
      >
        1st Half
      </StatsControlsButton>
      <StatsControlsButton
        onClick={() => setStatsSubset(StatsSubsets.SecondHalf)}
      >
        2nd Half
      </StatsControlsButton>
    </div>
  );
}

export default StatsControls;
