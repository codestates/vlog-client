import React from "react";
import PartyPostsList from "../components/PartyPostsList";
import styled from "styled-components";
import imageMap from "../img/map.jpg";
import usePoster from "../Hooks/usePoster";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PartyPostsPage() {
  const { state, filterParty }: any = usePoster();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMemoryPosts = () => {
    history.push("/");
  };

  const handlePartyPosts = () => {
    const filtered = state.data.filter((post: any) => {
      return post.title.search("동행") !== -1;
    });
    dispatch(filterParty(filtered));
    history.push("/party");
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

const MemoryPosts = styled.h1`
  color: #bdbdbd;
  margin-right: 20px;
  cursor: pointer;
`;

const PartyPosts = styled.h1`
  cursor: pointer;
`;
