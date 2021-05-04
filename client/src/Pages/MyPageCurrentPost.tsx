import React, { useEffect, useState } from "react";
import useMyPage from "../Hooks/useMyPage";
import styled from "styled-components";
import axios, { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTitle, editBody, editId } from "../modules/EditPostModule";
import { displayMyData } from "../modules/myPageModule";
import { fakedata } from "./../fakedata";

axios.defaults.withCredentials = true;

function MyPageCurrentPostPage() {
  const { myPageState }: any = useMyPage();
  const history = useHistory();
<<<<<<< HEAD
  // const post = myPageState.currentPost[0];
  const dispatch = useDispatch();
  // console.log(post.title);
  // console.log(myPageState)
  // const { id, title, body } = post;

  // const axiosRequestConfig:AxiosRequestConfig = {
  //   headers: { postId: id}
  // }

  // const handleModifyPost = () => {
  //   dispatch(editId(id))
  //   dispatch(editTitle(title))
  //   dispatch(editBody(body))
  //   history.push('/EditPost')
  // }

  // const handleDeletePost = () => {
  //   console.log('글 삭제 요청 보낼거임')
  //   axios.delete('https://localhost:8080/posts', axiosRequestConfig)
  //   .then(res => {
  //     console.log('글 삭제 요청 성공!')
  //     console.log(res)
  //     dispatch(displayMyData(res.data));
  //   })

  // }

  //   return (
  //     <Container>
  //       <Stage>
  //       {myPageState.currentPost === null ? (
  //         <div>로딩 중입니다</div>
  //       ) : (
  //         <div>
  //           <div>{post.title}</div>
  //           <div>{post.nick_name}</div>
  //           <div>{post.body}</div>
  //           <button onClick={handleModifyPost}>수정</button>
  //           <button onClick={handleDeletePost}>삭제</button>
  //           <div></div>
  //         </div>
  //       )}
  //       </Stage>
  //     </Container>
  //   );
  // }
=======
  const post = myPageState.currentPost[0];
  const dispatch = useDispatch();
  const { id, title, body } = post;

  console.log(myPageState.currentPost.body);

  const axiosRequestConfig: AxiosRequestConfig = {
    headers: { postId: id },
  };

  const handleModifyPost = () => {
    dispatch(editId(id));
    dispatch(editTitle(title));
    dispatch(editBody(body));
    history.push("/EditPost");
  };

  const handleDeletePost = () => {
    console.log("글 삭제 요청 보낼거임");
    axios.delete("http://localhost:8080/posts", axiosRequestConfig).then((res) => {
      console.log("글 삭제 요청 성공!");
      console.log(res);
      dispatch(displayMyData(res.data.data));
      history.push("/page");
    });
  };

  console.log(post.body);
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f

  return (
    <Container>
      <PostBox>
<<<<<<< HEAD
        <PostTitle>🎆 프론트개발자 연봉 떡상하는 스킬 - GLSL</PostTitle>
        <div>
          <ButtonContainer>
            <EditButton>수정</EditButton>
            <EditButton>삭제</EditButton>
          </ButtonContainer>
        </div>
        <PostName>kimbyungchan</PostName>
        <PostBody>
          🎆 셰이더란 셰이더란 색상을 그리는 함수인데 이 함수가 픽셀마다 모두 동시에 호출 된다고 생각하시면 됩니다. 생각해보면 병렬 프로그래밍과도 닮아, 아니 병렬 프로그래밍 입니다. 셰이더에 대한
          자세한 내용은 여기를 참고하시면 됩니다. 🍴 개발환경 https://github.com/KimByungChan/shader-starter-kit 제가 미리 만들어둔 shader-starter-kit 을 clone하시고 시작하시면 됩니다~ yarn yarn dev
          위 내용을 입력하면 webpack-dev-server가 실행됩니다.
        </PostBody>
=======
        <PostTitle>{post.title}</PostTitle>
        <div>
          <ButtonContainer>
            <EditButton onClick={handleModifyPost}>수정</EditButton>
            <EditButton onClick={handleDeletePost}>삭제</EditButton>
          </ButtonContainer>
        </div>
        <PostName>{post.nick_name}</PostName>
        <PostBody>{post.body}</PostBody>
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
      </PostBox>
    </Container>
  );
}
export default MyPageCurrentPostPage;

const Container = styled.div`
width: 100vw;
height: 100vh;
width: 50%;
margin: auto;
padding-top 6rem;
`;

const PostTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3.5rem;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const PostName = styled.div`
  margin: 3rem 0;
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  margin: 0.5rem 0;
  letter-spacing: 0.01em;
  font-size: 1.4rem;
  line-height: 230%;
<<<<<<< HEAD
=======
  height: 100vh;
  // border: 1px solid black;
>>>>>>> 46c7b5515d14a36f65c869f8d376a688428af26f
`;

const PostBox = styled.div`
  padding: 1.5rem;
`;

const EditButton = styled.button`
  font-size: 1em;

  background-color: white;
  cursor: pointer;
  border: none;
  color: #9e9e9e;
  transition: 0.2s ease-in-out;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  float: right;
  margin-left: 12em;
`;
