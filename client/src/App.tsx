import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'

function App() {
  // const handleClick = (title:any) => {
    
  // }
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
    </div>
    
  );
}

export default App;
