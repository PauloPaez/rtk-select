import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MiRouter from "./router/MiRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MiRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
