import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import { shoeReducer } from "./ExShoeRedux/redux/reducer";
// import { diceReducer } from "./DoXucXac/ReduxXucXac/reducerXucXac";
import { reducerOanTuTi } from "./MainOanTuTi/reduxOanTuTi/reducerOanTuTi";
const root = ReactDOM.createRoot(document.getElementById("root"));
// tạo store
export let store = createStore(reducerOanTuTi, composeWithDevTools());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
