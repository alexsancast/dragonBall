import React from "react";
import "./characters.css";

export function Character({ character }) {

  return (


    <div className="text-center p-5">
      <img className=" img img-fluid rounded-bottom" src={character.imageUrl} />
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
    </div>
  );
}
