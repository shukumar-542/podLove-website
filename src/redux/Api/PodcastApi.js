import { baseApi } from "./baseApi";

const PodcastApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        sendPodcastRequest: builder.mutation({
            query: (data) => {
                return {
                    url: '/podcast/send-podcast-request',
                    method: 'PATCH',
                    body: data
                }
            }
        }),
        // endpoints : (builder)=>({
        //     getAllPlan : builder.query({
        //         query : ()=>{
        //             return {
        //                 url : '/subscription-plan',
        //                 method : 'GET'
        //             }
        //         }
        //     }),
        podcastDone: builder.mutation({
            query: (data) => {
                return {
                    url: '/podcast/podcast-done',
                    method: 'POST',
                    body: data
                }
            }
        }),
        createPodcast: builder.mutation({
            query: (id) => {
                return {
                    url: `/podcast/create_room/${id}`,
                    method: 'POST',
                }
            }
        }),
        postFirstSurvey: builder.mutation({
            query: (data) => {
                return {
                    url: `/podcast/send_questions_answer`,
                    method: 'POST',
                    body: data
                }
            }
        }),
        post7DaysSurvey: builder.mutation({
            query: (data) => {
                return {
                    url: `/user/send_survey_feedback`,
                    method: 'POST',
                    body: data
                }
            }
        }),
    })
})

export const {
    useSendPodcastRequestMutation,
    usePodcastDoneMutation,
    useCreatePodcastMutation,
    usePostFirstSurveyMutation,
    usePost7DaysSurveyMutation,
} = PodcastApi;