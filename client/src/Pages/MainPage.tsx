import React from "react";
import PostListContainer from "../Hooks/usePoster";
import axios from "axios";
import PostList from "../components/PostList";
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
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export default MainPage;
