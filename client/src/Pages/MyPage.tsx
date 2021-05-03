import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";
import user from "../icon/user_Blue.jpg";
import A from "../icon/Toolbar/A.png";
import worldmap from "../icon/worldmap.png"

import { fakedata } from "./../fakedata";

function MyPage() {
  function handlePage(e: any) {}

  return (
    <Container>
      <LeftContainer>
        <ImgBox>
        <Img src={worldmap}></Img>
        </ImgBox>
      </LeftContainer>
      <RightContainer>
      <InfoContainer>
        <UserName>여행자 문성석</UserName>
      </InfoContainer>

      {fakedata.map((post: any) => (
        <PostBoxContainer>
          <PostBox>
            <PostTitle>{post.title}</PostTitle>
            <PostName>{post.nick_name}</PostName>
            <PostBody>{post.body}</PostBody>
          </PostBox>
        </PostBoxContainer>
      ))}
      </RightContainer>
    </Container>
  );
}
export default MyPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`;

const LeftContainer = styled.div`
border: 1px solid #EEEEEE
`

const ImgBox = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  margin: 200px 0px 0px 20px;
`

const Img = styled.img`
  width: 40rem;
  height: 20rem;
`

const RightContainer = styled.div`
  padding: 50px;
  background: #FAFAFA
`

const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 5em;
  margin-top: 2rem;
`;

const PostBoxContainer = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 15px;
`;

const PostTitle = styled.div`
  font-size: 2rem;
`;

const PostName = styled.div`
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  font-size: 1.2rem;
`;

const PostBox = styled.div`
  cursor: pointer;
`;

const UserName = styled.h1`

`

