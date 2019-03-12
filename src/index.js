import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "./util/configureStore";

import "./index.css";
import App from "./components/App/App";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const initialState = {
  activitiesStore: {
    scheduled: [],
    tracked: [],
    isFetching: false
  }
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
