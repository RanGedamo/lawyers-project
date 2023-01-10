import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userData:{},
    googleSignIn:null,
    facebookSignIn:null,
    logOut:null
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
    googleSignInStore(state, action) {
        state.googleSignIn = action.payload;
      },
      facebookSignInStore(state, action) {
        state.facebookSignIn = action.payload;
      },
      logOutStore(state, action) {
        state.logOut = action.payload;
      },
  },
});

export const { userLoggedIn, userLoggedOut,userDateStore,googleSignInStore,facebookSignInStore,logOutStore } = authSlice.actions;

export default authSlice.reducer;
