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
  const { myPageState }: any = useMyPage();
  const [inputUser, setInputUser] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCurrentPage = (postId: number) => {
    console.log('hi')
    console.log(myPageState)
    const filtered = myPageState.posts.filter((post: any) => post.id === postId);
    console.log(filtered)
    dispatch(displayMyPost(filtered));
    history.push("/MypageCurrentPost");
  };

  const handleInput = () => {
    if (inputUser) {
      setInputUser(false);
    } else {
      setInputUser(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    dispatch(changeUsername(e.target.value));
  };

  const handleSubmit = () => {
    console.log("요청 보낼거");
    
    axios
      .patch("https://localhost:8080/userInfo", {
        nick_name: myPageState.userInfo.nick_name,
      })
      .then((res) => {
        console.log("유저 정보 수정 완료" + res);
        setInputUser(false);
      });
  };

  const handlePostDelete = (e: any) => {
    // 게시물 삭제하는 axios 요청 보낸다. -> 받아와야되는 데이터는 해당
    
    console.log(e.target.id);
  };

  useEffect(() => {
    console.log("이제 곧 상태 업데이트 됨!!");
  });
  

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

