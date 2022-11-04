import TransactionItem from "./TransactionItem/TransactionItem";

export default function TransactionContainer({ list }) {
  return (
    <div className="transaction-container">
      {list.map((elem, index) => (
        <TransactionItem
          key={`item-${index}`}
          type={elem.type}
          amount={elem.amount}
          date={elem.date}
          note={elem.note}
        />
      ))}
    </div>
  );
}
