import type { ImgHTMLAttributes } from 'react';

interface ITeamBadgeProps extends ImgHTMLAttributes<HTMLImageElement> {}

function TeamBadge({ src }: ITeamBadgeProps) {
  return <img src={src} className="h-8 w-8" />;
}

export default TeamBadge;
