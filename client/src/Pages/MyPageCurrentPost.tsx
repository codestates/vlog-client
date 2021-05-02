import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {editTitle, editBody} from '../modules/EditPostModule'

function MyPageCurrentPostPage() {
  const { myPageState }: any = useMyPage();
  const history = useHistory();
  const post = myPageState.currentPost[0];
  const dispatch = useDispatch()
  console.log(post.title);
  console.log(myPageState)
  
  const handleModifyPost = () => {
    dispatch(editTitle(post.title))
    dispatch(editBody(post.body))
    history.push('/EditPost')
  }


  return (
    <Container>
      <Stage>
      {myPageState.currentPost === null ? (
        <div>로딩 중입니다</div>
      ) : (
        <div>
          <div>{post.title}</div>
          <div>{post.nick_name}</div>
          <div>{post.body}</div>
          <button onClick={handleModifyPost}>수정</button>
          <div></div>
        </div>
      )}
      </Stage>
    </Container>
  );
}

export default MyPageCurrentPostPage;

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
