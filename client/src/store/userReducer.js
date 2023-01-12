import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userData:{},
  },
  
  reducers: {
    userLoggedIn(state) {
      state.isLoggedIn = true;
    },
    userLoggedOut(state) {
      state.isLoggedIn = false;
    },
    userDateStore(state, action) {
      state.userData = action.payload;
    },
  },

});

export const { userLoggedIn, userLoggedOut,userDateStore} = authSlice.actions;

export default authSlice.reducer;
