import styled from "styled-components";
import useNewPoster from "../Hooks/useNewPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPosttitle } from "../modules/newPostModule";
import { newPostbody } from "../modules/newPostModule";
import { newPostHash } from "../modules/newPostModule";
import imgaeIcon from "../icon/image.png";

import { useHistory } from "react-router-dom";
import axios from "axios";

export default function NewPost() {
  const history = useHistory();
  const { state } = useNewPoster();
  const dispatch = useDispatch();

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (e.target.name === "newPostTitle") {
      dispatch(newPosttitle(value));
    } else if (e.target.name === "hashTage") {
      dispatch(newPostHash(value));
    } else {
      dispatch(newPostbody(value));
    }
  }

  function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
    axios
      .post("https://localhost:8080/posts", { title: state.title, body: state.body })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  function handleButton_Exit(e: React.MouseEvent<HTMLButtonElement>) {
    history.push("/");
  }

  console.log(state);

  return (
    <Container>
      <Toolbar>
        <IconContainer>
          <AlinIcon>
            <Icon src={imgaeIcon} />
            <div>이미지</div>
          </AlinIcon>
        </IconContainer>
      </Toolbar>
      <PageContainer>
        <TitleContainer>
          <PostTitle name="newPostTitle" type="text" placeholder="제목을 입력하세요" onChange={handleInputValue} />
        </TitleContainer>
        <HashTagContainer>
          <HashTage name="hashTage" type="text" placeholder="해쉬테그를 입력하세요" onChange={handleInputValue} />
        </HashTagContainer>
        <BodyContainer>
          <PostBody name="newPostBody" placeholder="기억에 남을만한 일들을 기록해보세요" onChange={handleInputValue} />
        </BodyContainer>
        <NewPostButton onClick={handleButton}> 업로드 </NewPostButton>
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
const AlinIcon = styled.div`
  justify-content: center;
`;
const IconContainer = styled.div`
  display: flex;
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
  border-radius: 5px;
  padding-top: 2rem;
  background-color: white;
  max-width: 800px;
  margin: auto;
  height: 90%;
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

const PostTitle = styled.input`
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 1rem;
  border: none;
  outline: none;
`;

const HashTage = styled.input`
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
  border: 2px solid #bdbdbd;
  border-radius: 6px;
  color: black;
  background-color: #f5f5f5;
  font-size: 17px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &: hover {
    background: #9e9e9e;
    border: 1px solid #9e9e9e;
  }
`;
