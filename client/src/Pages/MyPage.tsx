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
        <div>
          <EditImage src={edit2} alt="edit2" />
          <InfoButton>완료ㅎㅎ</InfoButton>
        </div>
      </InfoContainer>

      {fakedata.map((post: any) => (
        <PostBoxContainer>
          <PostBox>
            <div>{post.title}</div>
            <div>{post.nick_name}</div>
            <div>{post.body}</div>
          </PostBox>
          <div>
            <button>삭제</button>
          </div>
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
  margin-bottom: 5rem;
  margin-top: 2rem;
`;

const PostBoxContainer = styled.div`
  border: 3px solid red;
`;

const PostBox = styled.div`
  // border: 1px solid black;
  cursor: pointer;
  // width: 50%;
  // margin: auto;
`;

const UserName = styled.input`
  font-size: 50px;
  margin-top: 3rem;
  height: 55px;
  border: none;
`;

const UserImage = styled.img`
  width: 150px;
`;

const EditImage = styled.img`
  heigth: 20px;
`;
const UserName_edit = styled.input`
  font-size: 50px;
  margin-top: 3rem;
  height: 55px;
  border: none;
`;

const InfoButton = styled.button`
  align-items: center;
  height: 40px;
  margin-top 3rem;
  cursor: pointer;

  border:none;
`;

// 구현해야될 것들
// 1. 로그인한 유저의 데이터들을 담은 myPageState 구현
// --> 로그인 한 유저의 ID를 이용하여 서버에 해당하는 유저의 Posts 데이터들만 가져와서 state에 저장
// 2. 가져와야 할 데이터들 목록
// --> title, description, date
// 3. Mypage 컴포넌트 구성
// --> 상단에는 title, 하단부터는 postsList가 표현을 해야 된다.
// 4. 유저 이름 수정
// --> 유저 이름 옆에 연필 버튼을 클릭하면, 유저가 수정할 수 있는 Input 태그가 뜨고 완료 버튼을 클릭하면 서버에 수정 요청을 보낸다.
// 5. post 조회
// --> 하나의 post를 클릭하면, 해당 post 페이지로 이동을 하게 된다.
// --> 이동한 페이지에서는, 기본적으로 해당 post의 title과 description을 확인할 수 있다.
// --> advanced : 해당 post를 수정할 수 있는 수정 버튼이 있다.

// advanced
// 1. 해당하는 글에 있는 hashTags들을 확인할 수 있는 사이드바 구현
// --> hashTag를 클릭하면, 해당 hashTag를 가진 게시물들을 필터할 수 있다.
