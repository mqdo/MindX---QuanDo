import "./Statistics.css";
import sortIcon from "../../utils/sort-icon.svg";
import FilterByType from "../Filters/FilterByType/FilterByType";
import TransactionChart from "./TransactionChart/TransactionChart";
import TransactionList from "../TransactionList/TransactionList";
import FilterByYear from "../Filters/FilterByYear/FilterByYear";
import { useState } from "react";

export default function Statistics({ list, showHome }) {
  const filteredYears = [
    ...new Set(list.map((item) => item.date.slice(0, 4))),
  ].sort((a, b) => new Date(b) - new Date(a));

  const [typeFilter, setTypeFilter] = useState("expense");
  const [yearFilter, setYearFilter] = useState(
    filteredYears ? filteredYears[0] : "2022"
  );
  const [sortFilter, setSortFilter] = useState("descending");

  const newList = list.filter(
    (item) => item.type === typeFilter && item.date.includes(yearFilter)
  );
  const sortedList = newList.slice().sort((a, b) => {
    return sortFilter === "ascending"
      ? parseFloat(a.amount) - parseFloat(b.amount)
      : parseFloat(b.amount) - parseFloat(a.amount);
  });

  const title = `${sortFilter === "descending" ? "Top" : "Least"} ${
    typeFilter === "expense" ? "Spending" : "Income"
  } ${yearFilter}`;

  const handleSetType = (e) => {
    setTypeFilter((prev) => e.target.value);
  };

  const handleSetYear = (e) => {
    setYearFilter((prev) => e.target.value);
  };

  const handleSetSort = () => {
    setSortFilter((prev) =>
      prev === "descending" ? "ascending" : "descending"
    );
  };

  return (
    <div className="transaction-statistics">
      <div className="page-header">
        <button type="button" className="navigate" onClick={showHome}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h3>Statistics</h3>
      </div>
      <div className="statistics-filter">
        <FilterByType type={typeFilter} handleChange={handleSetType} />
        <FilterByYear years={filteredYears} handleChange={handleSetYear} />
      </div>
      <TransactionChart list={newList} type={typeFilter} />
      <div className="sorted-list">
        <button onClick={handleSetSort} className="button-sort">
          <img src={sortIcon} alt="sort-icon" />
        </button>
        <TransactionList
          list={sortedList}
          header={<h3>{title}</h3>}
          limit={5}
        />
      </div>
    </div>
  );
}
