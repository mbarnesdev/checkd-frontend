import {
  PaneWrapper,
  StatsContainer,
} from '@/features/MatchWidget/components/MatchWidgetMain/components';
import type { TMatch } from '../../../schemas';

interface IMatchWidgetMainContainerProps {
  data: TMatch;
}

function MatchWidgetMainContainer({ data }: IMatchWidgetMainContainerProps) {
  return (
    <div className="bg-primary px-6 pb-6">
      <PaneWrapper name="General">
        <StatsContainer data={data} />
      </PaneWrapper>
    </div>
  );
}

export default MatchWidgetMainContainer;
