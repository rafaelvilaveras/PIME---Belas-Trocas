import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: "userR",
    initialState: {
        userInfo: {
            username: '',
            rm: '',
            email: '',
            authToken: ''
        },
    },
    reducers: {
        loginAuth: (state, action) => {
            //Função de autenticação de login
        },
        getUserInfo: (state, action) => {
            state.userInfo.username = action.payload.username
            state.userInfo.rm = action.payload.rm
            state.userInfo.email = action.payload.email
            state.userInfo.authToken = action.payload.authToken
        }
    }

});

export const {loginAuth} = userSlicer.actions;
export const {getUserInfo} = userSlicer.actions;

export default userSlicer.reducer;