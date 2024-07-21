import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home'
import Metis from "./Component/Metis";
import Probleme from "./Component/Probleme";
import Rôle from "./Component/Rôle";
import Logo from './Component/Assets/logo.png'
import HeroOuTraitre from "./Component/HeroOuTraitre";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <img src={Logo} alt='' className="hero-icon"></img>
      </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/metis">
            <Metis />
          </Route>
          <Route exact path='/probleme'>
            <Probleme />
          </Route>
          <Route exact path='/rôle'>
            <Rôle />
          </Route>
          <Route exact path='/herooutraitre'>
          <HeroOuTraitre />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}