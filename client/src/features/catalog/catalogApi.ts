import { createApi } from '@reduxjs/toolkit/query/react';
import { Product } from '../../app/models/product';
import { baseQueryWithErrorHandling } from '../../app/api/baseApi';

// Create a react hooks we can use to interact with the API in the backend
export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  // Use the custom base query with error handling we created in the baseApi.ts file
  baseQuery: baseQueryWithErrorHandling,
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
