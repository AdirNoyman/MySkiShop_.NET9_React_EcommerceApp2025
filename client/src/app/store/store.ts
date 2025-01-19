import { configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";

export const store = configureStore({

  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer,
  },
  // Add the Redux middleware that will handle all the middleware actions between our client and the API (e.g.: caching, error handling, etc.)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();