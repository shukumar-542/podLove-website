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

    })
})

export const {
    useSendPodcastRequestMutation,
} = PodcastApi;