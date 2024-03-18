import { configureStore } from "@reduxjs/toolkit";

import FollowingUsersSliceReducer from "./FollowingUsersSlice";

const store = configureStore({
    reducer:{
        PinstaUsers: FollowingUsersSliceReducer
    }
});

export default store;