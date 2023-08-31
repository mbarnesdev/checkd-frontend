import { Endpoints, httpClient } from '@/config';
import { MatchSchema } from '@/features/MatchWidget/schemas';

export const fetchMatch = async () => {
  const { data } = await httpClient.get({
    url: Endpoints.Queries.Match,
  });

  return MatchSchema.parse(data);
};
