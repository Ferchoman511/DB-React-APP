import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";
import MensScreen from "../pages/MensScreen";
import SearchScreen from "../pages/SearchScreen";
import WomensScreen from "../pages/WomensScreen";
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/men" component={MensScreen} />
        <Route exact path="/women" component={WomensScreen} />
        <Route exact path="/search" component={SearchScreen} />

        <Route exact path="/character/:id" component={CharacterScreen} />
        <Redirect to="/men" />
      </Switch>
    </>
  );
};

export default AppRouter;
