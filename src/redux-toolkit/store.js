import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import cakeSlice from "./cakes/cakeSlice";
import icecreameSlice from "./icecreams/icecreameSlice";
import postsSlice from "./posts/postsSlice";

const store = configureStore({
    reducer:{
        users: usersSlice.reducer,
        cakes: cakeSlice.reducer,
        icecreames: icecreameSlice.reducer,
        posts: postsSlice.reducer
    }
})

export default store;