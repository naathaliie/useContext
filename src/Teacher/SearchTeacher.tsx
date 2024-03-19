/* 4. Skapa en ny komponent SearchTeacher som ha ett inputfält, 
knapp och lista. Listan visar sökresultaten. 
Söka gör man på lärares namn genom att skriva i inputfältet 
och klicka på knappen.
 */
import "./SearchTeacher.scss";
import { useContext, useRef, useState } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

//Behövs för att typa upp resultNames
type Teacher = {
  id: string;
  name: string;
  class: number;
  headTopics: string[];
};

const SearchTeacher = () => {
  //Hämta alla teachers och spara i teachers
  const context = useContext(GlobalStateContext);
  const teachers = context.teachers;
  //inputRef för att hämta det som skrivs i input
  const inputRef = useRef<HTMLInputElement>(null);
  //inputValeu för att kunna "nollställa" inputfältet
  const [inputvalue, setInputValue] = useState("");
  //resultNames för att spara alla hittade teachers och skriva ut dem på sidan
  const [resultNames, setResultNames] = useState([] as Teacher[]);

  //Vad som händer när man klickar på knappen
  const handleOnClick = () => {
    if (inputRef.current?.value) {
      //Spara det som skrevs in i input i en egen variabel
      const searchInput = inputRef.current?.value;
      //.filter gör att vi går igenom hela arrayen av teachers och får tillbaka en ny shallowcopy av de element som matchar filtreringen
      let searchresults = teachers.filter((teacher) => {
        return teacher.name === searchInput;
      });
      //Om searchResults inte är tom vill vi sätta alla hittade teachers till resultNames
      //inputfältet skall tömmas och få tillbaka fokus
      if (searchresults.length > 0) {
        setResultNames(searchresults);
        setInputValue("");

        inputRef.current.focus();
      }
      //Om searchResults är tom meddelas det att sökningen inte gav något resultat
      //inputfältet tömms och får tillbaka fokus
      else {
        alert(`Din sökning "${inputvalue}" gav inga träffar`);
        setInputValue("");
        setResultNames([]);
        inputRef.current.focus();
      }
      //Om användaren inte skrivit in något i inputfältet
    } else {
      alert("Du måste skriva in ett namn i sökfältet");
    }
  };

  //OnChange-handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="searchTeacherDiv">
      <h3>SearchTeacher</h3>
      <div>
        <label htmlFor="teacherSearch">Sök på en lärare:</label>
        <input
          id="teacherSearch"
          value={inputvalue}
          onChange={handleChange}
          ref={inputRef}
          type="text"
        />
        <button onClick={handleOnClick}>Sök</button>
      </div>
      <div>
        <p>Sökresultat:</p>
        {resultNames.map((r) => {
          return (
            <ul key={r.id}>
              {r.name}
              <li>Undervisar i klass: {r.class} </li>
              <li>Huvudämnen: {r.headTopics.join(", ")}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SearchTeacher;
