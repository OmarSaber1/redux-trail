import react from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

/// Redux imports
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

// components import
import App from "./app";

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
