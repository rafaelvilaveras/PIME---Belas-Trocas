import { createSlice } from "@reduxjs/toolkit";

export const siteSlicer = createSlice({
    name: "siteR",
    initialState: {
        appBg: '',
        url:'',
        trade: false,
        donate: false,
    },
    reducers: {
        clearUrl: (state, action) => {
            const aux = action.payload.url.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            console.log(state.appBg)
            return 'teste';

        },
        toggleTD: (state, action) => {
            if(action.payload.type === 'Troca') {
                state.trade = !state.trade;
            }else{
                state.donate = !state.donate;
            }
        },

    }

});

export const {setTeste} = siteSlicer.actions;
export const {toggleTD} = siteSlicer.actions;
export const {clearUrl} = siteSlicer.actions;

export default siteSlicer.reducer;