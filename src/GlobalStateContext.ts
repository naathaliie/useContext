import { createContext } from "react";
import uuid from "react-uuid";

type Student = {
    id:string,
    name:string,
    age:number,
    class:number,
    fav_class: string[],
};
type Teacher = {
    id:string,
    name:string,
    lastname: string,
    class: number,
    headTopics: string[],
};

type GlobalState = {
    students: Student[],
    teachers: Teacher[],
};

export const InitalGlobalState:GlobalState = {
    students:[{
        id: uuid(),
        name: "Pelle",
        age: 12,
        class: 3,
        fav_class: ["Matte", "Svenska"],
    },
    {
        id: uuid(),
        name: "Lisa",
        age: 12,
        class: 3,
        fav_class: ["Historia", "Bild"],
    },
    {
        id: uuid(),
        name: "Klara",
        age: 13,
        class: 5,
        fav_class: ["Psykologi", "Idrott"],
    }],
    teachers:[ {
        id: uuid(),
        name: "lena",
        lastname:"andersson",
        class: 3,
        headTopics: ["Svenska", "Matte", "Historia"],
    },
    {
        id: uuid(),
        name: "per",
        lastname:"persson",
        class: 4,
        headTopics: ["Idrott", "Fysik", "Kemi"],
    },{
        id: uuid(),
        name: "olivia",
        lastname:"karlsson",
        class: 3,
        headTopics: ["Hemkunskap", "Slöjd", "Fysik"],
    },
    {
        id: uuid(),
        name: "per",
        lastname:"svensson",
        class: 3,
        headTopics: ["Slöjd", "Matte", "Historia"],
    },
    {
        id: uuid(),
        name: "per",
        lastname:"larsson",
        class: 4,
        headTopics: ["NO", "Psykologi", "Biologi"],
    },{
        id: uuid(),
        name: "olivia",
        lastname:"hult",
        class: 3,
        headTopics: ["Hemkunskap", "Slöjd", "Historia"],
    },
    {
        id: uuid(),
        name: "lena",
        lastname:"carlström",
        class: 3,
        headTopics: ["Slöjd"],
    },
    {
        id: uuid(),
        name: "per",
        lastname:"Kristensson",
        class: 4,
        headTopics: ["Bild", "Träslöjd"],
    },{
        id: uuid(),
        name: "klara",
        lastname:"gustafsson",
        class: 3,
        headTopics: ["Samhällskunskap", "Svenska", "Engelska"],
    }
]
};
export const GlobalStateContext = createContext({} as GlobalState);