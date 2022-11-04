import "./AddNewTransaction.css";
import AddTransactionForm from "./AddTransactionForm/AddTransactionForm";

export default function AddNewTransaction({
  transaction,
  handleChange,
  handleChangeDate,
  addNew,
  showHome,
}) {
  return (
    <div className="add-transaction">
      <div className="background"></div>
      <div className="page-header">
        <button type="button" className="navigate" onClick={showHome}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h3>Add Transaction</h3>
      </div>
      <AddTransactionForm
        transaction={transaction}
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        addNew={addNew}
      />
    </div>
  );
}
