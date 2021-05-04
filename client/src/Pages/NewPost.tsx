import styled from "styled-components";
import useNewPoster from "../Hooks/useNewPoster";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newPosttitle } from "../modules/newPostModule";
import { newPostbody } from "../modules/newPostModule";
import { newPostHash } from "../modules/newPostModule";
<<<<<<< HEAD
import imgaeIcon from "../icon/image.png";
import A from "../icon/Toolbar/A.png";
import B from "../icon/Toolbar/B.png";
import C from "../icon/Toolbar/C.png";
import D from "../icon/Toolbar/D.png";
import E from "../icon/Toolbar/E.png";
import textSize from "../icon/Toolbar/textSize.png";
import textType from "../icon/Toolbar/textType.png";

=======
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
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
    console.log("요청버튼 누름");
    if (state.title.trim() || state.body.trim()) {
      axios
        .post("http://localhost:8080/posts", { title: state.title, body: state.body })
        .then((res) => {
          dispatch(newPosttitle(""));
          dispatch(newPostbody(""));
          console.log(state.title, state.body);
          history.push("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("게시물들을 작성해주세요.");
    }
  }

  function handleExit(e: React.MouseEvent<HTMLButtonElement>) {
    history.push("/");
  }

  console.log(state);

  return (
    <Container>
<<<<<<< HEAD
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
=======
      {/* <PageNameBox>
        <PageName>게시물 작성</PageName>
      </PageNameBox> */}
      <PageContainer>
        <ContentBox>
          <TitleInput name="newPostTitle" placeholder="제목을 입력해주세요" onChange={handleInputValue}></TitleInput>

          <BodyArea name="newPostBody" placeholder="내용을 입력해주세요..." onChange={handleInputValue}></BodyArea>
        </ContentBox>
        <ButtonBox>
          <ExitBtn onClick={handleExit}> 나가기 </ExitBtn>
          <UploadBtn onClick={handleUpload}> 출간하기 </UploadBtn>
        </ButtonBox>
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
`;
const PostTitle = styled.h1``;

<<<<<<< HEAD
const IconText = styled.div`
  font-size: 0.8rem;
  text-align: center;
=======
const PostBody = styled.h3`
  letter-spacing: 0.02em;
  line-height: 190%;
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
`;
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
<<<<<<< HEAD
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
=======
const Line = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin: 30px 30px 0px 0px;
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
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
  width: 47vw;
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
<<<<<<< HEAD

const NewPostButton = styled.button`
  float: right;
  color: #616161;
  background-color: white;
  border: none;
  font-size: 22px;
  transition: 0.2s ease-in-out;
=======

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
  background: white;
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
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
<<<<<<< HEAD
    color: black;
    font-weight: bold;
    font-size: 1.5em;
=======
    background: #7986cb;
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
  }
`;

{
  /* <HashTagContainer>
            <HashTage name="hashTage" type="text" placeholder="해쉬태그" onChange={handleInputValue} />
          </HashTagContainer> */
}
