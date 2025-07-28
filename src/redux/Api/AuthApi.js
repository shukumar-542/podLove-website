import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    verifySingUpOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/activate",
          method: "POST",
          body: data,
        };
      },
    }),
    updateUserInfo: builder.mutation({
      query: (data) => {
        return {
          url: `/user/update`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    podcastCreate: builder.mutation({
      query: () => {
        return {
          url: "/podcast/create",
          method: "POST",
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET",
        };
      },
      providesTags: ["profile"],
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "POST",
          body: data,
        };
      },
    }),
    getPodCastDetails: builder.query({
      query: () => {
        return {
          url: "/home",
          method: "GET",
        };
      },
    }),
    googleLogin: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/sign-in-with-google",
          method: "POST",
          body: data,
        };
      },
    }),
    getTermsCondition: builder.query({
      query: () => {
        return {
          url: "/tac",
          method: "GET",
        };
      },
    }),
    getPrivacy: builder.query({
      query: () => {
        return {
          url: "/privacy",
          method: "GET",
        };
      },
    }),
    getConsumerPolicy: builder.query({
      query: () => {
        return {
          url: "/consumer",
          method: "GET",
        };
      },
    }),
    UpdateUserBio: builder.mutation({
      query: (data) => {
        return {
          url: "live/validate-bio",
          method: "POST",
          body: data,
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/recovery",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyEmail: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/recovery-verification",
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/reset-password",
          method: "POST",
          body: data,
        };
      },
    }),

    connectBegins: builder.mutation({
      query: (id) => {
        return {
          url: `/user/match/${id}`,
          method: "POST",
        };
      },
    }),

  }),
});

export const {
  useSignUpMutation,
  useVerifySingUpOtpMutation,
  useUpdateUserInfoMutation,
  usePodcastCreateMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useGetPodCastDetailsQuery,
  useChangePasswordMutation,
  useGoogleLoginMutation,
  useGetTermsConditionQuery,
  useGetPrivacyQuery,
  useGetConsumerPolicyQuery,
  useUpdateUserBioMutation,
  useForgetPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useConnectBeginsMutation,
} = authApi;
