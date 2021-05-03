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
    axios.get("https://localhost:8080/posts").then((res) => {
      console.log(res);
      dispatch(displayData(res.data.data));
    });
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
  height: 100vh;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  padding: 40px;

`;

const ItemBox = styled.div`
background: #FAFAFA;
width: 200px;
margin: 50px;
border: 1px solid black;
transition: 0.3s ease-in-out;
cursor: pointer;

&:hover {
  transform: translateY(-7px)
}
`;

const Item = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;

`;

const PostTitle = styled.div`
  display: flex;
`;
const UserName = styled.div`
  border-top: 1px solid black;
  padding: 10px;
`;

const PostBody = styled.div``;

export default PostList;
