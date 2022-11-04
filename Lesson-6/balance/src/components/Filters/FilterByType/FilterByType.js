import "./FilterByType.css";

export default function FilterByType({ type, handleChange }) {
  return (
    <div className="transaction-type">
      <input
        type="radio"
        name="type"
        id="type-income"
        value="income"
        checked={type === "income"}
        onChange={handleChange}
      />
      <label
        htmlFor="type-income"
        className={type === "income" ? "type-label income checked" : "type-label income"}
      >
        Income
      </label>
      <input
        type="radio"
        name="type"
        id="type-expense"
        value="expense"
        checked={type === "expense"}
        onChange={handleChange}
      />
      <label
        htmlFor="type-expense"
        className={type === "expense" ? "type-label expense checked" : "type-label expense"}
      >
        Expense
      </label>
    </div>
  );
}
