import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { StylesProvider } from "@material-ui/styles";
import App from "./containers/App";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "typeface-montserrat";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
