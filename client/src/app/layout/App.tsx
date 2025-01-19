
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import { useAppSelector } from '../store/store';


function App() {
  
  const {darkMode} = useAppSelector(state => state.ui);

  const palletType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
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
