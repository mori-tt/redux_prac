import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createStore } from "redux";

// // actions -> increment, decrement
// const increment = () => {
//   return { type: "INCREMENT" };
// };
// const decrement = () => {
//   return { type: "DECREMENT" };
// };

// // reducer ->アクションと前の状態を組み合わせて、新しい状態を更新する
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };
// // store
// let store = createStore(counterReducer);

// // コンソールに新しい状態を出力
// store.subscribe(() => console.log(store.getState()));

// // dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
