import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import Catalog from '../../features/catalog/Catalog';
import { Container, Typography } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProductToCart = () => {
    setProducts((prevState) => [
      ...products,
      {
        id: 1,
        name: 'Angular Speedster Board 2000',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
        price: prevState[0].price + 100,
        pictureUrl: 'https://picsum.photos/seed/picsum/200/300',
        type: 'Boards',
        brand: 'Angular',
        quantityInStock: 100,
      },
    ]);
  };

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>MySkiShop</Typography>
      <Catalog products={products} addProduct={addProductToCart} />
    </Container>
  );
}

export default App;
