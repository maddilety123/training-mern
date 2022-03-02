import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Sample from "./components/Sample/Sample";
import store from "./components/store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact path="about" element={<About />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="sample" element={<Sample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
