import { Box, Typography } from '@mui/material';
import { FeedList } from '../features/feed/components/FeedList';

export const FeedPage = () => {
  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Explorar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Descubre las últimas novedades de la comunidad
        </Typography>
      </Box>

      <FeedList />
    </Box>
  );
};