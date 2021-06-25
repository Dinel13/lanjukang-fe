import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { token, userId, name } = action.payload;
      localStorage.setItem(
        "pj_a",
        JSON.stringify({
          token,
          name,
          userId,
        })
      );
      state.token = token;
      state.name = name;
      state.name = userId;
    },
    logout(state) {
      localStorage.removeItem("pj_a");
      state.token = null;
      state.userId = null;
      state.name = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
