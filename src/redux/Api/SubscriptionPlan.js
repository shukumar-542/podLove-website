import { baseApi } from "./baseApi";

const subscriptionPlan = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllPlan : builder.query({
            query : ()=>{
                return {
                    url : '/plan',
                    method : 'GET'
                }
            }
        }),
        upgradeSubscriptionPlan :  builder.mutation({
            query : (planId)=>{
                return {
                    url  : '/subscription/upgrade',
                    method : 'POST',
                    body : planId
                }
            }
        }),
        createSurvey : builder.mutation({
            query : (data)=>{
                return {
                    url : '/survey/create',
                    method : 'POST',
                    body : data
                }
            }
        }),
        getNotification :  builder.query({
            query : ()=>{
                return {
                    url : '/notification',
                    method : 'GET'
                }
            }
        }),
        createContactUs : builder.mutation({
            query : (data)=>{
                return {
                    url : '/support/create',
                    method : "POST",
                    body : data
                }
            }
        }),
        getFaq :  builder.query({
            query : ()=>{
                return{
                    url : '/faq',
                    method : 'GET'
                }
            }
        })
    })
})

export const { useGetAllPlanQuery , useUpgradeSubscriptionPlanMutation , useCreateSurveyMutation  , useGetNotificationQuery , useCreateContactUsMutation , useGetFaqQuery} = subscriptionPlan;