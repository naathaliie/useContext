import "./App.css";
import { StudentContext } from "./StudentContext";
import StudentList from "./StudentList";
import { initialStudents } from "./StudentContext";
import { TeacherContext, initialTeacher } from "./TeacherContext";
import TeacherList from "./TeacherList";
function App() {
  return (
    <div>
      <StudentContext.Provider value={initialStudents}>
        <h1>Student Context Demo Stuff</h1>
        <StudentList />
      </StudentContext.Provider>
      <TeacherContext.Provider value={initialTeacher}>
        <TeacherList />
      </TeacherContext.Provider>
    </div>
  );
}

export default App;
