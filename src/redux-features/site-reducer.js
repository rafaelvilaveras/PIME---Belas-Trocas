import { createSlice } from "@reduxjs/toolkit";

export const siteSlicer = createSlice({
    name: "siteR",
    initialState: {
        appBg: '',
        url:'',
    },
    reducers: {
        clearUrl: (state, action) => {
            const aux = action.payload.url.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            console.log(aux)
            return 'teste';

        },
        // encodeUrl: (state, action) => {
        //     // É só pra eu lembrar como funciona isso.
        //     console.log(state.tools.encoder.encode(action.payload.url).join())
        // }
    }

});

export const {setTeste} = siteSlicer.actions;
export const {clearUrl} = siteSlicer.actions;

export default siteSlicer.reducer;