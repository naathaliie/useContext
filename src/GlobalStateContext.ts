//Context som lagrar alla Teachers och Students

import { createContext } from "react";
import uuid from "react-uuid";

//Skapar en egen typ för teacher som är ett objekt
type Teacher = {
  id: string;
  name: string;
  age: number;
  teach: string [];
};

const initialTeacher: Teacher[] = [
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
/******************************************************************************/
type Student = {
    id: string;
    name: string;
    age: number;
  };

export const initialStudents: Student[] = [
    {
      id: uuid(),
      name: "Bosse",
      age: 34,
    },
    {
      id: uuid(),
      name: "Stina",
      age: 46,
    },
    {
      id: uuid(),
      name: "Kim",
      age: 26,
    },
  ];
/******************************************************************************/
type GlobalStates = {
    students: Student[],
    teachers: Teacher[],
};

export const initialGlobalState:GlobalStates = {
    students: initialStudents,
    teachers: initialTeacher
}

export const GlobalStatesContext = createContext({} as GlobalStates);



