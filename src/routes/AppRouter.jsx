import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";
// import CharacterScreen from "../pages/CharacterScreen";
// import MensScreen from "../pages/MensScreen";
// import SearchScreen from "../pages/SearchScreen";
// import WomensScreen from "../pages/WomensScreen";
// const Navbar = lazy(() => import("../components/Navbar"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MensScreen = lazy(() => import("../pages/MensScreen"));
const WomensScreen = lazy(() => import("../pages/WomensScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 className="text-center">Loading ...</h1>}>
        <Switch>
          <Route exact path="/men" component={MensScreen} />
          <Route exact path="/women" component={WomensScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Route exact path="/character/:id" component={CharacterScreen} />
          <Redirect to="/men" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
