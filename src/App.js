import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login } from "./store/authSlice";

import Loading from "./components/layout/loading/Full";
import Alert from "./components/layout/Alert";
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/footer";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailTrip from "./pages/TirpDetail/DetailTrip";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const MyAccount = lazy(() => import("./pages/MyAccount/MyAccount"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
      if (!token && localStorage.getItem("pj_ayt")) {
        const data = JSON.parse(localStorage.getItem("pj_ayt"));
        const [ token, userId, name ]= data.split("9gTe1Sku");
        dispatch(login({ token, userId, name }));
      }
  }, [dispatch, token]);

  let route;

  if (!token) {
    route = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/masuk" exact>
          <Login />
        </Route>
        <Route path="/daftar" exact>
          <Register />
        </Route>
        <Route path="/akunku" exact>
          <Redirect to="/masuk" />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/detail-trip" exact>
          <DetailTrip />
        </Route>
        <Route path="/perjalanan" exact></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  } else {
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/masuk" exact>
        <Redirect to="/akunku" />
      </Route>
      <Route path="/daftar" exact>
        <Redirect to="/akunku" />
      </Route>
      <Route path="/akunku" exact>
        <MyAccount />
      </Route>
      <Route path="/perjalanan" exact></Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>;
  }

  return (
    <div className="font-montserrat bg-gray-50">
      <Alert />
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>{route}</Suspense>
      </main>
      <Footer />
    </div>
  );
}
