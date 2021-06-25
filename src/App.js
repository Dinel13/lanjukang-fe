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
    localStorage.getItem("authUnhas") &&
      dispatch(login(JSON.parse(localStorage.getItem("pj_a"))));
  });
  return (
    <>
      <Modal />
      <Fulnav />
      <main>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </main>
    </>
  );
}
