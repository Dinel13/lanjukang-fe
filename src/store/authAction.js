import { login as loginSlice } from "./authSlice";
import { showNotif } from "./uiSlice";

export const login = (email, password, successLogin, failLogin) => {
  return async (dispatch) => {
    try {
      const response = await await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Tidak bisa masuk");
      }
      dispatch(loginSlice(result));
      successLogin();
    } catch (error) {
      dispatch(
        showNotif({
          title: "Gagal masuk",
          message: error.message,
          action: null,
        })
      );
      failLogin();
    }
  };
};

export const signup = (email, name, password, succesSingup, failSignup) => {
  return async (dispatch) => {
    try {
      const response = await await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Tidak bisa mendaftar!");
      }
      dispatch(loginSlice(result));
      succesSingup();
    } catch (error) {
      dispatch(
        showNotif({
          title: "Gagal mendaftar",
          message: error.message,
          action: null,
        })
      );
      failSignup();
    }
  };
};
