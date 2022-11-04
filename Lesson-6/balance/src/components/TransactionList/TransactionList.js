import "./TransactionList.css";
import "../EmptyData/EmptyData";
import TransactionContainer from "./TransactionContainer/TransactionContainer";
import EmptyData from "../EmptyData/EmptyData";

export default function TransactionList({ header, list, limit }) {
  const newList = parseInt(limit) === 0 ? list : list.slice(0, parseInt(limit));

  return (
    <div className="transaction-list">
      {header}
      {list.length > 0 ? (
        <TransactionContainer list={newList} />
      ) : (
        <EmptyData />
      )}
    </div>
  );
}
