import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const UserLoginApi = createApi({
    reducerPath: "UserLoginApi",
    baseQuery: fetchBaseQuery({
        basrUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        loggedIn: builder.mutation({
            query: (body) => {
                return {
                    url: "/api/login",
                    method: "POST",
                    body: body
                }
            }
        })
    })
})


export const { useLoggedInMutation } = UserLoginApi;