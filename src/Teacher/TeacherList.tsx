import { useContext } from "react";
/* import { TeacherContext } from "./TeacherContext"; */
import "./TeacherList.scss";

import { GlobalStatesContext } from "../GlobalStateContext";

const TeacherList = () => {
  const globalState = useContext(GlobalStatesContext);
  const teachers = globalState.teachers;

  return (
    <div className="techerListDiv">
      <h2>TeacherList</h2>
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Namn: {t.name} <br /> Ålder: {t.age} <br /> Ämne:{" "}
              {t.teach.join(", ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
