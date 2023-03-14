import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MensScreen = () => {
  const men = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h1>Men</h1>
      <hr />
      <div className="row">
        {men.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MensScreen;
