import React, { useEffect } from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import { displayData } from "../modules/mainPageModule";
import axios from "axios";
axios.defaults.withCredentials = true;

function PostList() {
  const { state } = usePoster();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClicked(el: any) {
    dispatch(openPostPage(el));
    history.push("/MainCurrentPost");
  }

  useEffect(() => {
    console.log("get 요청 보내짐");
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        console.log(res);
        dispatch(displayData(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(state);

  return (
    <Container>
      <ItemsContainer>
        {state.data === null ? (
          <div>로딩 중입니다</div>
        ) : (
          state.data.map((el: any) => (
            <ItemBox>
              <Item onClick={() => handleClicked(el)}>
                <PostTitle>{el.title}</PostTitle>
                <PostBody>{el.body}</PostBody>
              </Item>
              <UserName>유저이름</UserName>
            </ItemBox>
          ))
        )}
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vw;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 200px);
    padding: 55px;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 375px);
  }
`;

const ItemBox = styled.div`
  background: #fafafa;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    transform: translateY(-7px);
  }
`;

const Item = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
`;

const PostTitle = styled.h3`
  display: flex;
  width: 300px;
`;
const UserName = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
  padding: 10px;
`;

const PostBody = styled.div``;

export default PostList;
