import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './reducer/dateReducer'


export const store = configureStore({
    reducer: {
        dateReducer: dateReducer,
    },
})
