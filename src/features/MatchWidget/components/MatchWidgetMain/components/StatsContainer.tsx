import { useMemo, useState } from 'react';
import { keyBy } from 'lodash';
import {
  StatsControls,
  StatsDisplay,
} from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TMatch } from '@/features/MatchWidget/schemas';

export const StatsSubsets = {
  FullTime: 'value',
  FirstHalf: 'fh',
  SecondHalf: 'sh',
} as const;

export type TStatsSubset = (typeof StatsSubsets)[keyof typeof StatsSubsets];

interface IStatsContainerProps {
  data: TMatch;
}

export type TStat = {
  name: string;
  home: number;
  away: number;
};

const StatTypes = {
  Possesion: 'possessionPercentage',
  Shots: 'totalScoringAtt',
  ShotsOnTarget: 'ontargetScoringAtt',
  Corners: 'wonCorners',
} as const;

const parseStats = (data: TMatch, statsSubset: TStatsSubset): TStat[] => {
  const homeStats = keyBy(data.match.liveData.lineups.home.stats, 'type');
  const awayStats = keyBy(data.match.liveData.lineups.away.stats, 'type');

  return [
    {
      name: 'Possesion',
      home: homeStats[StatTypes.Possesion][statsSubset],
      away: awayStats[StatTypes.Possesion][statsSubset],
    },
    {
      name: 'Shots',
      home: homeStats[StatTypes.Shots][statsSubset],
      away: awayStats[StatTypes.Shots][statsSubset],
    },
    {
      name: 'Shots on Target',
      home: homeStats[StatTypes.ShotsOnTarget][statsSubset],
      away: awayStats[StatTypes.ShotsOnTarget][statsSubset],
    },
    {
      name: 'Corners',
      home: homeStats[StatTypes.Corners][statsSubset],
      away: awayStats[StatTypes.Corners][statsSubset],
    },
  ];
};

function StatsContainer({ data }: IStatsContainerProps) {
  const [statsSubset, setStatsSubset] = useState<TStatsSubset>(
    StatsSubsets.FullTime
  );

  const filteredStats = useMemo(
    () => parseStats(data, statsSubset),
    [data, statsSubset]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <StatsControls setStatsSubset={setStatsSubset} />
      <StatsDisplay filteredStats={filteredStats} />
    </div>
  );
}

export default StatsContainer;
