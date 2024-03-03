import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  //   console.log(customer);
  //   console.log(customer2);
  const balance = useSelector((store) => store.account.balance);
  return (
    <div className=" flex flex-col text-center text-3xl">
      <h2 className=" text-white font-mono font-bold underline">
        Welcome {customer}
      </h2>
      <h3 className=" flex gap-3 justify-center">
        Your Balance :
        <p className=" text-white font-bold font-serif"> ${balance} </p>{" "}
      </h3>
    </div>
  );
}
export default Customer;
