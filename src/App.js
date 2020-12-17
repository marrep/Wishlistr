import React from "react";
import { Route, Switch } from "react-router-dom";
import Birthday from "./pages/Birthday";
import Christmas from "./pages/Christmas";
import WishList from "./pages/WishList";

export default function App() {
  return (
    <>
      <h1>WishListr</h1>
      <Switch>
        <Route exact path="/">
          <WishList />
        </Route>
        <Route exact path="/birthday">
          <Birthday />
        </Route>
        <Route exact path="/christmas">
          <Christmas />
        </Route>
      </Switch>
    </>
  );
}
