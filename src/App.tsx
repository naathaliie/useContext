import { StudentContext } from "./Student/StudentContext";
import { initialStudents } from "./Student/StudentContext";
import { TeacherContext, initialTeacher } from "./Teacher/TeacherContext";

import "./App.css";
import StudentList from "./Student/StudentList";
import TeacherList from "./Teacher/TeacherList";
import { GlobalStatesContext } from "./GlobalStateContext";
import { initialGlobalState } from "./GlobalStateContext";
import { MonsterContext, initialMonsters } from "./Monster/MonsterContext";
import MonsterList from "./Monster/MonsterList";

function App() {
  return (
    <div>
      <GlobalStatesContext.Provider value={initialGlobalState}>
        <h1>Student Context Demo Stuff</h1>
        <TeacherList />
        <StudentList />
      </GlobalStatesContext.Provider>
      <MonsterContext.Provider value={initialMonsters}>
        <MonsterList />
      </MonsterContext.Provider>
    </div>
  );
}

export default App;
