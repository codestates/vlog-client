import React from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import PostList from "../components/MainPostsList";
import styled from "styled-components";

function MainPage() {
  console.log("mainpage");
  return (
    <TopContainer>
      <PostList />
    </TopContainer>
  );
}

const TopContainer = styled.div`
  margin-top: 6rem;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
`;

export default MainPage;
