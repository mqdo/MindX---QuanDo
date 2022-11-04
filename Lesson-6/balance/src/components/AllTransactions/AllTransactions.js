import "./AllTransactions.css";
import FilterByTime from "../Filters/FilterByTime/FilterByTime";
import NetIncome from "../NetIncome/NetIncome";
import EmptyData from "../EmptyData/EmptyData";
import TransactionList from "../TransactionList/TransactionList";
import { useState } from "react";

export default function AllTransactions({ list, showHome }) {
  const [filter, setFilter] = useState("day");

  const filteredDates =
    (filter === "day" && [...new Set(list.map((item) => item.date))]) ||
    (filter === "month" && [
      ...new Set(list.map((item) => item.date.slice(0, 7))),
    ]) ||
    (filter === "year" && [
      ...new Set(list.map((item) => item.date.slice(0, 4))),
    ]);

  const newList = filteredDates
    ? filteredDates.map((date, index) => {
        return date !== null ? (
          <TransactionList
            key={index}
            list={list.filter((item) => item.date.includes(date))}
            header={<h3>{date.split("-").reverse().join(" - ")}</h3>}
            limit={0}
          />
        ) : null;
      })
    : null;

  const handleChangeFilter = (e) => {
    const newValue = e.target.value;
    setFilter((prev) => newValue);
  };

  return (
    <div className="all-transactions">
      <div className="page-header">
        <button type="button" className="navigate" onClick={showHome}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h3>All Transaction</h3>
      </div>
      <FilterByTime filter={filter} handleChange={handleChangeFilter} />
      <NetIncome list={list} page="all-trans" />
      <div className="transaction-lists">
        {newList.length > 0 ? newList : <EmptyData />}
      </div>
    </div>
  );
}
