import styled from "styled-components";
import useNewPoster from "../Hooks/useNewPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPosttitle } from "../modules/newPostModule";
import { newPostbody } from "../modules/newPostModule";
import { newPostHash } from "../modules/newPostModule";
import imgaeIcon from "../icon/image.png";
import A from "../icon/Toolbar/A.png";
import B from "../icon/Toolbar/B.png";
import C from "../icon/Toolbar/C.png";
import D from "../icon/Toolbar/D.png";
import E from "../icon/Toolbar/E.png";
import textSize from "../icon/Toolbar/textSize.png";
import textType from "../icon/Toolbar/textType.png";

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
            <Icon src={A} />
            <IconText>새글</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={B} />
            <IconText>좋아요</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={C} />
            <IconText>업로드</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={D} />
            <IconText>GPS</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={E} />
            <IconText>날씨</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={textSize} />
            <IconText>글씨크기</IconText>
          </AlinIcon>
          <AlinIcon>
            <Icon src={textType} />
            <IconText>텍스트 타입</IconText>
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
        <BodyContainer name="newPostBody" placeholder="기억에 남을만한 일들을 기록해보세요" onChange={handleInputValue}></BodyContainer>
        <NewPostButton onClick={handleButton_Exit}> 나가기 </NewPostButton>

        <NewPostButton onClick={handleButton}> 업로드 </NewPostButton>
      </PageContainer>
    </Container>
  );
}

const TestName = styled.div`
  text-align: center;
  margin: 0.2em;
`;

const Toolbar = styled.div`
  width: 100vw;
  background-color: white;
  padding: 8px;
  border-top: 6px double #bdbdbd;
  border-bottom: 6px double #bdbdbd;
`;
const AlinIcon = styled.div``;
const IconContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 50%;
  margin: auto;
`;
const Icon = styled.img`
  margin: 20px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
  }
`;

const IconText = styled.div`
  font-size: 0.8rem;
  text-align: center;
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
const BodyContainer = styled.textarea`
  letter-spacing: 0.01em;
  line-height: 150%;
  font-size: 1.5rem;
  border-top: solid #bdbdbd;
  border: none;
  width: 95%;
  padding: 1rem;
  height: 70%;
  outline: none;
  border-bottom: 2px solid #bdbdbd;
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

const NewPostButton = styled.button`
  float: right;
  color: #616161;
  background-color: white;
  border: none;
  font-size: 22px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 1.5em;
  }
`;
