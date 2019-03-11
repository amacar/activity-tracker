import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import App from "./components/App/App";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(<App />, document.getElementById("app"));
