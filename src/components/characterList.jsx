import React from "react";
import { useEffect, useState } from "react";
import { Character } from "./characters";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getData() {
      const getApi = await fetch(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      const data = await getApi.json();
      setCharacters(data);
    }

    getData();
  }, []);

  return (
    <div className="container bg-danger">
      <div className="row">
        {characters.map((character) => {
          return (
            <div key={character.id} className="col-md-4">
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
