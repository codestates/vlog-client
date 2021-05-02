import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components"
import axios, { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {editTitle, editBody, editId} from '../modules/EditPostModule'
import {displayMyData} from '../modules/myPageModule'
axios.defaults.withCredentials = true;



function MyPageCurrentPostPage() {
  const { myPageState }:any = useMyPage();
  const history = useHistory();
  const post = myPageState.currentPost[0];
  const dispatch = useDispatch()
  // console.log(post.title);
  // console.log(myPageState)
  const { id, title, body } = post

  const axiosRequestConfig:AxiosRequestConfig = {
    headers: { postId: id}
  }
  
  const handleModifyPost = () => {
    dispatch(editId(id))
    dispatch(editTitle(title))
    dispatch(editBody(body))
    history.push('/EditPost')
  }



  const handleDeletePost = () => {
    console.log('글 삭제 요청 보낼거임')
    axios.delete('https://localhost:8080/posts', axiosRequestConfig)
    .then(res => {
      console.log('글 삭제 요청 성공!')
      console.log(res)
      dispatch(displayMyData(res.data));
    })

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
          <button onClick={handleDeletePost}>삭제</button>
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
