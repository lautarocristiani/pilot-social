import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../api/post.api';

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};