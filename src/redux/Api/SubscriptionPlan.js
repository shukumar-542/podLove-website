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
        })
    })
})

export const { useGetAllPlanQuery } = subscriptionPlan;