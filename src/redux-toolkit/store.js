import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import cakeSlice from "./cakes/cakeSlice";
import icecreameSlice from "./icecreams/icecreameSlice";

const store = configureStore({
    reducer:{
        users: usersSlice.reducer,
        cakes: cakeSlice.reducer,
        icecreames: icecreameSlice.reducer
    }
})

export default store;