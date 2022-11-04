import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import AllTransactions from "./components/AllTransactions/AllTransactions";
import AddNewTransaction from "./components/AddNewTransaction/AddNewTransaction";
import Statistics from "./components/Statistics/Statistics";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import { useState } from "react";

function App() {
  const [transactionList, setList] = useState(
    JSON.parse(localStorage.getItem("transaction-list")) || []
  );
  localStorage.setItem("transaction-list", JSON.stringify(transactionList));
  const [transaction, setTransaction] = useState({
    type: "expense",
    amount: "",
    date: null,
    note: "",
  });
  const [showPage, setShowPage] = useState("homepage");

  const showHomepage = () => {
    setShowPage((prev) => "homepage");
  };

  const showAllTrans = () => {
    setShowPage((prev) => "allTransactions");
  };

  const showAddTrans = () => {
    setShowPage((prev) => "addTransaction");
  };

  const showStatistics = () => {
    setShowPage((prev) => "statistics");
  };

  const setTransDate = (value) => {
    if (value) {
      setTransaction({
        ...transaction,
        date: value,
      });
    }
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "type":
        if (e.target.checked) {
          setTransaction({
            ...transaction,
            type: e.target.value,
          });
        }
        break;
      case "amount":
        setTransaction({
          ...transaction,
          amount: e.target.value,
        });
        break;
      case "note":
        setTransaction({
          ...transaction,
          note: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const addNewTransaction = (e) => {
    e.preventDefault();
    const newList = [transaction, ...transactionList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setList((prev) => newList);
    localStorage.setItem("transaction-list", JSON.stringify(newList));
    setTransaction({ type: "expense", amount: "", date: null, note: "" });
  };

  return (
    <div className="App">
      <div className="main-content">
        {showPage === "homepage" ? (
          <Homepage list={transactionList} showAll={showAllTrans} />
        ) : null}
        {showPage === "allTransactions" ? (
          <AllTransactions list={transactionList} showHome={showHomepage} />
        ) : null}
        {showPage === "addTransaction" ? (
          <AddNewTransaction
            transaction={transaction}
            handleChange={handleInputChange}
            handleChangeDate={setTransDate}
            addNew={addNewTransaction}
            showHome={showHomepage}
          />
        ) : null}
        {showPage === "statistics" ? (
          <Statistics list={transactionList} showHome={showHomepage} />
        ) : null}
      </div>
      <BottomNavigation
        showing={showPage}
        showHome={showHomepage}
        showAdd={showAddTrans}
        showStats={showStatistics}
      />
    </div>
  );
}

export default App;
