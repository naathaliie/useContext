import { useContext } from "react";
/* import { TeacherContext } from "./TeacherContext"; */
import "./TeacherList.scss";

import { GlobalStateContext } from "../GlobalStateContext";

const TeacherList = () => {
  const globalState = useContext(GlobalStateContext);
  const teachers = globalState.teachers;

  return (
    <div className="techerListDiv">
      <h2>TeacherList</h2>
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Namn: {t.name} <br /> Klass: {t.class} <br /> Ämne:{" "}
              {t.headTopics.join(", ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
