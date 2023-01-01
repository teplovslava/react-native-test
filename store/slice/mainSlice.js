import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

export const mainSlice = createSlice({
    name: 'arr',
    initialState,
    reducers: {
        addArr: (state, action) => {
            state.todoList = action.payload
        },
        setCheck: (state, action) => {
            console.log(state.todoList[action.payload - 1])
            state.todoList[action.payload - 1].checked = !state.todoList[action.payload - 1].checked;
        },
        deleteItem: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
        },
        pushArr: (state, action) => {
            state.todoList.push(action.payload)
            console.log(state.todoList)
        }
    },
})


export const { addArr, setCheck, deleteItem, pushArr } = mainSlice.actions

export default mainSlice.reducer