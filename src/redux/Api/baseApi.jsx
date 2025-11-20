import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://q5hnmg8q-8000.inc1.devtunnels.ms/",
  baseUrl: "https://backend.podlove.co",
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

export const imageUrl = "https://backend.podlove.co";
// export const imageUrl = "https://q5hnmg8q-8000.inc1.devtunnels.ms/";
