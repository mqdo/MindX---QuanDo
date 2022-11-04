import "./EmptyData.css";

export default function EmptyData() {
  return (
    <div className="empty-data">
      <p>{"Oops! There is no transactions yet :("}</p>
      <br />
      <p>Please add more</p>
    </div>
  );
}