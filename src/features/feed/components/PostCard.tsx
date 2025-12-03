import { Card, CardContent, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Comment, Person } from '@mui/icons-material';
import type { Post } from '../types/post.types';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" gap={1} mb={2}>
          <Chip icon={<Person />} label={`Usuario ${post.userId}`} size="small" variant="outlined" />
        </Box>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {post.body.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="small" 
          variant="contained" 
          startIcon={<Comment />}
          onClick={() => navigate(`/post/${post.id}`)}
        >
          Leer Comentarios
        </Button>
      </CardActions>
    </Card>
  );
};