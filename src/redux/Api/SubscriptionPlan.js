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
        })
    })
})

export const { useGetAllPlanQuery , useUpgradeSubscriptionPlanMutation } = subscriptionPlan;