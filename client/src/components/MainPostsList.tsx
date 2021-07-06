import React, { useEffect } from "react";
import usePoster from "../Hooks/usePoster";
import { useDispatch } from "react-redux";
import { filterMomory, filterParty, openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import { displayData } from "../modules/mainPageModule";
import axios from "axios";
import {Container, Item, ItemBox, ItemsContainer, PostBody, PostTitle} from "../styled-components/PostsList"
axios.defaults.withCredentials = true;

function MainPostsList() {
  const { state }: any = usePoster();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClicked(el: any) {
    dispatch(openPostPage(el));
    history.push("/MainCurrentPost");
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        const memoryPosts = res.data.data.filter((post: any) => {
          return post.title.search("동행") === -1;
        });
        const partyPosts = res.data.data.filter((post: any) => {
          return post.title.search("동행") !== -1;
        });
        dispatch(filterMomory(memoryPosts))
        dispatch(filterParty(partyPosts))
        dispatch(displayData(res.data.data, res.data.usersInfo));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <ItemsContainer>
        {state.memoryPosts === null ? (
          <div>로딩 중입니다</div>
        ) : (
          state.memoryPosts.map((post: any) => (
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

export default MainPostsList;


