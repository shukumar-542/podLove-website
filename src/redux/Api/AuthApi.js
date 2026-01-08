import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    verifySingUpOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/activate",
        method: "POST",
        body: data,
      }),
    }),

    verifyPhone: builder.mutation({
      query: (data) => ({
        url: "/auth/phone_verify",
        method: "POST",
        body: data,
      }),
    }),

    verifyPhoneOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify_phone_otp",
        method: "POST",
        body: data,
      }),
    }),

    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/user/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          baseApi.util.updateQueryData("getUser", undefined, (draft) => {
            Object.assign(draft, arg);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patch.undo();
        }
      },
    }),

    bioValidation: builder.mutation({
      query: (data) => ({
        url: "/user/validate-bio",
        method: "POST",
        body: data,
      }),
    }),

    podcastCreate: builder.mutation({
      query: () => ({
        url: "/podcast/create",
        method: "POST",
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["profile"],
      keepUnusedDataFor: 60,

      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          const status = error?.error?.status;
          const message = error?.error?.data?.message;

          if (
            status === 401 ||
            status === 404 ||
            message === "Account Not Found"
          ) {
            localStorage.removeItem("podlove-token");
          }
        }
      },
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    deleteAccount: builder.mutation({
      query: () => ({
        url: "/auth/delete",
        method: "DELETE",
      }),
    }),

    getSubscriptions: builder.query({
      query: () => ({
        url: "/user/get-user-subscriptions",
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),

    getPodCastDetails: builder.query({
      query: () => ({
        url: "/home",
        method: "GET",
      }),
      providesTags: ["Podcast"],
    }),

    getPodCastHistoryDetails: builder.query({
      query: () => ({
        url: "/home/completed-podcast",
        method: "GET",
      }),
      providesTags: ["Podcast"],
    }),

    googleLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in-with-google",
        method: "POST",
        body: data,
      }),
    }),

    appleLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in-with-apple",
        method: "POST",
        body: data,
      }),
    }),

    getTermsCondition: builder.query({
      query: () => ({
        url: "/tac",
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
      providesTags: ["Policy"],
    }),

    getPrivacy: builder.query({
      query: () => ({
        url: "/privacy",
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
      providesTags: ["Policy"],
    }),

    getSmsPrivacy: builder.query({
      query: () => ({
        url: "/home/get-sms-policy",
        method: "GET",
      }),
      providesTags: ["Policy"],
    }),

    getVideo: builder.query({
      query: () => ({
        url: "/home/get-video",
        method: "GET",
      }),
      providesTags: ["Media"],
    }),

    getMediaPrivacy: builder.query({
      query: () => ({
        url: "/home/get-media-policy",
        method: "GET",
      }),
      providesTags: ["Policy"],
    }),

    getConsumerPolicy: builder.query({
      query: () => ({
        url: "/consumer",
        method: "GET",
      }),
      providesTags: ["Policy"],
    }),

    UpdateUserBio: builder.mutation({
      query: (data) => ({
        url: "live/validate-bio",
        method: "POST",
        body: data,
      }),
    }),

    UpdateUserBioNew: builder.mutation({
      query: (data) => ({
        url: "/user/validate-bio",
        method: "POST",
        body: data,
      }),
    }),

    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/admin/recovery",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/admin/recovery-verification",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/admin/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    resetAuthPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    connectBegins: builder.mutation({
      query: (id) => ({
        url: `/user/match/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Match"],
    }),

    getMatches: builder.query({
      query: () => ({
        url: "/user/match/getAll",
        method: "GET",
      }),
      providesTags: ["Match"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifySingUpOtpMutation,
  useVerifyPhoneMutation,
  useVerifyPhoneOtpMutation,
  useUpdateUserInfoMutation,
  useBioValidationMutation,
  usePodcastCreateMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useChangePasswordMutation,
  useDeleteAccountMutation,
  useGetSubscriptionsQuery,
  useGetPodCastDetailsQuery,
  useGetPodCastHistoryDetailsQuery,
  useGoogleLoginMutation,
  useAppleLoginMutation,
  useGetTermsConditionQuery,
  useGetPrivacyQuery,
  useGetSmsPrivacyQuery,
  useGetVideoQuery,
  useGetMediaPrivacyQuery,
  useGetConsumerPolicyQuery,
  useUpdateUserBioMutation,
  useUpdateUserBioNewMutation,
  useForgetPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useResetAuthPasswordMutation,
  useConnectBeginsMutation,
  useGetMatchesQuery,
} = authApi;
