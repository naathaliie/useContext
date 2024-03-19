//Komponent för att visa alla studenter
/* import { StudentContext } from "./StudentContext"; */
import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import "./StudentList.scss";

const StudentList = () => {
  const globalState = useContext(GlobalStateContext);
  const students = globalState.students;

  return (
    <div className="studentListDiv">
      <h2>StudentList</h2>
      <ul>
        {students.map((s) => {
          return (
            <li key={s.id}>
              {" "}
              Namn: {s.name}, Ålder: {s.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
