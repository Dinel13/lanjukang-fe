import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login } from "./store/authSlice";

import Fulnav from "./components/nav/Fulnav";
import Loading from "./components/loading/LoadingFull";
import Modal from "./components/modal/Modal";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const MyAccount = React.lazy(() => import("./pages/MyAccount"));

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
          <h1>header</h1>
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
        <h1>header</h1>
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
