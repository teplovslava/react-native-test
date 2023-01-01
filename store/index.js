import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './slice/mainSlice'



export const store = configureStore({
    reducer: {
        mainSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

