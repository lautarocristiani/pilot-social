import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, Chip } from '@mui/material';
import { ArrowBack, Person } from '@mui/icons-material';
import { usePost } from '../features/post/hooks/usePost';
import { CommentList } from '../features/post/components/CommentList';
import { CommentForm } from '../features/post/components/CommentForm';
import { PostDetailSkeleton } from '../features/post/components/PostDetailSkeleton';

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, isError } = usePost(id || '');

  if (isLoading) return <PostDetailSkeleton />;
  
  if (isError || !post) {
    return (
      <Box textAlign="center" py={10}>
        <Typography variant="h5" color="error" gutterBottom>Post no encontrado</Typography>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={() => navigate('/')}>
          Volver al Feed
        </Button>
      </Box>
    );
  }

  return (
    <Box maxWidth="md" mx="auto">
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate('/')} 
        sx={{ mb: 3 }}
        color="inherit"
      >
        Volver
      </Button>

      <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
        {post.title}
      </Typography>

      <Box display="flex" gap={1} mb={4}>
        <Chip icon={<Person />} label={`Autor: Usuario ${post.userId}`} />
      </Box>

      <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
        {post.body}
      </Typography>

      <Divider sx={{ my: 6 }} />

      <CommentForm postId={post.id} />
      <CommentList postId={post.id.toString()} />
    </Box>
  );
};