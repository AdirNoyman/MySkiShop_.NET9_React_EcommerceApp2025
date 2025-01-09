import { useState } from 'react';

import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const palletType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar switchDarkMode={handleDarkMode} />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="xl" sx={{ mt: 14 }}>
          {/* Outlet = the children (components/pages) of our app */}
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
