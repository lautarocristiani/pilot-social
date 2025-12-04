import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Comment } from '../features/post/types/comment.types';

interface CommentsState {
  localComments: Record<number, Comment[]>;
  addComment: (postId: number, comment: Comment) => void;
  removeComment: (postId: number, commentId: number) => void;
  updateComment: (postId: number, commentId: number, newBody: string) => void;
}

export const useCommentsStore = create<CommentsState>()(
  persist(
    (set) => ({
      localComments: {},
      addComment: (postId, comment) =>
        set((state) => ({
          localComments: {
            ...state.localComments,
            [postId]: [...(state.localComments[postId] || []), comment],
          },
        })),
      removeComment: (postId, commentId) =>
        set((state) => ({
          localComments: {
            ...state.localComments,
            [postId]: (state.localComments[postId] || []).filter((c) => c.id !== commentId),
          },
        })),
      updateComment: (postId, commentId, newBody) =>
        set((state) => ({
          localComments: {
            ...state.localComments,
            [postId]: (state.localComments[postId] || []).map((c) =>
              c.id === commentId ? { ...c, body: newBody } : c
            ),
          },
        })),
    }),
    {
      name: 'comments-storage',
    }
  )
);