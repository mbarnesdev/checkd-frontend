interface ITeamNameProps {
  teamName: string;
}

function TeamName({ teamName }: ITeamNameProps) {
  return <h1 className="font-medium text-white">{teamName}</h1>;
}

export default TeamName;
