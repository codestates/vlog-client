import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import MyPage from './Pages/MyPage';
import NewPost from './Pages/NewPost';

function App() {
  // const handleClick = (title:any) => {
    
  // }
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/page' render={() => <MyPage />} />
        <Route exact path='/newPost' render={() => <NewPost />} />

      </Switch>
    </div>
    
  );
}

export default App;
