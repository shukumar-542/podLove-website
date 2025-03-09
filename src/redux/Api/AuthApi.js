import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        signUp : builder.mutation({
            query : (data)=>{
                return {
                    url : "/auth/register",
                    method : 'POST',
                    body : data
                }
            }
        }),
        verifySingUpOtp : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/activate',
                    method : 'POST',
                    body :  data
                }
            }
        }),
        // getPlaceSuggestions :  builder.query({
        //     query : (input)=>{
        //         return {
        //             url : `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=AIzaSyBzv577Bx_ETVI7T1Fnf8kfRuZkMzfNZVE`,
        //             method : "GET"
        //         }
        //     }
        // })

    })
})

export const { useSignUpMutation  , useVerifySingUpOtpMutation , useGetPlaceSuggestionsQuery} = authApi