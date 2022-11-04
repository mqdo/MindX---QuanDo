import "./TransactionList.css";
import TransactionContainer from "./TransactionContainer/TransactionContainer";

export default function TransactionList({header, list, limit}) {
  const newList = parseInt(limit) === 0 ? list : list.slice(0, parseInt(limit));

  return (
    <div className="transaction-list">
      {header}
      <TransactionContainer list={newList} />
    </div>
  );
}
