import "./Balance.css";
import NetIncome from "../../NetIncome/NetIncome";
import numberWithCommas from "../../../numberWithCommas";

export default function Balance({ list }) {
  const balance = list.reduce((prev, curr) => {
    if (curr.type === "income") {
      return prev + parseFloat(curr.amount);
    } else {
      return prev - parseFloat(curr.amount);
    }
  }, 0);

  const totalBalance =
    balance < 0
      ? `-$${numberWithCommas(balance.toFixed(2) * -1)}`
      : `$${numberWithCommas(balance.toFixed(2))}`;

  return (
    <div className="account-balance">
      <div className="total-balance">
        <h4>Total Balance</h4>
        <h1>{totalBalance}</h1>
      </div>
      <NetIncome list={list} page={"home"} />
    </div>
  );
}
