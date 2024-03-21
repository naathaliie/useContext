import { useReducer } from "react";
import {
  initialState,
  initialMonsters,
  monsterContext,
  KindMonster,
} from "./MonsterContext";

type MonsterContextProviderProps = {
  children: React.ReactNode;
};

type Action =
  | { type: "add"; payload: KindMonster }
  | { type: "remove"; payload: string };

/* const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
}; */

//monsterReducer funktionen
const monsterReducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case "add":
      return { kindMonsters: [...state.kindMonsters, action.payload] };
    case "remove":
      /* return=kallar på funktionen removeMonster */
      return {
        kindMonsters: removeMonster(state.kindMonsters, action.payload),
      };

    default:
      return state;
  }
};

const removeMonster = (monsters: KindMonster[], monstername: string) => {
  //Hitta monstrets index
  const foundMonstersIndex = monsters.findIndex((m) => {
    return m.name === monstername;
  });

  //Om inte arrayen är tom så (om monstret hittades)...
  if (foundMonstersIndex !== -1) {
    /*  Skapa en ny array utan det borttagna monstret...
    Genom att använda ...-operatorn (spread operator) för att packa upp resultaten från 
    slice-funktionerna skapas två separata arrayer, och de kombineras sedan till en enda 
    array genom att placera dem i en array-literal ([]). Slutresultatet är en ny array som 
    innehåller alla monster utom det som ska tas bort. Denna nya array returneras sedan från 
    removeMonster-funktionen för att uppdatera tillståndet i reducer-funktionen.*/
    return [
      ...monsters.slice(0, foundMonstersIndex),
      ...monsters.slice(foundMonstersIndex + 1),
    ];
  }
  //...annars returnera originalarrayen (om monstret inte hittades)
  else {
    console.log(`Kunde inte hitta ett monster men namn: ${monstername} `);
    return monsters;
  }
};

const MonsterContextProvider = ({ children }: MonsterContextProviderProps) => {
  const [state, dispatch] = useReducer(monsterReducer, initialMonsters);
  console.log("state", state);

  return (
    <monsterContext.Provider value={{ state, dispatch }}>
      {children}
    </monsterContext.Provider>
  );
};

export default MonsterContextProvider;
