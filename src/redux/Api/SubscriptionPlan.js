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
        })
    })
})

export const { useGetAllPlanQuery , useUpgradeSubscriptionPlanMutation , useCreateSurveyMutation  , useGetNotificationQuery} = subscriptionPlan;