import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiRickAndMorty from "./pages/RickAndMorty";
import Users from "./pages/Users";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="rick-and-morty" element={<ApiRickAndMorty />} />
          <Route path="user" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
