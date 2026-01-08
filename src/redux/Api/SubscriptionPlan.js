import { baseApi } from "./baseApi";

const subscriptionPlan = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlan: builder.query({
      query: () => ({
        url: "/subscription-plan",
        method: "GET",
      }),
      providesTags: ["Plan"],
      keepUnusedDataFor: 300,
    }),

    upgradeSubscriptionPlan: builder.mutation({
      query: (planId) => ({
        url: "/subscription/upgrade",
        method: "POST",
        body: planId,
      }),
      invalidatesTags: ["Subscription", "Plan"],
    }),

    createSurvey: builder.mutation({
      query: (data) => ({
        url: "/survey/create",
        method: "POST",
        body: data,
      }),
    }),

    getNotification: builder.query({
      query: () => ({
        url: "/notification",
        method: "GET",
      }),
      providesTags: ["Notification"],
    }),

    createContactUs: builder.mutation({
      query: (data) => ({
        url: "/support/create",
        method: "POST",
        body: data,
      }),
    }),

    getFaq: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
      providesTags: ["FAQ"],
    }),
  }),
});

export const {
  useGetAllPlanQuery,
  useUpgradeSubscriptionPlanMutation,
  useCreateSurveyMutation,
  useGetNotificationQuery,
  useCreateContactUsMutation,
  useGetFaqQuery,
} = subscriptionPlan;
