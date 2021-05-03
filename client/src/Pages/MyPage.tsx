import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";
import user from "../icon/user.png";
import edit2 from "../icon/edit2.png";

import { fakedata } from "./../fakedata";

function MyPage() {
  return (
    <Container>
      <InfoContainer>
        <UserImage src={user} />

        <UserName_edit placeholder={"에딧네임"}></UserName_edit>

        <InfoButton>완료ㅎㅎ</InfoButton>
      </InfoContainer>

      <MovePage>
        <MovePageList>글</MovePageList>
        <MovePageList>시리즈</MovePageList>
        <MovePageList>소개</MovePageList>
      </MovePage>

      {fakedata.map((post: any) => (
        <PostBoxContainer>
          <PostBox>
            <PostTitle>{post.title}</PostTitle>
            <PostName>{post.nick_name}</PostName>
            <PostBody>{post.body}</PostBody>
          </PostBox>

          <DeleteButton>Delete</DeleteButton>
        </PostBoxContainer>
      ))}
    </Container>
  );
}
export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  width: 70%;
  margin: auto;
  padding-top 6rem;
`;

const InfoContainer = styled.div`
  display: flex;
  border-bottom: 4px solid #bdbdbd;
  padding-bottom: 5em;
  margin-top: 2rem;
`;

const MovePage = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 4rem;
  margin-bottom: 4rem;
  justify-content: center;
`;

const MovePageList = styled.div`
  cursor: pointer;

  text-align: center;
  font-size: 2.5rem;
  margin: 20px;
  border-bottom: 4px solid #bdbdbd;
  width: 15%;
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
`;

const EditImage = styled.img`
  heigth: 20px;
`;
const UserName_edit = styled.input`
  font-size: 50px;
  margin-top: 3rem;
  height: 55px;
  border: none;
  width: 12rem;
`;

const InfoButton = styled.button`
border-radius: 12px;
  align-items: center;
  height: 40px;
  margin-top 3rem;
  cursor: pointer;

  border:none;
`;

const DeleteButton = styled.button`
  float: right;
  border-radius: 12px;
  align-items: center;
  height: 1.5rem;

  cursor: pointer;

  border: none;
`;
