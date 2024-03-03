import { useSelector } from "react-redux";
import "./App.css";
import AccountOperations from "./features/accounts/AccountOperations";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  // console.log(fullName);

  return (
    <div className=" p-4 bg-black/60 flex gap-5 flex-col text-center mt-28">
      <h2 className=" text-4xl font-bold text-white underline">
        The React Redux Bank...💰
      </h2>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
