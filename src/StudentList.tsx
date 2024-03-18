//Komponent för att visa alla studenter
import { StudentContext } from "./StudentContext";
import { useContext } from "react";

const StudentList = () => {
  const students = useContext(StudentContext);

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
