//Komponent för att visa alla studenter
/* import { StudentContext } from "./StudentContext"; */
import { useContext } from "react";
import { GlobalStatesContext } from "../GlobalStateContext";

const StudentList = () => {
  const globalState = useContext(GlobalStatesContext);
  const students = globalState.students;

  return (
    <div>
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
