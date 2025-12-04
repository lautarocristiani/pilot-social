import { apiClient } from '../../../api/client';
import type { Post } from '../../feed/types/post.types';
import type { Comment } from '../types/comment.types';

export const getPostById = async (id: string): Promise<Post> => {
  const { data } = await apiClient.get<Post>(`/posts/${id}`);
  return data;
};

export const getCommentsByPostId = async (id: string): Promise<Comment[]> => {
  const { data } = await apiClient.get<Comment[]>(`/posts/${id}/comments`);
  return data;
};