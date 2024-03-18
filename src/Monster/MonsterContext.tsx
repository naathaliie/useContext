// Importera createContext från React-biblioteket
import { createContext } from "react";

// Typa upp hur varje monster ska se ut
type Monster = {
  name: string; // Namn på monstret (sträng)
  eyes: number; // Antal ögon på monstret (nummer)
  FavouritFood: string[]; // Favoritmaten för monstret (array av strängar)
};

// Typa upp hur MonsterState skall se ut, som ett object som innehåller en array av Monster
type MonsterState = {
  monsters: Monster[]; // En array av Monster-objekt
};

// Deklarerar initialMonsters som skall vara av typen MonsterState
//Vi sätter det initialavärdet på MonsterContext i den komponent tillämpar wrappern.(<MonsterContext.Provider value={initialMonsters}>)
export const initialMonsters: MonsterState = {
  monsters: [
    // Array av Monster-objekt
    {
      name: "UnicornDevil",
      eyes: 666,
      FavouritFood: ["Heart", "Flesh"],
    },
    {
      name: "RaindowDeath",
      eyes: 59,
      FavouritFood: ["Fingers", "Tongue"],
    },
    {
      name: "PinkSlayer",
      eyes: 1,
      FavouritFood: ["Eyes", "Heart"],
    },
  ],
};

export const MonsterContext = createContext({} as MonsterState); // Exportera en kontext av typen MonsterState
