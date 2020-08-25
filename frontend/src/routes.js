import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Showroom from "./pages/Showroom";
import Order from "./pages/Order";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/order" exact>
          <Order />
        </Route>
        <Route path="/" exact>
          <Showroom />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
