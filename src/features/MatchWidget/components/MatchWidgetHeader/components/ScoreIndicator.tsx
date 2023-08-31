interface IScoreIndicator {
  homeTeamScore: number;
  awayTeamScore: number;
}

function ScoreIndicator({ homeTeamScore, awayTeamScore }: IScoreIndicator) {
  return (
    <div className="flex w-max flex-col overflow-hidden rounded-md bg-white">
      <div className="grid h-8 w-8 place-items-center">{homeTeamScore}</div>
      <div className="grid h-8 w-8 place-items-center">{awayTeamScore}</div>
    </div>
  );
}

export default ScoreIndicator;
