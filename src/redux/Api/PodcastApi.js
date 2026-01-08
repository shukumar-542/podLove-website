import { baseApi } from "./baseApi";

const PodcastApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendPodcastRequest: builder.mutation({
      query: (data) => ({
        url: "/podcast/send-podcast-request",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Podcast"],
    }),

    podcastDone: builder.mutation({
      query: (data) => ({
        url: "/podcast/podcast-done",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Podcast"],
    }),

    createPodcast: builder.mutation({
      query: (id) => ({
        url: `/podcast/create_room/${id}`,
        method: "POST",
      }),
    }),

    postFirstSurvey: builder.mutation({
      query: (data) => ({
        url: "/podcast/send_questions_answer",
        method: "POST",
        body: data,
      }),
    }),

    post7DaysSurvey: builder.mutation({
      query: (data) => ({
        url: "/user/send_survey_feedback",
        method: "POST",
        body: data,
      }),
    }),

    submitConnectionPathway: builder.mutation({
      query: (data) => ({
        url: "/ai/is-user-suitable",
        method: "POST",
        body: data,
      }),
    }),

    decisionMaking: builder.mutation({
      query: (data) => ({
        url: "/user/match/refreshTheMatch",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSendPodcastRequestMutation,
  usePodcastDoneMutation,
  useCreatePodcastMutation,
  usePostFirstSurveyMutation,
  usePost7DaysSurveyMutation,
  useSubmitConnectionPathwayMutation,
  useDecisionMakingMutation,
} = PodcastApi;
