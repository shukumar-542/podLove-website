import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
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
  baseQuery,
  tagTypes: [
    "profile",
    "Podcast",
    "Subscription",
    "Plan",
    "Notification",
    "FAQ",
    "Policy",
    "Media",
    "Match",
  ],
  endpoints: () => ({}),
});

export const imageUrl = "https://backend.podlove.co";
