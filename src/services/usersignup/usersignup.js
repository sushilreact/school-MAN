import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Createuser = createApi({
    reducerPath: 'Createuser',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3600/user'
    }),



    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newPost) => {
                //   console.log("Create Data:", newPost)
                return {
                    url: 'signup',
                    method: 'POST',
                    body: newPost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }

                }
            }
        }),



        loginUser: builder.mutation({
            query: (loginPost) => {
                // console.log("Create Data:", loginPost)
                return {
                    url: 'login',
                    method: 'POST',
                    body: loginPost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }

                }
            }
        })
    })
})






export const { useCreateUserMutation, useLoginUserMutation } = Createuser