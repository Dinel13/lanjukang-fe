import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login } from "./store/authSlice";

import Fulnav from "./components/nav/Fulnav";
import Loading from "./components/loading/LoadingFull";
import Modal from "./components/modal/Modal";
import About from "./components/about/About";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
const Trip = lazy(() => import("./pages/Trip"));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    if (localStorage.getItem("pj_a")) {
      const data = JSON.parse(localStorage.getItem("pj_a"));
      const _token = data.token.split("9gTe1Sk")[0];
      const userId = data.token.split("9gTe1Sk")[1].split("KS1gtek6")[0];
      const name = data.token.split("9gTe1Sk")[1].split("KS1gtek6")[1];
      dispatch(login({ token: _token, userId, name }));
    }
  });
  let route;

  if (token) {
    route = (
      <Switch>
        <Route path="/" exact>
          gdfgfdg
          <About />
        </Route>
        <Route path="/masuk" exact>
          <Login />
        </Route>
        <Route path="/daftar" exact>
          <Register />
        </Route>
        <Route path="/akunku" exact>
          <MyAccount />
        </Route>
        <Route path="/perjalanan" exact>
          <Trip />
        </Route>
      </Switch>
    );
  } else {
    <Switch>
      <Route path="/" exact>
        gdfgfdg
      </Route>
      <Route path="/masuk" exact>
        <Login />
      </Route>
      <Route path="/daftar" exact>
        <Register />
      </Route>
      <Route path="/akunku" exact>
        <MyAccount />
      </Route>
      <Route path="/perjalanan" exact>
        <Trip />
      </Route>
    </Switch>;
  }

  return (
    <div className="font-montserrat">
      <Modal />
      <Fulnav />
      <main>
        <Suspense fallback={<Loading />}>{route}</Suspense>
      </main>
    </div>
  );
}
