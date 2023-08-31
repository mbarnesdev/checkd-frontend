import { motion } from 'framer-motion';
import { cn } from '@/shared/utils';

export const StatsProgressBarTypes = {
  Home: 'Home',
  Away: 'Away',
} as const;

interface IStatsProgressBarProps {
  value: number;
  type: keyof typeof StatsProgressBarTypes;
}

const DEFAULT_TRANSITION_DURATION = 0.65;

function StatsProgressBar({ value, type }: IStatsProgressBarProps) {
  return (
    <div
      className={cn(
        'flex h-2 w-80 flex-row items-stretch overflow-hidden rounded-lg bg-slate-200',
        {
          'justify-end': type === StatsProgressBarTypes.Home,
          'justify-start': type === StatsProgressBarTypes.Away,
        }
      )}
    >
      <motion.div
        className={cn('h-full', {
          'bg-home': type === StatsProgressBarTypes.Home,
          'bg-away': type === StatsProgressBarTypes.Away,
        })}
        initial={false}
        animate={{ width: `${value}%` }}
        transition={{
          duration: DEFAULT_TRANSITION_DURATION,
        }}
      />
    </div>
  );
}

export default StatsProgressBar;
