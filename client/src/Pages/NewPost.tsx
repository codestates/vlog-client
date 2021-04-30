import styled from "styled-components";
import useNewPoster from "../Hooks/useNewPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPosttitle } from "../modules/newPostModule";
import { newPostbody } from "../modules/newPostModule";
import { newPostHash } from "../modules/newPostModule";
import axios from "axios"
import { useHistory } from "react-router-dom";

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


  // //{
  //   title:
  //   body:
  // }

  function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
    // const { title, body } = state
    axios.post("http://localhost:8080/posts", {title: state.title, body:state.body}).then(res => console.log(res))
  
  }



  // 업로드 성공시 요청 보내기
  function handleButton_Exit(e: React.MouseEvent<HTMLButtonElement>) {
    
    
    
    
    
    history.push("/");
  }

  console.log(state);

  return (
    <Container>
      <TitleContainer>
        <PostTitle name="newPostTitle" type="text" placeholder="제목을 입력하세요" onChange={handleInputValue} />
        <HashTage name="hashTage" type="text" placeholder="해쉬테그를 입력하세요" onChange={handleInputValue} />
      </TitleContainer>
      <BodyContainer>
        <PostBody name="newPostBody" placeholder="기억에 남을만한 일들을 기록해보세요" onChange={handleInputValue} />
      </BodyContainer>
      <NewPostButton onClick={handleButton}> 업로드 </NewPostButton>
      <NewPostButton onClick={handleButton_Exit}> 나가기 </NewPostButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleContainer = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const BodyContainer = styled.div`
  padding: 3rem;
`;

const PostTitle = styled.input`
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 1rem;
  border: 4px inset;
  border-radius: 10px;
`;

const HashTage = styled.input`
  font-size: 1.125rem;
  line-height: 2rem;
  margin: 1rem;
  border: 4px inset;
  border-radius: 10px;
`;
const PostBody = styled.textarea`
  font-size: 1.5rem;
  margin: 0px;
  width: 603px;
  height: 608px;
  border: 4px inset;
  border-radius: 10px;
`;

const NewPostButton = styled.button`
  border: 1px solid #424242;
  border-radius: 20px;
  background: #424242;
  color: white;
  font-size: 17px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  // &: hover {
  //   background: #9e9e9e;
  //   border: 1px solid #9e9e9e;
  // }
`
