import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({

    // baseUrl: 'http://13.51.233.34:8000', // Live
    baseUrl: 'https://backend.podlove.co',
    // baseUrl: 'http://10.10.20.11:8000',
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

 
export const imageUrl = 'https://backend.podlove.co'
// export const imageUrl = 'http://10.10.20.11:8000' 