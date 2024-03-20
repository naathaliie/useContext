import { GlobalStateContext, InitalGlobalState } from "./GlobalStateContext";
import StudentList from "./Student/StudentList";
import SearchTeacher from "./Teacher/SearchTeacher";
import TeacherList from "./Teacher/TeacherList";
import "./App.scss";
import VehicleList from "./Fordon/VehicleList";
import { Vehicles } from "./Fordon/VehicleTypes";

function App() {
  return (
    <div className="app">
      <GlobalStateContext.Provider value={InitalGlobalState}>
        <TeacherList />
        <StudentList />
        <SearchTeacher />
      </GlobalStateContext.Provider>
      <VehicleList Vehicles={Vehicles} />
    </div>
  );
}

export default App;
