import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '@/config';
import { fetchMatch } from '@/features/MatchWidget/api';
import type { TMatch } from '../../schemas';

export const useMatch = () => {
  return useQuery<TMatch>({
    queryKey: [Endpoints.Queries.Match],
    queryFn: fetchMatch,
  });
};
