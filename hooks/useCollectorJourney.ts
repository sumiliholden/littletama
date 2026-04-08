import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';

export interface JourneyItem {
  id: number;
  year: string;
  event: string;
}

export function useCollectorJourney() {
  return useQuery<JourneyItem[]>({
    queryKey: ['collector-journey'],
    queryFn: async () => {
      const { data } = await api.get('/collector-journey');
      return data;
    },
  });
}
