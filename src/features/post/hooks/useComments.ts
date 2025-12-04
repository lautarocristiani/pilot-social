import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getCommentsByPostId } from '../api/post.api';
import { useCommentsStore } from '../../../store/comments.store';

export const useComments = (postId: string) => {
  const { data: apiComments, isLoading, isError } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    enabled: !!postId,
  });

  const { localComments } = useCommentsStore();

  const comments = useMemo(() => {
    const apiData = apiComments || [];
    const localData = [...(localComments[Number(postId)] || [])].reverse();
    
    return [...localData, ...apiData];
  }, [apiComments, localComments, postId]);

  return { comments, isLoading, isError };
};