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
      .patch("https://localhost:8080/posts", { title: title, body: body, postId: id })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  function handleButton_Exit(e: React.MouseEvent<HTMLButtonElement>) {
    history.push("/");
  }

  console.log(editState);

  return (
    <Container>
      <Toolbar>
        <IconContainer>
          <Icon src={imgaeIcon} />
          이미지
        </IconContainer>
      </Toolbar>
      <PageContainer>
        <TitleContainer>
          <PostTitle name="title" onChange={handleInputValue}>
            {editState.title}
          </PostTitle>
        </TitleContainer>
        <HashTagContainer>
          <HashTage name="hashTage" placeholder={"해쉬태그 입력해주세요"} onChange={handleInputValue}></HashTage>
        </HashTagContainer>
        <BodyContainer>
          <PostBody name="body" onChange={handleInputValue}>
            {editState.body}
          </PostBody>
        </BodyContainer>
        <NewPostButton onClick={handleUploadBtn}> 업로드 </NewPostButton>
        <NewPostButton onClick={handleButton_Exit}> 나가기 </NewPostButton>
      </PageContainer>
    </Container>
  );
}

const Toolbar = styled.div`
  width: 100vw;
  background-color: white;
  border-top: solid #bdbdbd;
  border-bottom: solid #bdbdbd;
`;

const IconContainer = styled.div`
  display: inline-block;
`;
const Icon = styled.img`
  display: inline-block;

  margin: 20px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const IconText = styled.span`
  margin: 20px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

const HashTagContainer = styled.div`
  padding: 1rem;
`;
const BodyContainer = styled.div`
  border-top: solid #bdbdbd;
  padding: 1rem;
`;

const PostTitle = styled.textarea`
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 1rem;
  border: none;
  outline: none;
`;

const HashTage = styled.textarea`
  font-size: 1.125rem;
  line-height: 2rem;
  border: none;
  outline: none;
`;
const PostBody = styled.textarea`
  font-size: 1.5rem;
  width: 603px;
  height: 608px;
  border: none;
  outline: none;
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

  &:hover {
    background: #9e9e9e;
    border: 1px solid #9e9e9e;
  }
`;
