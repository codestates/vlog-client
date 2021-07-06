import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MyPage from "./Pages/MyPage";
import NewPost from "./Pages/NewPost";
import MainCurrentPost from "./Pages/MainCurrentPost";
import MyPageCurrentPost from "./Pages/MyPageCurrentPost";
import EditPostPage from "./Pages/EditPostPage";
import PartyPostsPage from "./Pages/PartyPostsPage";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/page" render={() => <MyPage />} />
        <Route path="/newPost" render={() => <NewPost />} />
        <Route path="/MainCurrentPost" render={() => <MainCurrentPost />} />
        <Route path="/MypageCurrentPost" render={() => <MyPageCurrentPost />} />
        <Route path="/EditPostPage" render={() => <EditPostPage />} />
        <Route path="/party" render={() => <PartyPostsPage />} />
      </Switch>
    </div>
  );
}

export default App;
