import styled from "styled-components";
import useNewPoster from "../Hooks/useNewPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPosttitle } from "../modules/newPostModule";
import { newPostbody } from "../modules/newPostModule";
import { newPostHash } from "../modules/newPostModule";
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

  function handleUpload(e: React.MouseEvent<HTMLButtonElement>) {
    axios
      .post("http://localhost:8080/posts", { title: state.title, body: state.body })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  function handleExit(e: React.MouseEvent<HTMLButtonElement>) {
    history.push("/");
  }

  console.log(state);

  return (
    <Container>
      {/* <PageNameBox>
        <PageName>게시물 작성</PageName>
      </PageNameBox> */}
      <PageContainer>
        <ContentBox>
          <TitleInput name="newPostTitle" placeholder="제목을 입력해주세요" onChange={handleInputValue}></TitleInput>
          <Line></Line>
          <BodyArea name="newPostBody" placeholder="내용을 입력해주세요..." onChange={handleInputValue}></BodyArea>
        </ContentBox>
        <ButtonBox>
          <ExitBtn onClick={handleExit}> 나가기 </ExitBtn>
          <UploadBtn onClick={handleUpload}> 출간하기 </UploadBtn>
        </ButtonBox>
      </PageContainer>
      <ResultContainer>
        <PostBox>
          <PostTitle>{state.title}</PostTitle>
          <PostBody>{state.body}</PostBody>
        </PostBox>
      </ResultContainer>
    </Container>
  );
}

// const PageNameBox = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 50%;
// `;
// const PageName = styled.h1`
//   margin-left: 20px;
// `;

const PostBox = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 40px;
`;
const PostTitle = styled.h1``;

const PostBody = styled.h3``;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PageContainer = styled.div`
  border-radius: 5px;
  margin-top: 50px;
`;

const ResultContainer = styled.div`
  background-color: #fafafa;
`;

const ContentBox = styled.div`
  margin: 50px;
`;
const Line = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin: 30px 30px 0px 0px;
`;
const TitleInput = styled.input`
  -webkit-box-shadow: 0 0 0 1000px white inset;
  width: 400px;
  height: 40px;
  font-size: 40px;
  border: none;
  outline: none;
`;
const BodyArea = styled.textarea`
  -webkit-box-shadow: 0 0 0 1000px white inset;
  width: 32em;
  height: 100vh;
  font-size: 18px;
  outline: none;
  border: none;
  margin-top: 20px;
  resize: none;
`;

const HashTage = styled.input`
  font-size: 1.125rem;
  line-height: 2rem;
  border: none;
  outline: none;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  width: 50%;
  height: 70px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const ExitBtn = styled.button`
  border: none;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;

const UploadBtn = styled.button`
  border: none;
  background: #3f51b5;
  color: white;
  border-radius: 10px;
  font-size: 17px;
  margin-top: -4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #7986cb;
  }
`;

{
  /* <HashTagContainer>
            <HashTage name="hashTage" type="text" placeholder="해쉬태그" onChange={handleInputValue} />
          </HashTagContainer> */
}
