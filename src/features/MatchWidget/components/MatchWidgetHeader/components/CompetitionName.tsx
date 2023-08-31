interface ICompetitionNameProps {
  competitionName: string;
}

function CompetitionName({ competitionName }: ICompetitionNameProps) {
  return <h1 className="font-bold text-white">{competitionName}</h1>;
}

export default CompetitionName;
