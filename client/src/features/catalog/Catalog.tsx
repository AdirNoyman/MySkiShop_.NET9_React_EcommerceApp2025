import { Button } from "@mui/material";
import { Product } from "../../app/models/product";

type Props = {

  products: Product[];
  addProduct: () => void;
}

const Catalog = ({products, addProduct}: Props) => {
  return (
    <>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <Button variant='contained' onClick={addProduct}>Add Product</Button>
    </>
  );
};

export default Catalog;
