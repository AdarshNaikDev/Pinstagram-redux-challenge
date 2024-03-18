import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FollowingUsersArr: []
};

const FollowingUsersSlice = createSlice({
  name: 'FollowingUsers',
  initialState,
  reducers: {
    addToMyFollowing(state, action) {
      
     
     
     const userExist = state.FollowingUsersArr.some(items => items.userID === action.payload.userID)
     if(!userExist)
     {
        state.FollowingUsersArr.push(action.payload);
     }
  
    },
    removeFromMyFollowing(state, action) {
      // Filter out the item to remove
      state.FollowingUsersArr = state.FollowingUsersArr.filter(item => item.userID !== action.payload.userID);
    }
  }
});

export const { addToMyFollowing, removeFromMyFollowing } = FollowingUsersSlice.actions;
export default FollowingUsersSlice.reducer;
