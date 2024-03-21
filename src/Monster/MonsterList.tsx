import { useContext, useState } from "react";
import { monsterContext } from "./MonsterContext";

const MonsterList = () => {
  const { state, dispatch } = useContext(monsterContext);
  const [inputMonster, setInputMonster] = useState(""); // tom sträng eller initalMonsters??

  const handledChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputMonster(e.target.value);
  };

  const hanleOnClick = () => {
    dispatch({
      type: "add",
      payload: {
        type: "kindmonster",
        name: inputMonster,
        eyes: 1,
        fleshEater: true,
        pet: "Dragonpuppy",
      },
    });
  };

  return (
    <div className="monsterListDiv">
      <h2>The monster list</h2>
      <div>
        <label htmlFor="monsterInput">Skapa ett nytt monster:</label>
        <input onChange={handledChange} id="monsterInput" type="text" />
        <button onClick={hanleOnClick}>Lägg till</button>
        <button
          onClick={() => {
            dispatch({ type: "remove", payload: inputMonster });
          }}
        >
          Ta bort
        </button>
      </div>
      <div className="kindMonsterDiv">
        <h4>Kind monsters</h4>
        {state.kindMonsters.map((m, index) => {
          return (
            <ul key={index}>
              Namn: {m.name}
              <li>Antal ögon: {m.eyes}</li>
              <li>Äter kött: {m.fleshEater ? "Ja" : "Nej"}</li>
              <li>Husdjur: {m.pet}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default MonsterList;
