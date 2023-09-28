import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curentDate: 0,
}

export const dateReducer = createSlice({
    name: 'curentDay',
    initialState,
    reducers: {
        nextDay: (state) => {
            state.curentDate += 8
        },
        prevDay: (state) => {
            state.curentDate -= 8
        },
        resetDay: (state) => {
            state.curentDate = 0
        },
    },
})

export const { nextDay, prevDay, resetDay } = dateReducer.actions

export default dateReducer.reducer
