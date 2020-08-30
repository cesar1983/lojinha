import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Spinner from "./components/UI/Spinner";
import App from "./App";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
