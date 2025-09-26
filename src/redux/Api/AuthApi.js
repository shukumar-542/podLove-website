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
    bioValidation: builder.mutation({
      query: (data) => {
        return {
          url: `/user/validate-bio`,
          method: "POST",
          body: data,
        };
      },
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
    getSmsPrivacy: builder.query({
      query: () => {
        return {
          url: "/home/get-sms-policy",
          method: "GET",
        };
      },
    }),
    getVideo: builder.query({
      query: () => {
        return {
          url: "/home/get-video",
          method: "GET",
        };
      },
    }),
    getMediaPrivacy: builder.query({
      query: () => {
        return {
          url: "/home/get-media-policy",
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
    UpdateUserBioNew: builder.mutation({
      query: (data) => {
        return {
          url: "/user/validate-bio",
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
    resetAuthPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
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

    getMatchs: builder.query({
      query: () => {
        return {
          url: "/user/match/getAll",
          method: "GET",
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
  useBioValidationMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useGetPodCastDetailsQuery,
  useChangePasswordMutation,
  useGoogleLoginMutation,
  useGetTermsConditionQuery,
  useGetPrivacyQuery,
  useGetConsumerPolicyQuery,
  useUpdateUserBioMutation,
  useUpdateUserBioNewMutation,
  useForgetPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useConnectBeginsMutation,
  useGetMatchsQuery,
  useResetAuthPasswordMutation,
  useGetSmsPrivacyQuery,
  useGetMediaPrivacyQuery,
  useGetVideoQuery,
} = authApi;
