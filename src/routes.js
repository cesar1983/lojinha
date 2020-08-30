import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Order from "./pages/Order";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orders" exact>
          <Orders />
        </Route>
        <Route path="/order/:id" exact>
          <OrderDetail />
        </Route>
        <Route path="/" exact>
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
