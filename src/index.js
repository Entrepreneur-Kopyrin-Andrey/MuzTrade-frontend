import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Admin from "./admin/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
      <Admin />
      
    </Provider>
  </BrowserRouter>
);
