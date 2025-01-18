import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../app/models/product';

// Create a react hooks we can use to interact with the API in the backend
export const catalogApi = createApi({
  reducerPath: 'catalogApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api' }),

  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      // Query to fetch all products from the base url + '/products' endpoint
      query: () => ({ url: 'products' }),
    }),

    fetchProductDetails: builder.query<Product, number>({
      // Query to fetch a single product from the base url + '/products/{id}' endpoint
      query: (productId) => ({ url: `products/${productId}` }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;
