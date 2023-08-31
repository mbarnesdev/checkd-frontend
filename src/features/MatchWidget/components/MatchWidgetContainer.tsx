import { MatchWidget } from '@/features/MatchWidget/components';
import { useMatch } from '@/features/MatchWidget/hooks';

function MatchWidgetContainer() {
  const { data, isLoading, isError, error } = useMatch();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <MatchWidget data={data} />;
}

export default MatchWidgetContainer;
