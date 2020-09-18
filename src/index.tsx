import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./context/Store";
import HomePage from "./pages/HomePage";
import FavPage from "./pages/FavPage";
import { Router, RouteComponentProps } from "@reach/router";

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/' >
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
