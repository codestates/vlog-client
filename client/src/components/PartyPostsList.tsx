import React, { useEffect } from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import { displayData } from "../modules/mainPageModule";
import axios from "axios";
import {Container, Item, ItemBox, ItemsContainer, PostBody, PostTitle} from "../styled-components/PostsList"
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
            </ItemBox>
          ))
        )}
      </ItemsContainer>
    </Container>
  );
}

export default PartyPostsList;