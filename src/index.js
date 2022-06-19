import React from "react";
import { Provider, provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./features/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
