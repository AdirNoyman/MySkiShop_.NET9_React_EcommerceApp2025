import { Product } from "../../app/models/product";
import ProductsList from "./ProductsList";

type Props = {

  products: Product[];
  
}

const Catalog = ({products}: Props) => {
  return (
    <>
      <ProductsList products={products} />
      
    </>
  );
};

export default Catalog;
