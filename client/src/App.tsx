import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MyPage from "./Pages/MyPage";
import NewPost from "./Pages/NewPost";
import MyPagePostPage from "./Pages/MyPagePostPage";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/page" render={() => <MyPage />} />
        <Route path="/newPost" render={() => <NewPost />} />
        <Route path="/mypagepost" render={() => <MyPagePostPage />} />
      </Switch>
    </div>
  );
}

export default App;
