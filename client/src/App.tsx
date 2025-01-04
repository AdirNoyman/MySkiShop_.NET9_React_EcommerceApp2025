import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState<{name: string, price:number}[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>MySkiShop</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;

