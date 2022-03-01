
import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: localStorage.getItem('username'),
        token: localStorage.getItem('token'),
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },

    reducers: {
        setActiveUser: (state, action) => {
            state.username = action.payload.username
            state.token = action.payload.token

        },

        setUserLogOutState: (state, action) => {
            state.username = null
            state.token = null
        },

        setTimerLogOutState: (state, action) => {
            state.username = null
            state.token = null
        },






    },
    extraReducers: {
        // Extra reducer comes here
    },

})
export const { setActiveUser, setUserLogOutState, setTimerLogOutState, setToken, setVerifyUser } = userSlice.actions
export const userSelector = state => state.user