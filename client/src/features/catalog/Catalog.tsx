import ProductsList from './ProductsList';
import { useFetchProductsQuery } from './catalogApi';

const Catalog = () => {

  const {data, isLoading} = useFetchProductsQuery();

  if (isLoading || !data) return <div>Loading 🙄...</div>;
  
  return (
    <>
      <ProductsList products={data} />
    </>
  );
};

export default Catalog;
