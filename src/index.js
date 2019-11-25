import React, { Suspense } from "react";
import { observer, Provider } from "mobx-react";
import ReactDOM from "react-dom";
import "!style-loader!css-loader!../css/reset.css";
import Home from "./components/Home";
import LoadingHome from "./components/LoadingHome";
import ChangePageStore from "./store/ChangePageStore";
const changePageStore = new ChangePageStore();
ReactDOM.render(
  <Suspense fallback={<LoadingHome />}>
    <Provider changePageStore={changePageStore}>
      <Home />
    </Provider>
  </Suspense>,
  document.getElementById("IndexLayout")
);
