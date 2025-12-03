import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import { RocketLaunch, DarkMode, LightMode } from '@mui/icons-material';
import { useUiStore } from '../../store/ui.store';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useUiStore();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper', color: 'text.primary', borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box 
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 1, flexGrow: 1 }} 
            onClick={() => navigate('/')}
          >
            <RocketLaunch color="primary" />
            <Typography variant="h6" fontWeight="bold" color="primary">
              PilotSocial
            </Typography>
          </Box>

          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};