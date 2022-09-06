import { createSlice } from "@reduxjs/toolkit";

const icecreameSlice = createSlice({
    name: 'icecreame',
    initialState: {icecreams: 30},
    reducers:{
        buyIcecreame(state, action){
            state.icecreams = state.icecreams-action.payload
        }
    }
})

export const icecreameSliceActions = icecreameSlice.actions

export default icecreameSlice;