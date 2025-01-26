import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorApi = createApi({

    reducerPath: "errorApi",
    
    baseQuery: baseQueryWithErrorHandling,
    endpoints: builder => ({

        get400Error: builder.query<void, void>({
            query: () => `buggy/bad-request`,
        }),
        get401Error: builder.query<void, void>({
            query: () => `buggy/unauthorized`,
        }),
        get404Error: builder.query<void, void>({
            query: () => `buggy/not-found`,
        }),
        get500Error: builder.query<void, void>({
            query: () => `buggy/server-error`,
        }),
        getValidationError: builder.query<void, void>({
            query: () => `buggy/validation-error`,
        }),
    })
})
// Use lazy queries to prevent the API from being called on component mount. It will only be called when the query is called.
export const { useLazyGet400ErrorQuery,useGet401ErrorQuery, useGet404ErrorQuery,useGet500ErrorQuery,useGetValidationErrorQuery } = errorApi;