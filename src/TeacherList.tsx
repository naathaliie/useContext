import { useContext } from "react";
import { TeacherContext } from "./TeacherContext";

const TeacherList = () => {
  const teachers = useContext(TeacherContext);

  return (
    <div>
      <h2>TeacherList</h2>
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Namn: {t.name}, Ålder: {t.age}, Undervisar i: {t.teach}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
