import styled from "styled-components";
import useEditPoster from "../Hooks/useEditPoster";
import useMyPage from "../Hooks/useEditPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBody, editHash, editId, editTitle } from "../modules/EditPostModule";

import imgaeIcon from "../icon/image.png";

import { useHistory } from "react-router-dom";
import axios from "axios";

export default function EditPostPage() {
  const history = useHistory();
  const { editState } = useEditPoster();
  const dispatch = useDispatch();
  const { title, body, id } = editState;
  console.log(editState);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (e.target.name === "title") {
      dispatch(editTitle(value));
    } else if (e.target.name === "hashTage") {
      dispatch(editHash(value));
    } else if (e.target.name === "body") {
      dispatch(editBody(value));
    }
  }

  function handleUploadBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(editState);
    axios
      .patch("http://localhost:8080/posts", { title: title, body: body, postId: id })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  function handleButton_Exit(e: React.MouseEvent<HTMLButtonElement>) {
    history.push("/page");
  }

  console.log(editState);

  return (
    <Container>
      <PageContainer>
        <TitleContainer>
          <PostTitle name="title" onChange={handleInputValue}>
            {editState.title}
          </PostTitle>
        </TitleContainer>
        <BodyContainer>
          <PostBody name="body" onChange={handleInputValue} autoFocus>
            {editState.body}
          </PostBody>
        </BodyContainer>
        <BtnContainer>
        <NewPostButton onClick={handleUploadBtn}> 업로드 </NewPostButton>
        <NewPostButton onClick={handleButton_Exit}> 나가기 </NewPostButton>
        </BtnContainer>
      </PageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #f5f5f5;
`;

const PageContainer = styled.div`
  padding-top: 5rem;
  background-color: white;
  max-width: 800px;
  margin: auto;
`;
const TitleContainer = styled.div`
  padding: 1rem;
  outline: none;
`;

const BodyContainer = styled.div`
  border-top: 1px solid #9E9E9E;
  padding: 1rem;
`;

const PostTitle = styled.textarea`
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
`;

const PostBody = styled.textarea`
  font-size: 1.2rem;
  width: 100%;
  height: 100vw;
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
`;

const NewPostButton = styled.button`
  border: 1px solid #424242;
  border-radius: 20px;
  background: #424242;
  color: white;
  font-size: 17px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-right: 13px;

  &:hover {
    background: #9e9e9e;
    border: 1px solid #9e9e9e;
  }
`;

const BtnContainer = styled.div`
position: fixed;
top: 680px;
right: 320px;
display: flex;
justify-content: flex-end;
// border: 1px  black;
width: 55%;
`