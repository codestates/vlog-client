import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components";
import axios, { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTitle, editBody, editId } from "../modules/EditPostModule";
import { displayMyData } from "../modules/myPageModule";
import { fakedata } from "./../fakedata";

axios.defaults.withCredentials = true;

function MyPageCurrentPostPage() {
  const { myPageState }: any = useMyPage();
  const history = useHistory();
  const post = myPageState.currentPost[0];
  const dispatch = useDispatch();
  const { id, title, body } = post;

  console.log(myPageState.currentPost.body);

  const axiosRequestConfig: AxiosRequestConfig = {
    headers: { postId: id },
  };

  const handleModifyPost = () => {
    dispatch(editId(id));
    dispatch(editTitle(title));
    dispatch(editBody(body));
    history.push("/EditPost");
  };

  const handleDeletePost = () => {
    console.log("글 삭제 요청 보낼거임");
    axios.delete("http://localhost:8080/posts", axiosRequestConfig).then((res) => {
      console.log("글 삭제 요청 성공!");
      console.log(res);
      dispatch(displayMyData(res.data.data));
      history.push("/page");
    });
  };

  console.log(post.body);

  return (
    <Container>
      <PostBox>
        <PostTitle>{post.title}</PostTitle>
        <div>
          <ButtonContainer>
            <EditButton onClick={handleModifyPost}>수정</EditButton>
            <EditButton onClick={handleDeletePost}>삭제</EditButton>
          </ButtonContainer>
        </div>
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
width: 50%;
margin: auto;
padding-top 6rem;
`;

const PostTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3.5rem;
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
  font-size: 1.4rem;
  line-height: 230%;
  height: 100vh;
  // border: 1px solid black;
`;

const PostBox = styled.div`
  padding: 1.5rem;
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

const ButtonContainer = styled.div`
  float: right;
  margin-left: 12em;
`;
