import "./NetIncome.css";
import IncomeExpenses from "./IncomeExpenses/IncomeExpenses";

export default function NetIncome({list, page}) {
  const incomeList = list.filter(elem => elem.type === "income");
  const expenseList = list.filter(elem => elem.type === "expense");

  return (
    <div className={`net-income ${page}`}>
      <IncomeExpenses list={incomeList} page={page} type={"income"} />
      <IncomeExpenses list={expenseList} page={page} type={"expense"} />
    </div>
  );
}
