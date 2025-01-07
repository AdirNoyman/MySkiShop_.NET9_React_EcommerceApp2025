import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import Catalog from '../../features/catalog/Catalog';
import { Box, Container,createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './NavBar';


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  
  const palletType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {

        default: (palletType === 'light') ? '#eaeaea' : '#121212',
      }
    }
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar switchDarkMode={handleDarkMode}/>
     <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
     <Container maxWidth="xl" sx={{ mt: 14 }}>
        <Catalog products={products} />
      </Container>
     </Box>
    </ThemeProvider>
  );
}

export default App;
