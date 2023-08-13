import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    maritalStatus: '',
    age: ''
}

const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        addFirstPage(state, action) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        },
        addSecondPage(state, action) {
            state.address = action.payload.address
            state.age = action.payload.age
        },
        addThirdPage(state, action) {
            state.maritalStatus = action.payload.maritalStatus
            state.phone = action.payload.phone
        },
    }
})

export const { addFirstPage, addSecondPage, addThirdPage } = formDataSlice.actions
export const formDataReducer = formDataSlice.reducer