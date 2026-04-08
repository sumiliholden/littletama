import { useInfiniteQuery } from '@tanstack/react-query';
import api from '@/lib/axios';
import type { Tamagotchi } from '@/data/collection';
import type { PaginatedResponse } from '@/hooks/useItems';

interface UseInfiniteItemsParams {
  search?: string;
  rarity?: string;
  condition?: string;
}

export function useInfiniteItems(params?: UseInfiniteItemsParams) {
  return useInfiniteQuery<PaginatedResponse<Tamagotchi>>({
    queryKey: ['items', 'infinite', params],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get('/items', {
        params: {
          page: pageParam,
          ...(params?.search ? { search: params.search } : {}),
          ...(params?.rarity && params.rarity !== 'all'
            ? { rarity: params.rarity }
            : {}),
          ...(params?.condition && params.condition !== 'all'
            ? { condition: params.condition }
            : {}),
        },
      });
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.current_page < lastPage.last_page
        ? lastPage.current_page + 1
        : undefined,
  });
}
