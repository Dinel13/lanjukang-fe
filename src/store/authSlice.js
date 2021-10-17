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
      const { token, name } = action.payload;
      localStorage.setItem(
        "pj_ayt",
        JSON.stringify(`9gTe1Sk${token}KS1gtek6${name}`)
      );
      state.token = token;
      state.name = name;
    },
    logout(state) {
      localStorage.removeItem("pj_ayt");
      state = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
