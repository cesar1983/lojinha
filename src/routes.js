import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Lamb from "./pages/Lamb";
import Order from "./pages/Order";
import Orders from "./pages/Orders";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orders" exact>
          <Orders />
        </Route>
        <Route path="/lamb" exact>
          <Lamb />
        </Route>
        <Route path="/" exact>
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
