import "./IncomeExpenses.css";
import numberWithCommas from "../../../numberWithCommas";

export default function IncomeExpenses({ list, page, type }) {
  const total = list.reduce((prev, curr) => {
    return prev + parseFloat(curr.amount);
  }, 0);

  const title = type === "expense" ? "Expenses" : "Income";

  const prefix =
    type === "income" ? (
      <i id="icon-income" className="fa-solid fa-arrow-up"></i>
    ) : (
      <i id="icon-expense" className="fa-solid fa-arrow-down"></i>
    );

  return (
    <div className={`income-expense ${page} ${type}`}>
      {page === "home" ? prefix : null}
      <span className={`net-title`}>{title}</span>
      <br />
      <h3 className="net-amount">
        $ {numberWithCommas(total.toFixed(2))}
      </h3>
    </div>
  );
}
