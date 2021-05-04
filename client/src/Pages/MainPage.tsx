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
      <TitleList>
      <MemoryPosts>{'기록 & 동행'}</MemoryPosts>
      {/* <PartyPosts>동행</PartyPosts> */}
      </TitleList>
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
  // background: black;
`;

const Img = styled.img`
  width: 1000px;
  height: 700px;

  @media (max-width: 375px) {
    width: 300px;
    height: 300px;
    margin-top: -1000px;
    margin-bottom: -1000px;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 500px;
  }
`;

const TitleList = styled.div`
  display: flex;
  justify-content: center;
`
const MemoryPosts = styled.h1`
  margin-right: -20px;
`;

const PartyPosts = styled.h1``;

export default MainPage;
