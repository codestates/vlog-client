// import React from "react";
// import PostListContainer from "../Hooks/usePoster";
// import axios from "axios";
// import MainPostList from "../components/MainPostsList";
// import styled from "styled-components";
// import usePoster from "../Hooks/usePoster";
// import { useDispatch } from 'react-redux';

import React, { useEffect } from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import { displayData } from "../modules/mainPageModule";
import axios from "axios";
axios.defaults.withCredentials = true;

function PartyPostsList() {
  const { state }: any = usePoster();
  const dispatch = useDispatch()
  const history = useHistory();

  function handleClicked(el: any) {
    dispatch(openPostPage(el));
    history.push("/MainCurrentPost");
  }


  return (
    <Container>
      <ItemsContainer>
        {state.partyPosts === null ? (
          <div>로딩 중입니다</div>
        ) : (
            state.partyPosts.map((post: any) => (
            <ItemBox>
              <Item onClick={() => handleClicked(post)}>
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body.slice(0, 80)}</PostBody>
              </Item>
              <UserName>
                {}
                {/*   
                {
                  state.userInfo.filter((user: any) => {
                    return user.id === post.user_id;
                  })[0].nick_name
                } */}
              </UserName>
            </ItemBox>
          ))
        )}
      </ItemsContainer>
    </Container>
  );
}

export default PartyPostsList;


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
  // width: 500px;
  // height: 200px;
  padding: 10px;
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

const PostBody = styled.div`
  // width: 100%;
`;

