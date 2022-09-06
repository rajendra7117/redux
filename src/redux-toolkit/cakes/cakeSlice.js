import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name: 'cake',
    initialState: {cakes: 20},
    reducers:{
        buyCake(state, action){
            state.cakes =state.cakes-action.payload
        }
    }
})

export const cakeSliceActions = cakeSlice.actions

export default cakeSlice;