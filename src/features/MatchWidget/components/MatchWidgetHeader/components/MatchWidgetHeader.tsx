import {
  CompetitionName,
  ScoreIndicator,
  TeamBadge,
  TeamName,
} from '@/features/MatchWidget/components/MatchWidgetHeader/components';

interface IMatchWidgetHeaderProps {
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
  competitionName: string;
  homeTeamBadgeSrc: string;
  awayTeamBadgeSrc: string;
}

function MatchWidgetHeader({
  homeTeamName,
  awayTeamName,
  homeTeamScore,
  awayTeamScore,
  competitionName,
  homeTeamBadgeSrc,
  awayTeamBadgeSrc,
}: IMatchWidgetHeaderProps) {
  return (
    <div className="h-48 w-full bg-[url('/emirates.webp')] bg-cover">
      <div className="flex h-full w-full  p-8 backdrop-brightness-50">
        <div className="flex w-full flex-col justify-start gap-4">
          <CompetitionName competitionName={competitionName} />
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-col justify-start gap-2">
              <div className="flex flex-row items-center gap-4">
                <TeamBadge src={homeTeamBadgeSrc} />
                <TeamName teamName={homeTeamName} />
              </div>
              <div className="flex flex-row items-center gap-4">
                <TeamBadge src={awayTeamBadgeSrc} />
                <TeamName teamName={awayTeamName} />
              </div>
            </div>
            <ScoreIndicator
              homeTeamScore={homeTeamScore}
              awayTeamScore={awayTeamScore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchWidgetHeader;
