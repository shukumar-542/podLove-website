import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://13.51.233.34:8000', // Live
  baseUrl: "https://q5hnmg8q-8000.inc1.devtunnels.ms",
  // baseUrl: 'http://10.10.20.11:8000',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export const imageUrl = "https://q5hnmg8q-8000.inc1.devtunnels.ms";
// export const imageUrl = 'http://10.10.20.11:8000'
