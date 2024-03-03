import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";

// store.dispatch({ type: "account/deposit", payload: 456 });

// store.dispatch({
//   type: "customer/createCustomer",
//   payload: {
//     fullName: "Rohan",
//     nationalId: "dawdawd",
//     createdAt: Date.now().toString(),
//   },
// });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
