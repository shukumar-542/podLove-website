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
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifySingUpOtpMutation,
  useUpdateUserInfoMutation,
} = authApi;
