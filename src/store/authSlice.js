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
        "pj_ayt",
        JSON.stringify(`${token}9gTe1Sku${userId}9gTe1Sku${name}`)
      );
      state.token = token;
      state.userId = userId;
      state.name = name;
    },
    logout(state) {
      localStorage.removeItem("pj_ayt");
      state = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectUserId = (state) => state.auth.userId;
export const selectName = (state) => state.auth.name;
export default authSlice.reducer;
