import { MatchWidgetHeader } from '@/features/MatchWidget/components/MatchWidgetHeader/components';
import type { TMatch } from '@/features/MatchWidget/schemas';

interface IMatchWidgetHeaderContainerProps {
  data: TMatch;
}

const ARSENAL_BADGE_SRC =
  'https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png';
const FULHAM_BADGE_SRC =
  'https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png';

function MatchWidgetHeaderContainer({
  data,
}: IMatchWidgetHeaderContainerProps) {
  return (
    <MatchWidgetHeader
      competitionName={data.match.meta.competition.name}
      homeTeamName={data.match.contestant[0].name}
      homeTeamBadgeSrc={ARSENAL_BADGE_SRC}
      homeTeamScore={data.match.liveData.matchDetails.scores.ft.home}
      awayTeamName={data.match.contestant[1].name}
      awayTeamScore={data.match.liveData.matchDetails.scores.ft.away}
      awayTeamBadgeSrc={FULHAM_BADGE_SRC}
    />
  );
}

export default MatchWidgetHeaderContainer;
