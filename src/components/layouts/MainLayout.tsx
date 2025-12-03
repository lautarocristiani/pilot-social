import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Navbar } from './Navbar';

export const MainLayout = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      
      <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
};