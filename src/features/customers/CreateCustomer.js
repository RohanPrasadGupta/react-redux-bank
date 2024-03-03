import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
    // console.log(dispatch(createCustomer(fullName, nationalId)));
  }

  return (
    <div className=" flex flex-col gap-5 items-center">
      <h3 className=" text-3xl font-bold font-serif">Create New Customer</h3>
      <div className=" flex flex-col gap-4">
        <div>
          <label className=" text-2xl font-semibold">Full Name: </label>
          <input
            className=" rounded-md p-2 "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
          />
        </div>
        <div>
          <label className=" text-2xl font-semibold">National Id: </label>
          <input
            className=" rounded-md p-2 "
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder="Enter National Id"
          />
        </div>
        <button
          className="border-2 w-fit p-3 text-2xl bg-yellow-200 border-black rounded-lg font-bold text-black/80 hover:bg-green-400 hover:translate-y-1"
          onClick={handleClick}
        >
          Create new Customer
        </button>
      </div>
    </div>
  );
}

export default Customer;
