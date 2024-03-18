import { useContext } from "react";
import { MonsterContext } from "./MonsterContext";

const MonsterList = () => {
  const monsterContext = useContext(MonsterContext);
  const monsters = monsterContext.monsters;
  console.log("Hej", monsters);
  return (
    <div>
      <ul>
        <h3>Några Monster</h3>
        {monsters.map((m, index) => {
          return (
            <li key={index}>
              Namn: {m.name},<br /> Antal ögon: {m.eyes}, <br />
              Favoritmat: {m.FavouritFood.join(",")}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MonsterList;
