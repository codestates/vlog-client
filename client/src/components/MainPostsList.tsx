import React, {useEffect} from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import {displayData} from "../modules/mainPageModule"
import axios from 'axios'
axios.defaults.withCredentials=true;

function PostList() {
  const { state } = usePoster();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClicked(el: any) {
    dispatch(openPostPage(el));
    history.push("/MainCurrentPost");
  }
  
  useEffect(() => {
    axios
    .get("https://localhost:8080/posts")
    .then((res) => {
      console.log(res)
      dispatch(displayData(res.data.data));
    });
  }, []);

  console.log(state)

  return (
    <Container>
      <ItemsContainer>
        {state.data === null ? (
          <div>로딩 중입니다</div>
        ) : (
          state.data.map((el: any) => (
            <Item onClick={() => handleClicked(el)}>
              <PostTitle>
                {el.title}
                <UserName>{el.nick_name}</UserName>
              </PostTitle>
              <PostBody>{el.body}</PostBody>
            </Item>
          ))
        )}
      </ItemsContainer>
    </Container>
  );

  // function handleClick(e: React.MouseEvent<HTMLDivElement> | any) {
  //   const findData = state.data.filter((el: any) => {
  //     return el.etag === e.target.id;
  //   });

  //   dispatch(openPostPage(findData));

  //   history.push("/MainCurrentPost");
  // }

  // console.log(state);
  // return (
  //   <ListContainer onClick={handleClick}>
  //     {state.data === null ? <div>로딩 중입니다</div> : state.data.map((el: any) => <Item src={el.snippet.thumbnails.default.url} id={el.etag} key={el.id} />)}
  //   </ListContainer>
  // );
}

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
`;

const ItemsContainer = styled.div`
  display: flex;
  max-width: 5 em;
`;

const Item = styled.button`
  height: 10rem;
  width: 15rem;
  background: white;
  border: none;
  border-radius: 4px;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    z-index: 1;
    background-color: white;
    transform: scale(1.2);
    border: 5px groove #eeeeee;
  }
`;

const PostTitle = styled.div`
  display: flex;
`;
const UserName = styled.div``;

const PostBody = styled.div``;

export default PostList;
