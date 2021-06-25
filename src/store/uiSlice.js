import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notif: null },
  reducers: {
    showNotif(state, action) {
      state.notif = {
        title: action.payload.title,
        message: action.payload.message,
        action: action.payload.action,
      };
    },
    hideNotif(state) {
      state.notif = null;
    },
  },
});
export const { showNotif, hideNotif } = uiSlice.actions;

export default uiSlice.reducer;
