import React from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import MainPostList from "../components/MainPostsList";
import styled from "styled-components";
import imageMap from "../img/map.jpg";

function MainPage() {
  console.log("mainpage");

  function handlebutton() {
    console.log("clicked");
  }
  return (
    <>
      <TopContainer>
        <Img src={imageMap} />
      </TopContainer>
      <PostListTitle>기록</PostListTitle>
      <MainPostList />
    </>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const Img = styled.img`
  width: 70vw;
  height: 80vh;
  outline-color
`;

const PostListTitle = styled.h1``;

export default MainPage;
