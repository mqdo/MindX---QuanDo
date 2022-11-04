import "./BottomNavigation.css";
import homeIconChecked from "../../utils/home-icon-checked.svg";
import homeIconUnchecked from "../../utils/home-icon-unchecked.svg";
import addIcon from "../../utils/add-icon.svg";
import statisticsIconUnchecked from "../../utils/statistics-icon-unchecked.svg";
import statisticsIconChecked from "../../utils/statistics-icon-checked.svg";

export default function BottomNavigation({
  showing,
  showHome,
  showAdd,
  showStats,
}) {
  const homeIcon = showing === "homepage" ? homeIconChecked : homeIconUnchecked;
  const statisticsIcon =
    showing === "statistics" ? statisticsIconChecked : statisticsIconUnchecked;

  return (
    <div className="bottom-nav">
      <button type="button" onClick={showHome}>
        <img src={homeIcon} alt="home-icon" />
      </button>
      <div className="button-add" onClick={showAdd}>
        <button type="button">
          <img src={addIcon} alt="add-icon" />
        </button>
      </div>
      <button type="button" onClick={showStats}>
        <img src={statisticsIcon} alt="statistics-icon" />
      </button>
    </div>
  );
}
