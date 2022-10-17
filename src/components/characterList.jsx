import React from "react";
import { useEffect, useState } from "react";
import { Character } from "./characters";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setsearch] = useState("");
  const [results, setresults] = useState([]);
  const [value, setvalue] = useState(true);

  const filter = (worlds) => {
    let datos = results.filter((data) => {
      if (data.name.toLowerCase().includes(worlds.toLowerCase())) {
        return data;
      }
    });
    if (datos.length == 0) {
      setvalue(false);
    } else {
      setvalue(true);
    }
    setCharacters(datos);
  };

  const seacher = (e) => {
    setsearch(e.target.value);
    filter(e.target.value);
  };
  //Aqui estoy validando si esta vacio el input

  useEffect(() => {
    async function getData() {
      const getApi = await fetch(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      const data = await getApi.json();
      setCharacters(data);
      setresults(data);
    }

    getData();
  }, []);

  return (
    <div className="container">
      <input
        value={search}
        placeholder="Search..."
        onChange={seacher}
        className="form-control input-sm"
        type="text"
      />
        {value ?  <div className="row">
       

       {characters.map((character) => {
         return (
           <div key={character.id} className="col-md-4">
             <Character character={character} />
           </div>
         );
       })}
     </div> :<div className="bg-dark">Busqueda no encontrada</div> }
     
    </div>
  );
}
