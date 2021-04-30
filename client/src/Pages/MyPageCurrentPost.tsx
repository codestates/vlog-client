import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components"

function MyPagePostPage() {
  const { state }: any = useMyPage();
  const post = state.currentPost[0];
  console.log(post.title);

  // useEffect(() => {});

  return (
    <Container>
      <Stage>
      {state.currentPost === null ? (
        <div>로딩 중입니다</div>
      ) : (
        <div>
          <div>{post.title}</div>
          <div>{post.nick_name}</div>
          <div>{post.body}</div>
          <div></div>
        </div>
      )}
      </Stage>
    </Container>
  );
}

export default MyPagePostPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Stage = styled.div`
  width: 500px;
  height: 500px;
`
