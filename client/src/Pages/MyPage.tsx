import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";

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
  console.log(myPageState);
  return (
    <Container>
      {inputUser === false ? (
        <div>
          <UserName value={myPageState.userInfo.nick_name} disabled></UserName>
          <button onClick={handleInput}>수정</button>
        </div>
      ) : (
        <div>
          <UserName_edit onChange={handleInputChange} placeholder={myPageState.userInfo.nick_name} autoFocus></UserName_edit>
          <button onClick={handleSubmit}>완료</button>
        </div>
      )}

      {myPageState.posts === null ? (
        <div>로딩 중입니다.</div>
      ) : (
        myPageState.posts.map((post: any) => (
          <>
            <PostBox key={post.id} onClick={() => {handleCurrentPage(post.id)}}>
              <div>{post.title}</div>
              <div>{post.nick_name}</div>
              <div>{post.body}</div>
            </PostBox>
            <span>
              <button id={post.id} onClick={handlePostDelete}>삭제</button>
            </span>
          </>
        ))
      )}
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  border: 1px solid black;
`;

const PostBox = styled.div`
  border: 1px solid black;
  cursor: pointer;
`;

const UserName = styled.input`
  font-size: 20px;
  width: 100px;
  border: none;
`;

const UserName_edit = styled.input`
  font-size: 20px;
  width: 100px;
  border: none;
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
