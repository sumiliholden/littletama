import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';

export interface CollectingTip {
  id: number;
  num: string;
  title: string;
  description: string;
}

export function useCollectingTips() {
  return useQuery<CollectingTip[]>({
    queryKey: ['collecting-tips'],
    queryFn: async () => {
      const { data } = await api.get('/collecting-tips');
      return data;
    },
  });
}
