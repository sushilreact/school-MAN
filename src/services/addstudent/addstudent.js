import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const username = localStorage.getItem('username')
const token = localStorage.getItem('token')



export const StudentResult = createApi({

    reducerPath: 'StudentResult',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3600/',

    }),
    tagTypes: ["Students"],
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => {
                return {
                    url: 'student',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        username

                    }

                }
            },
            providesTags: ["Students"]

        }),


        getAllDataByID: builder.query({
            query: (id) => {
                console.log("My RTK Query ID", id)
                return {
                    url: "student/" + id,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        username

                    }

                }
            },
            providesTags: ["Students"]

        }),


        addStudentInfo: builder.mutation({
            query: (AddStudent) => {
                // console.log("My add Student", AddStudent)

                return {
                    url: 'student',
                    method: 'POST',
                    body: AddStudent,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        username

                    }
                }

            },
            invalidatesTags: ["Students"]

        }),

        updateByID: builder.mutation({
            query: (updatestudent) => {
                const id = updatestudent._id
                console.log("all Data update", updatestudent)
                return {
                    url: "student/edit/" + id,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        username
                    },
                    body: updatestudent,

                }
            },
            providesTags: ["Students"]

        }),


        deleteStudentInfo: builder.mutation({
            query: (id) => {
                console.log("My Request ID", id)
                return {
                    url: `student/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        username

                    }
                }

            },
            invalidatesTags: ["Students"]

        })

    })
})

export const { useGetAllDataQuery, useAddStudentInfoMutation, useDeleteStudentInfoMutation, useGetAllDataByIDQuery, useUpdateByIDMutation } = StudentResult