import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";
const WomensScreen = () => {
  const women = Characters.filter((el) => el.type === "m");
  return (
    <div className="container mt-3">
      <h1>Womens</h1>
      <hr />
      <div className="row">
        {women.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomensScreen;
