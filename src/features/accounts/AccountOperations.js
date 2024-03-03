import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withDrawAmount, setWithDrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  // const account = useSelector((state) => state.account);
  // console.log(account);

  const {
    loan: currentLoan,
    loanPurpose: curLoanPurpose,
    balance,
    isFetching,
  } = useSelector((state) => state.account);

  // console.log(balance, currentLoan, curLoanPurpose);

  function handleDeposite() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithDraw() {
    if (!withDrawAmount) return;
    dispatch(withdraw(withDrawAmount));
    setWithDrawAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !purpose) return;
    dispatch(requestLoan(loanAmount, purpose));
    setLoanAmount("");
    setPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className=" flex flex-col gap-3 items-center ">
      <h3 className=" text-3xl font-bold font-serif">
        Your Account Operations
      </h3>

      <div className=" flex flex-row gap-4 p-2 items-center">
        <label className=" text-2xl font-semibold">Deposit </label>
        <input
          className=" rounded-md p-2 "
          type="number"
          placeholder="Enter Amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(+e.target.value)}
        />
        <select
          className=" rounded-md p-2 font-extrabold "
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">US DOLLAR</option>
          <option value="EUR">EURO</option>
          <option value="INR">Indian Rupees</option>
        </select>
        <button
          className="border-2 w-fit p-2 text-2xl bg-yellow-200 border-black rounded-lg font-bold text-black hover:bg-green-400"
          onClick={handleDeposite}
          disabled={isFetching}
        >
          {isFetching ? "Converting...." : `Deposit ${depositAmount}`}
        </button>
      </div>

      <div className=" flex flex-row gap-4 p-2 items-center">
        <label className=" text-2xl font-semibold">Withdraw </label>
        <input
          className=" rounded-md p-2 "
          type="number"
          placeholder="Enter Amount"
          value={withDrawAmount}
          onChange={(e) => setWithDrawAmount(+e.target.value)}
        />
        <button
          className="border-2 w-fit p-2 text-2xl bg-yellow-200 border-black rounded-lg font-bold text-black hover:bg-red-400"
          onClick={handleWithDraw}
        >
          Withdraw
        </button>
      </div>

      <div className=" flex flex-row gap-4 p-2 items-center">
        <label className=" text-2xl font-semibold">Request Loan </label>
        <input
          className=" rounded-md p-2 "
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(+e.target.value)}
        />
        <input
          className=" rounded-md p-2 "
          type="text"
          placeholder="Loan Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <button
          className="border-2 w-fit p-2 text-2xl bg-yellow-200 border-black rounded-lg font-bold text-black hover:bg-blue-200"
          onClick={handleRequestLoan}
        >
          Request Loan
        </button>
      </div>

      {currentLoan > 0 ? (
        <>
          <div className=" flex flex-row gap-4 p-2 items-center">
            <label className=" text-2xl font-semibold">
              Pay Back Loan: ${currentLoan} ({curLoanPurpose})
            </label>
            <button
              className="border-2 w-fit p-2 text-2xl bg-yellow-200 border-black rounded-lg font-bold text-black hover:bg-red-200"
              onClick={handlePayLoan}
            >
              Payloan
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AccountOperations;
