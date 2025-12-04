import { List, Typography, Box, CircularProgress } from '@mui/material';
import { useComments } from '../hooks/useComments';
import { CommentItem } from './CommentItem';

interface CommentListProps {
  postId: string;
}

export const CommentList = ({ postId }: CommentListProps) => {
  const { comments, isLoading, isError } = useComments(postId);

  if (isLoading) return <Box display="flex" p={4} justifyContent="center"><CircularProgress /></Box>;
  if (isError) return <Typography color="error">Error cargando comentarios</Typography>;

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        Comentarios 
        <Typography component="span" variant="body2" sx={{ bgcolor: 'action.selected', px: 1, borderRadius: 1 }}>
          {comments.length}
        </Typography>
      </Typography>
      
      <List sx={{ width: '100%' }}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </List>
    </Box>
  );
};