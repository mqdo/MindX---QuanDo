import "./FilterByTime.css";

export default function FilterByTime({ filter, handleChange }) {
  return (
    <div className="transaction-time">
      <input
        type="radio"
        id="filter-day"
        value="day"
        checked={filter === "day"}
        onChange={handleChange}
      />
      <label
        htmlFor="filter-day"
        className={filter === "day" ? "time-label checked" : "time-label"}
      >
        Day
      </label>
      <input
        type="radio"
        id="filter-month"
        value="month"
        checked={filter === "month"}
        onChange={handleChange}
      />
      <label
        htmlFor="filter-month"
        className={filter === "month" ? "time-label checked" : "time-label"}
      >
        Month
      </label>
      <input
        type="radio"
        id="filter-year"
        value="year"
        checked={filter === "year"}
        onChange={handleChange}
      />
      <label
        htmlFor="filter-year"
        className={filter === "year" ? "time-label checked" : "time-label"}
      >
        Year
      </label>
    </div>
  );
}