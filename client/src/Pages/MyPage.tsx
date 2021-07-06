import React, { useState } from "react";
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

  const handleCurrentPage = (postId: number) => {
    const filtered = myPageState.posts.filter((post: any) => post.id === postId);
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
    dispatch(changeUsername(e.target.value));
  };

  const handleSubmit = () => {
    axios
      .patch("http://localhost:8080/userInfo", {
        nick_name: myPageState.userInfo.nick_name,
      })
      .then((res) => {
        setInputUser(false);
      })
      .catch((err) => console.log(err));
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
  overflow-x: hidden;
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
  background: #eeeeee;
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
`;
