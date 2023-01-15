import { createSlice } from "@reduxjs/toolkit";

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState: {
    lawyerData: {},
  },

  reducers: {
    lawyerData(state, action) {
      state.lawyerData = action.payload;
    },
  },

});

export const { lawyerData } = lawyerSlice.actions;

export default lawyerSlice.reducer;
