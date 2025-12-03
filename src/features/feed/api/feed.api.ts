import { apiClient } from '../../../api/client';
import type { Post } from '../types/post.types';

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await apiClient.get<Post[]>('/posts');
  return data;
};