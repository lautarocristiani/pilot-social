import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { FeedPage } from '../pages/FeedPage';
import { PostPage } from '../pages/PostPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};