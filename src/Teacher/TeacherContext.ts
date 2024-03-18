//Context som lagrar alla Teachers (namn)

import { createContext } from "react";
import uuid from "react-uuid";

//Skapar en egen typ för teacher
type Teacher = {
  id: string;
  name: string;
  age: number;
  teach: string [];
};

export const initialTeacher: Teacher[] = [
  {
    id: uuid(),
    name: "Åke",
    age: 57,
    teach: ["Matematik", "Historia", "Orientering"],
  },
  {
    id: uuid(),
    name: "Margit",
    age: 63,
    teach: ["Syslöjd", "Hemkuskap", "NO"]
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 35,
    teach: ["Historia", "Religion"]
  },
];

export const TeacherContext = createContext([] as Teacher[]);