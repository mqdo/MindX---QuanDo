import "./TransactionItem.css";
import toDate from "../../../../toDate";
import numberWithCommas from "../../../../numberWithCommas";

export default function TransactionItem({ type, amount, date, note }) {
  return (
    <div className="transaction-item">
      <div className="transaction-detail">
        <h4 className="transaction-note">{note}</h4>
        <span className="transaction-date">{toDate(date)}</span>
      </div>
      <div className="transaction-amount">
        <h3 className={"transaction-" + type}>
          {type === "income"
            ? `+$${numberWithCommas(parseFloat(amount).toFixed(2))}`
            : `-$${numberWithCommas(parseFloat(amount).toFixed(2))}`}
        </h3>
      </div>
    </div>
  );
}
