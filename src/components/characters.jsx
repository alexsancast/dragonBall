import React from "react";

export function Character({ character }) {
  return (
    <div>
      <img src={character.imageUrl} />
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
    </div>
  );
}
