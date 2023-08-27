import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/reduxIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Providing the store via the store prop
  // Provider is similar to that of Context
  <Provider store={store}>
    <App />
  </Provider>
);
