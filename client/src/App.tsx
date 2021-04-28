<<<<<<< HEAD
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
=======
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
>>>>>>> 34f6a9e9db589d205e84c71948f4063331eeb54f
    </div>
    
  );
}

export default App;
