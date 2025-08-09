import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({

    baseUrl: 'http://13.51.233.34:8000',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('podlove-token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({})

});


export const imageUrl = 'http://13.51.233.34:8000'
// export const imageUrl = 'https://api.podlove.co'