import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components";
import axios, { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTitle, editBody, editId } from "../modules/EditPostModule";
import { displayMyData } from "../modules/myPageModule";

axios.defaults.withCredentials = true;

function MyPageCurrentPostPage() {
  const { myPageState }: any = useMyPage();
  const history = useHistory();
  const post = myPageState.currentPost[0];
  const dispatch = useDispatch();
  const { id, title, body } = post;

  window.scrollTo(0, 0);

  const axiosRequestConfig: AxiosRequestConfig = {
    headers: { postId: id },
  };

  const handleModifyPost = () => {
    dispatch(editId(id));
    dispatch(editTitle(title));
    dispatch(editBody(body));
    history.push("/EditPostPage");
  };

  const handleDeletePost = () => {
    axios.delete("http://localhost:8080/posts", axiosRequestConfig).then((res) => {
      dispatch(displayMyData(res.data.data));
      history.push("/page");
    });
  };

  return (
    <Container>
      <PostBox>
        <PostTitle>{post.title}</PostTitle>
          <ButtonContainer>
            <EditButton onClick={handleModifyPost}>수정</EditButton>
            <EditButton onClick={handleDeletePost}>삭제</EditButton>
          </ButtonContainer>
        <PostName>{post.nick_name}</PostName>
        <PostBody>{post.body}</PostBody>
      </PostBox>
    </Container>
  );
}
export default MyPageCurrentPostPage;

const Container = styled.div`
width: 100vw;
height: 100vh;
width: 70%;
margin: auto;
padding-top 6rem;
`;

const PostBox = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const PostName = styled.div`
  margin: 3rem 0;
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  margin: 0.5rem 0;
  letter-spacing: 0.01em;
  font-size: 1.3rem;
  line-height: 220%;
  height: 100vh;
  // border: 1px solid black;
`;

const ButtonContainer = styled.div`
  float: right;
  margin-left: 12em;
  margin-top: 10px;
`;


const EditButton = styled.button`
  font-size: 1em;

  background-color: white;
  cursor: pointer;
  border: none;
  color: #9e9e9e;
  transition: 0.2s ease-in-out;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 1em;
  }
`;