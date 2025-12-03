import { useState, useMemo } from 'react';
import { Grid, TextField, MenuItem, Box, InputAdornment, Typography, Paper } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import { usePosts } from '../hooks/usePosts';
import { PostCard } from './PostCard';
import { FeedSkeleton } from './FeedSkeleton';

export const FeedList = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<string>('all');

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesUser = selectedUser === 'all' || post.userId.toString() === selectedUser;
      return matchesSearch && matchesUser;
    });
  }, [posts, searchTerm, selectedUser]);

  const uniqueUsers = useMemo(() => {
    if (!posts) return [];
    return Array.from(new Set(posts.map(p => p.userId)));
  }, [posts]);

  if (isLoading) return <FeedSkeleton />;
  if (isError) return <Typography color="error">Error al cargar los posts.</Typography>;

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 4, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          fullWidth
          placeholder="Buscar en posts..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
          }}
        />
        
        <TextField
          select
          label="Filtrar por Autor"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><FilterList /></InputAdornment>,
          }}
        >
          <MenuItem value="all">Todos los usuarios</MenuItem>
          {uniqueUsers.map(userId => (
            <MenuItem key={userId} value={userId.toString()}>Usuario {userId}</MenuItem>
          ))}
        </TextField>
      </Paper>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Mostrando {filteredPosts.length} publicaciones
      </Typography>

      <Grid container spacing={3}>
        {filteredPosts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
      
      {filteredPosts.length === 0 && (
        <Box textAlign="center" py={10}>
          <Typography variant="h6" color="text.secondary">No se encontraron resultados</Typography>
        </Box>
      )}
    </Box>
  );
};