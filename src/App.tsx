import { GlobalStateContext, InitalGlobalState } from "./GlobalStateContext";
import StudentList from "./Student/StudentList";
import SearchTeacher from "./Teacher/SearchTeacher";
import TeacherList from "./Teacher/TeacherList";
import "./App.scss";
import VehicleList from "./Fordon/VehicleList";
import { Vehicles } from "./Fordon/VehicleTypes";
import MonsterList from "./Monster/MonsterList";
import MonsterContextProvider from "./Monster/MonsterContextProvider";

function App() {
  return (
    <div className="app">
      <GlobalStateContext.Provider value={InitalGlobalState}>
        <TeacherList />
        <StudentList />
        <SearchTeacher />
      </GlobalStateContext.Provider>
      {/* <VehicleList Vehicles={Vehicles} /> */}
      <MonsterContextProvider>
        <MonsterList />
      </MonsterContextProvider>
    </div>
  );
}

export default App;
