import React, {useState} from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import MainPostsList from "../components/MainPostsList";
import styled from "styled-components";
import imageMap from "../img/map.jpg";
import usePoster from "../Hooks/usePoster";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {Img, TitleList, TopContainer} from "../styled-components/MainTopContainer"

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

const MemoryPosts = styled.h1`
  margin-right: 20px;
  cursor: pointer;
`

const PartyPosts = styled.h1`
color: #BDBDBD;
cursor: pointer;

`;

export default MainPage;
