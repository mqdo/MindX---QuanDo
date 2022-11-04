import "./Homepage.css";
import Balance from "./Balance/Balance";
import TransactionList from "../TransactionList/TransactionList";

export default function Homepage({ list, showAll }) {
  return (
    <div className="homepage">
      <div className="background"></div>
      <Balance list={list} />
      <TransactionList
        header={
          <div className="list-header">
            <h3>Transactions History</h3>
            <button type="button" className="see-all" onClick={showAll}>
              See all
            </button>
          </div>
        }
        list={list}
        limit={6}
      />
    </div>
  );
}
