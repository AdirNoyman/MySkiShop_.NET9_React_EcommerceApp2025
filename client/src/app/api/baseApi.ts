import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { startLoading, stopLoading } from '../layout/uiSlice';
// Create a custom base fetch
const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5001/api',
});

// Create a fake delay so we can simulate a real world scenario. Enter a delay of 1 second.
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

// Create a custom base query
export const baseQueryWithErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  // start a loading spinner
  api.dispatch(startLoading());
  await sleep();
  const result = await customBaseQuery(args, api, extraOptions);

  // Stop the loading spinner
  api.dispatch(stopLoading());
  if (result.error) {
    const { status, data } = result.error;
    console.log('Error and status returned while fetching data', status, data);
  }

  return result;
};
