import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { history } from "./redux/store";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
