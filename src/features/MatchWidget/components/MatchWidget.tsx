import { MatchWidgetHeaderContainer } from '@/features/MatchWidget/components/MatchWidgetHeader/components';
import { MatchWidgetMainContainer } from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TMatch } from '@/features/MatchWidget/schemas';

interface IMatchWidgetProps {
  data: TMatch;
}

function MatchWidget({ data }: IMatchWidgetProps) {
  return (
    <div className="w-max">
      <MatchWidgetHeaderContainer data={data} />
      <MatchWidgetMainContainer data={data} />
    </div>
  );
}

export default MatchWidget;
