import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login, selectToken } from "./store/authSlice";

import Loading from "./components/layout/loading/Full";
import Alert from "./components/layout/Alert";
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/footer";
// import Home from "./pages/Home/Home";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const MyAccount = lazy(() => import("./pages/MyAccount/MyAccount"));
const UpdateAccount = lazy(() => import("./pages/MyAccount/Update"));
const BecomePartner = lazy(() => import("./pages/Partner/BecomePartner"));
const MyDetailService = lazy(() => import("./pages/Partner/MyDetailService"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const DetailTrip = lazy(() => import("./pages/TirpDetail/DetailTrip"));
const AllServices = lazy(() => import("./pages/Service/AllServices"));
const DetailService = lazy(() => import("./pages/Service/DetailService"));
const ForgotPassword = React.lazy(() =>
  import("./pages/MyAccount/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./pages/MyAccount/ResetPassword")
);
const Terms = lazy(() => import("./pages/Terms"));
const Prifacy = lazy(() => import("./pages/Prifacy"));
const Bantuan = lazy(() => import("./pages/Bantuan"));
const Pencarian = lazy(() => import("./pages/Pencarian"));
const TypeLayanan = lazy(() => import("./pages/TypeLayanan"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  React.useEffect(() => {
    if (localStorage.getItem("pj_ayt")) {
      const data = JSON.parse(localStorage.getItem("pj_ayt"));
      console.log(data);
      const [token, id, role, name] = data.split("9gTe1Sku");
      dispatch(login({ token, id, name, role }));
    }
  }, [dispatch]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/masuk" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/daftar" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/akunku" exact>
          <MyAccount />
        </Route>
        <Route path="/become-partner" exact>
          <BecomePartner />
        </Route>
        <Route path="/layanan" exact>
          <AllServices />
        </Route>
        <Route path="/bantuan" exact>
          <Bantuan />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
        <Route path="/prifacy" exact>
          <Prifacy />
        </Route>
        <Route path="/pencarian" exact>
          <Pencarian />
        </Route>
        <Route path="/layanan/tipe/:id" exact>
          <TypeLayanan />
        </Route>
        <Route path="/layanan/detail/:id" exact>
          <DetailService />
        </Route>
        <Route path="/akunku/update" exact>
          <UpdateAccount />
        </Route>
        <Route path="/user/layanan/:id" exact>
          <MyDetailService />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  } else {
    routes = (
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
        <Route path="/bantuan" exact>
          <Bantuan />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
        <Route path="/prifacy" exact>
          <Prifacy />
        </Route>
        <Route path="/detail-trip" exact>
          <DetailTrip />
        </Route>
        <Route path="/become-partner" exact>
          <BecomePartner />
        </Route>
        <Route path="/pencarian" exact>
          <Pencarian />
        </Route>
        <Route path="/perjalanan" exact></Route>
        <Route path="/layanan/tipe/:id" exact>
          <TypeLayanan />
        </Route>
        <Route path="/reset-password/:token" exact>
          <ResetPassword />
        </Route>
        <Route path="/lupa-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  }

  return (
    <div className="font-montserrat bg-gray-50">
      <Alert />
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
