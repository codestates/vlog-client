import React from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import MainPostsList from "../components/MainPostsList";
import styled from "styled-components";
import imageMap from "../img/map.jpg";
import usePoster from "../Hooks/usePoster";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function MainPage() {
  const history = useHistory()
  localStorage.setItem('isLogin', JSON.stringify(true))


  const handlePartyPosts = () => {
    history.push('/party')
  };

  return (
    <>
      <TopContainer>
        <Img src={imageMap} />
      </TopContainer>
      <TitleList>
        <MemoryPosts>기록</MemoryPosts>
        <PartyPosts onClick={handlePartyPosts}>동행</PartyPosts>
      </TitleList>
      <MainPostsList />
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
`;
const MemoryPosts = styled.div`
  margin-right: 20px;
`;

const PartyPosts = styled.div``;

export default MainPage;
