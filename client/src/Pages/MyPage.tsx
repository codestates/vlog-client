import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMyPage from "../Hooks/useMyPage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMyPost, changeUsername } from "../modules/myPageModule";
import axios from "axios";
<<<<<<< HEAD
import user from "../icon/user.png";
import edit2 from "../icon/edit2.png";
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

      <MovePage>
        <MovePageList onClick={handlePage}>기록</MovePageList>
        <MovePageList onClick={handlePage}>동행</MovePageList>
      </MovePage>

      {fakedata.map((post: any) => (
        <PostBoxContainer>
          <PostBox>
            <PostTitle>{post.title}</PostTitle>
            <PostName>{post.nick_name}</PostName>
            <PostBody>{post.body}</PostBody>
          </PostBox>
        </PostBoxContainer>
      ))}
=======
import user from "../icon/user_Blue.jpg";
import A from "../icon/Toolbar/A.png";
import worldmap from "../icon/worldmap.png";

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
        nick_name: myPageState.userInfo.nick_name,
      })
      .then((res) => {
        console.log("유저 정보 수정 완료" + res);
        setInputUser(false);
      });
  };

  const handlePostDelete = (e: any) => {
    // 게시물 삭제하는 axios 요청 보낸다. -> 받아와야되는 데이터는 해당

    axios.delete("http://localhost:8080/posts").then((res) => {
      console.log("게시물삭제 성공" + res);
    });
  };

  useEffect(() => {
    console.log("이제 곧 상태 업데이트 됨!!");
  });

  return (
    <Container>
      <TopContainer>
        <ImgBox>
          <Img src={worldmap}></Img>
        </ImgBox>
      </TopContainer>
      <BottomContainer>
        <InfoContainer>
          <UserName>{myPageState.userInfo.nick_name}</UserName>
        </InfoContainer>

        {myPageState.posts.map((post: any) => (
          <PostBoxContainer onClick={() => handleCurrentPage(post.id)}>
            <PostBox>
              <PostTitle>{post.title}</PostTitle>
              <PostName>{post.nick_name}</PostName>
              <PostBody>{post.body.slice(0, 80)}</PostBody>
            </PostBox>
          </PostBoxContainer>
        ))}
      </BottomContainer>
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
    </Container>
  );
}
export default MyPage;

const Container = styled.div`
<<<<<<< HEAD
  width: 100vw;
  height: 100vh;
  width: 60%;
  margin: auto;
  padding-top 6rem;
=======
  display: grid;
  grid-template-rows: repeat(2, 30vw 70vw);
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
`;

const TopContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

<<<<<<< HEAD
const MovePage = styled.div`
  display: flex;
  padding: 50px;
  margin-top: 4rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const MovePageList = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 2em;
  margin: 20px;
  background-color: white;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  width: 15%;
  transition: 0.2s ease-in-out;
  padding: 20px;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 2em;
  }
=======
const ImgBox = styled.div`
  margin: 200px 0px 0px 20px;
`;

const Img = styled.img`
  width: 40rem;
  height: 20rem;
`;

const BottomContainer = styled.div`
  padding: 50px;
  background: #fafafa;
`;

const InfoContainer = styled.div`
  display: flex;
  padding-bottom: 5em;
  margin-top: 2rem;
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
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

<<<<<<< HEAD
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
=======
const UserName = styled.h1``;

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
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
