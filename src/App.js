import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login } from "./store/authSlice";

import Loading from "./components/loading/LoadingFull";
import Modal from "./components/modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { HomeContainer } from "./pages/Home/HomeContainer";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const MyAccount = lazy(() => import("./pages/MyAccount/MyAccount"));

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

  if (!token) {
    route = (
      <Switch>
        <Route path="/" exact>
          <HomeContainer />
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
        </Route>
      </Switch>
    );
  } else {
    <Switch>
      <Route path="/" exact>
        <HomeContainer />
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
      </Route>
    </Switch>;
  }

  return (
    <div className="font-montserrat">
      <Modal />
      <Navbar />

      <main>
        <Suspense fallback={<Loading />}>{route}</Suspense>
      </main>
      <Footer />
    </div>
  );
}
