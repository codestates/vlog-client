import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";
import pencil from "../icon/pencil.jpg";

function MyPage() {
  const { myPageState }: any = useMyPage();
  const [inputUser, setInputUser] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(myPageState);

  const handleCurrentPage = (postId: number) => {
    console.log("hi");
    console.log(myPageState);
    const filtered = myPageState.posts.filter((post: any) => post.id === postId);
    console.log(filtered);
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
      .patch("http://localhost:8080/userInfo", {
        nick_name: myPageState.userInfo.nick_name
      })
      .then((res) => {
        console.log("유저 정보 수정 완료" + res);
        setInputUser(false);
      })
      .catch(err => console.log('실패'))
  };

  return (
    <Container>
      <Stage>
        <InfoContainer>
          <PageTitle>Writer</PageTitle>
          <UserBox>
            {inputUser === false ? (
              <>
                <UserName value={myPageState.userInfo.nick_name} disabled></UserName>
                <EditBtn onClick={handleInput} src={pencil}></EditBtn>
              </>
            ) : (
              <>
                <UserName_edit onChange={handleInputChange} value={myPageState.userInfo.nick_name} autoFocus></UserName_edit>
                <EditBtn onClick={handleInput} src={pencil}></EditBtn>
                <SubmitBtn onClick={handleSubmit}>완료</SubmitBtn>
              </>
            )}
          </UserBox>
        </InfoContainer>
        <SmallTitleBox>
          <SmallTitle>기록들</SmallTitle>
        </SmallTitleBox>
        <ItemsContainer>
          {myPageState.posts === null ? (
            <div>로딩 중입니다</div>
          ) : (
            myPageState.posts.map((post: any) => (
              <ItemBox onClick={() => handleCurrentPage(post.id)}>
                <Item>
                  <PostTitle>{post.title}</PostTitle>
                </Item>
              </ItemBox>
            ))
          )}
        </ItemsContainer>
      </Stage>
    </Container>
  );
}
export default MyPage;

const Container = styled.div`
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vw;
  background: #eeeeee;
  overflow-x:hidden;


`;

const InfoContainer = styled.div`
  margin-left: 60px;
`;

const PageTitle = styled.h1`
  font-size: 40px;
`;

const SmallTitleBox = styled.div`
  display: flex;
  justify-content: center;
  height: 10px;
`;

const SmallTitle = styled.h1`
  margin-right: 15px;
`;

const Stage = styled.div`
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: reapeat(2, 100px 1fr);
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 180px);
  grid-gap: 50px;
  margin: 60px;
`;

const ItemBox = styled.div`
  background: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    transform: translateY(-7px);
  }
`;

const Item = styled.div`
  padding: 30px;
`;

const PostTitle = styled.h3`
  cursor: pointer;
`;

const PostBody = styled.div``;

const UserBox = styled.div`
display: flex;
`;

const UserName = styled.input`
  font-size: 30px;
  border: none;
  width: 90px;
`;

const UserName_edit = styled.input`
  font-size: 30px;
  display: inline-block;
  width: 90px;
  outline: none;
  border: none;
  background: #EEEEEE;
`;

const EditBtn = styled.img`
  margin-top: 10px;
  width: 25px;
  height: 15px;
`;

const SubmitBtn = styled.span`
border-radius: 5px;
margin: 10px;
margin-bottom: 3px;
cursor: pointer;
`

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import useMyPage from "../Hooks/useMyPage";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { displayMyPost } from "../modules/myPageModule";
// type PropsOption = {
//   myPosts: object[];
// };

// function MyPage() {
//   const { state }: any = useMyPage();
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const handleClick = (nickname: string) => {
//     const filtered = state.posts.filter((post: any) => post.nick_name === nickname);
//     dispatch(displayMyPost(filtered));
//     history.push("/MainCurrentPost");
//   };
//   console.log(state);

//   return (
//     <Container>
//       {state.posts.map((post: any) => (
//         <PostBox key={post.id} onClick={() => handleClick(post.nick_name)}>
//           <div>{post.title}</div>
//           <div>{post.nick_name}</div>
//           <div>{post.body}</div>
//         </PostBox>
//       ))}
//     </Container>
//   );
// }

// export default MyPage;

// const Container = styled.div`
//   border: 1px solid black;
// `;

// const PostBox = styled.div`
//   border: 1px solid black;
//   cursor: pointer;
// `;
// {state.posts.map((el) => (
//   <PostBox key={el.id} onClick={e => {handleClick(e)}}>
//     <div>{el.title}</div>
//     <div>{el.nick_name}</div>
//     <div>{el.tag_name}</div>
//     <div>{el.body}</div>
//   </PostBox>
// ))}

// 구현해야될 것들
// 1. 로그인한 유저의 데이터들을 담은 state 구현
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

// const [fileState, setFileState] = useState<any>({
//     file: '',
//     previewURL: '',
//   });

//   const handleFileChange = (e:any) => {
//     e.preventDefault();
//     let reader = new FileReader();
//     let file = e.target.files[0];
//     reader.onloadend = async () => {
//         await setFileState({file: file, previewURL : reader.result})
//     }
//     reader.readAsDataURL(file)
//     console.log(fileState)

{
  /* <input type="file" accept="image/*" name="profile_img" onChange={e => handleFileChange(e)} /> */
}
