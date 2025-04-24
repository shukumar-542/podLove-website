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
  useGetTermsConditionQuery
} = authApi;
