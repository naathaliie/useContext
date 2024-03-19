import { GlobalStateContext, InitalGlobalState } from "./GlobalStateContext";
import StudentList from "./Student/StudentList";
import SearchTeacher from "./Teacher/SearchTeacher";
import TeacherList from "./Teacher/TeacherList";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <GlobalStateContext.Provider value={InitalGlobalState}>
        <TeacherList />
        <StudentList />
        <SearchTeacher />
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
