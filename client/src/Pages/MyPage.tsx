import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";
import user from "../icon/user_Blue.jpg";
import A from "../icon/Toolbar/A.png";

import { fakedata } from "./../fakedata";

function MyPage() {
  function handlePage(e: any) {}

  return (
    <Container>
      <InfoContainer>
        <UserImage src={user} />

        <UserName_edit placeholder={"에딧네임"}></UserName_edit>

        <InfoButton src={A} />
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
    </Container>
  );
}
export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  width: 60%;
  margin: auto;
  padding-top 6rem;
`;

const InfoContainer = styled.div`
  display: flex;
  border-bottom: 4px solid #bdbdbd;
  padding-bottom: 5em;
  margin-top: 2rem;
`;

const PostBoxContainer = styled.div`
  border-bottom: 2px solid #bdbdbd;
  padding-bottom: 2rem;
  margin: 15px;
`;

const PostTitle = styled.div`
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

const PostName = styled.div`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

const PostBox = styled.div`
  width: 70%;
  margin: auto;
  cursor: pointer;
  padding: 1.5rem;
`;

const UserName = styled.input`
  font-size: 50px;
  margin-top: 3rem;
  height: 55px;
  border: none;
`;

const UserImage = styled.img`
  width: 150px;
  margin-right: 2rem;
  border-radius: 10px;
`;

const EditImage = styled.img`
  heigth: 20px;
`;
const UserName_edit = styled.input`
  font-size: 30px;
  margin-top: 3rem;
  height: 55px;
  border: none;
  width: 15rem;
`;

const InfoButton = styled.img`
  align-items: center;
  height: 40px;
  margin-top: 3rem;

  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: none;
`;

// const InfoButton = styled.button`
//   border-radius: 12px;
//   background-color: white;
//   color: #9e9e9e;

//   align-items: center;
//   height: 40px;
//   margin-top: 3rem;
//   margin-left: 3rem;
//   transition: 0.2s ease-in-out;

//   cursor: pointer;

//   border: none;

//   &:hover {
//     color: black;
//     font-weight: bold;
//     font-size: 1.2em;
//   }
// `;
