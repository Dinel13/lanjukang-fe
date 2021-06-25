import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Fulnav from "./components/nav/Fulnav";

export default function App() {
  // const token = useSelector((state) => state.auth.token);
  return (
    <>
      <Fulnav />
      <Switch>
        <Route path="/" exact>
          gdfgfdg
        </Route>
        <Route path="/perjalanan" exact>
          <div className="xl:mt-0 mt-20">
            <h1>header</h1>
          </div>
        </Route>
      </Switch>
    </>
  );
}
