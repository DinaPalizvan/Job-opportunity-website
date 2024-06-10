/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAll, deleteSkill } from "../../redux/filterSlice";
import "./filterBox.css";

export default function FilterBox() {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  function clearClick() {
    dispatch(deleteAll());
  }

  function closeClick(e) {
    dispatch(deleteSkill({ text: e.target.parentElement.textContent }));
  }

  return (
    <div
      className="filterBox"
      style={{ visibility: skills.length > 0 ? "visible" : "hidden" }}
    >
      <div>
        {skills.map((s) => {
          return (
            <span className="filteredSkill">
              {s}
              <button className="close" onClick={closeClick}>
                X
              </button>
            </span>
          );
        })}
      </div>
      <span className="clear" onClick={clearClick}>
        Clear
      </span>
    </div>
  );
}
