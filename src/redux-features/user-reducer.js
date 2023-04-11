import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: "userR",
    initialState: {
        login: '',
        senha: '',
        username: '',
        RM: '',
        email: '',
    },
    reducers: {
        loginAuth: (state, action) => {
            //Função de autenticação de login
        }
    }

});

export const {loginAuth} = userSlicer.actions;

export default userSlicer.reducer;