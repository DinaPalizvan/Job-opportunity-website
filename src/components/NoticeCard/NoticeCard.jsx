import data from "./data.json";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addSkills } from "../../redux/filterSlice";

export default function NoticeCard() {
  const filteredSkills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  function addSkill(e) {
    const skill = e.target.textContent;
    if (!filteredSkills.includes(skill)) {
      dispatch(addSkills(skill));
    }
  }
  return (
    <>
      {data.map((d) => {
        const includesAllSkills =
          filteredSkills.length === 0 ||
          filteredSkills.every(
            (skill) => d.languages.includes(skill) || d.tools.includes(skill)
          );
        if (includesAllSkills) {
          return (
            <section
              className="card"
              key={d.id}
              style={{
                borderLeft: d.featured ? "5px solid rgb(70, 160, 160)" : "0",
              }}
            >
              <div className="container1">
                <img src={d.logo} alt="" />
                <div>
                  <span className="companyName">{d.company}</span>
                  {d.new ? <span className="new">NEW!</span> : null}
                  {d.featured ? (
                    <span className="featured">FEATURED</span>
                  ) : null}
                  <h4 className="position">{d.position}</h4>
                  <span className="extraData">
                    {d.postedAt} . {d.contract} . {d.location}
                  </span>
                </div>
              </div>
              <div className="container2">
                {d.languages.map((l) => {
                  return (
                    <span className="language" key={d.id} onClick={addSkill}>
                      {l}
                    </span>
                  );
                })}
                {d.tools.map((t) => {
                  return (
                    <span className="tools" key={d.id} onClick={addSkill}>
                      {t}
                    </span>
                  );
                })}
              </div>
            </section>
          );
        }
        return null;
      })}
    </>
  );
}
