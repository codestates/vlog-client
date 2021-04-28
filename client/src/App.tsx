import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import MyPage from "./Pages/MyPage";
import { Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/page" render={() => <MyPage />} />
      </Switch>
    </div>
    
  );
}

export default App;
