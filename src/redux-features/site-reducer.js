import { createSlice } from "@reduxjs/toolkit";

export const siteSlicer = createSlice({
    name: "siteR",
    initialState: {
        teste: '',
    },
    reducers: {
        setTeste: (state) => {
            // Apenas um teste.
        },
    }

});

export const {setTeste} = siteSlicer.actions;

export default siteSlicer.reducer;