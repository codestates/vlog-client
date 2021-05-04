import React from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import MainPostsList from "../components/MainPostsList";
import PartyPostsList from "../components/PartyPostsList"
import styled from "styled-components";
import imageMap from "../img/map.jpg";
import usePoster from "../Hooks/usePoster";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function PartyPostsPage() {
  const { state, filterMomory,filterParty,openPostPage,displayData }: any = usePoster();
  const dispatch = useDispatch()
  const history = useHistory()

  const handlebutton = () => {
    console.log("clicked");
  };

  const handleMemoryPosts = () => {
    history.push('/')
    // const filtered = state.data.filter((post: any) => {
    //   return post.title.search("동행") === -1;
    // });
    // console.log(filtered);
    // dispatch(filterMomory(filtered))
  };

  //   var str = "Visit W3Schools!";
  // var n = str.search("W3Schools");

  const handlePartyPosts = () => {
    // 파티가 클릭이 되면, partyPosts state가 null에서 object[]로 바뀌는 dispatch를 보내야됨
    // 그리고 페이지 이동
    const filtered = state.data.filter((post: any) => {
      return post.title.search("동행") !== -1;
    });
    console.log('party posts filter')
    console.log(filtered);

    dispatch(filterParty(filtered))
    history.push('/party')
  };

  return (
    <>
      <TopContainer>
        <Img src={imageMap} />
      </TopContainer>
      <TitleList>
        <MemoryPosts onClick={handleMemoryPosts}>기록</MemoryPosts>
        <PartyPosts onClick={handlePartyPosts}>동행</PartyPosts>
      </TitleList>
      <PartyPostsList />
    </>
  );
}

export default PartyPostsPage;


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

