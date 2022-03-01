import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from '@reduxjs/toolkit/query/react';

import { Createuser } from "../services/usersignup/usersignup"
import { StudentResult } from "../services/addstudent/addstudent"
import { userSlice } from "../services/auth/UserSlice"

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        [Createuser.reducerPath]: Createuser.reducer,
        [StudentResult.reducerPath]: StudentResult.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Createuser.middleware, StudentResult.middleware),
})
setupListeners(store.dispatch)