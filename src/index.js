import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import Router from "./Router";
import { GlobalStyle } from "./style/GlobalStyle";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
