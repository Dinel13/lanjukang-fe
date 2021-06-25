import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Fulnav from "./components/nav/Fulnav";
import Loading from "./components/loading/LoadingFull";
import Modal from "./components/modal/Modal";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

export default function App() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
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
            <Route path="/perjalanan" exact>
              <h1>header</h1>
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}
