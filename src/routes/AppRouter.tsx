import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { Box, Typography } from '@mui/material';

const FeedPage = () => <Box><Typography variant="h4">Feed de Noticias</Typography></Box>;
const PostDetailPage = () => <Box><Typography variant="h4">Detalle del Post</Typography></Box>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};