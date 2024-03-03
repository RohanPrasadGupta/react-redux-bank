// if not reduxJS createstore is used

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import accountReducer from "./features/accounts/accountSlice";
// import customerReducer from "./features/customers/customerSlice";
// import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// configureStore will help to manage the redux more effeciently
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore(
  {
    reducer: {
      account: accountReducer,
      customer: customerReducer,
    },
  }
  // rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// .......................................................

// ************************
// *********************************************

// MANUALLY USING REDUCER WAY WO ASSIGN TASK
// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 200 });

// console.log(store.getState());

// store.dispatch({
//   type: "account/requetsLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy Something",
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());
