import { cn } from '@/shared/utils';
import type { ButtonHTMLAttributes } from 'react';

interface IStatsControlsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

function StatsControlsButton({
  className,
  children,
  onClick,
  ...props
}: IStatsControlsButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full bg-[#12181e] px-4 py-2 font-medium text-white hover:bg-[#efe52d] hover:text-black',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default StatsControlsButton;
