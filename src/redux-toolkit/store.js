import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import cakeSlice from "./cakes/cakeSlice";

const store = configureStore({
    reducer:{
        users: usersSlice.reducer,
        cakes: cakeSlice.reducer
    }
})

export default store;