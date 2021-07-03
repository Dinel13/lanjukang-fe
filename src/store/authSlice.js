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
          token: `${token}9gTe1Sk${userId}KS1gtek6${name}`,
        })
      );
      state.token = token;
      state.name = name;
      state.userId = userId;
    },
    logout(state) {
      localStorage.removeItem("pj_a");
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
