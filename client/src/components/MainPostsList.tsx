import React from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";

function PostList() {
  const { state } = usePoster();
  const history = useHistory();
  const dispatch = useDispatch();

<<<<<<< HEAD
  // function handleClick(e: React.MouseEvent<HTMLDivElement> | any) {
  //   const findData = state.data.filter((el: any) => {
  //     return el.etag === e.target.id;
  //   });

  //   dispatch(openPostPage(findData));

  //   history.push("/MainCurrentPost");
  // }

  console.log(state);
  // onClick={handleClick}
  // return <ListContainer>{state.data === null ? <div>로딩 중입니다</div> : state.data.map((el: any) => <div>{el} </div>)}</ListContainer>;
=======
  console.log(state);
  return (
    <ListContainer>
      {state.data === null ? (
        <div>로딩 중입니다</div>
      ) : (
        state.data.map((el: any) => (
          <Item>
            <PostTitle>
              {el.title}
              <UserName>{el.nick_name}</UserName>
            </PostTitle>

            <PostBody>{el.body}</PostBody>
          </Item>
        ))
      )}
    </ListContainer>
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
>>>>>>> c68b32d416867ec91889238ca4cccec0ab092c0c

  return <div>{state}</div>;
}
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
<<<<<<< HEAD
=======
  height: 10rem;
>>>>>>> c68b32d416867ec91889238ca4cccec0ab092c0c
  width: 15rem;
  background: white;
  border-radius: 4px;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    z-index: 1;
    background-color: white;
    transform: scale(1.5);
    background: #9e9e9e;
    border: 5px solid gold;
  }
`;

const PostTitle = styled.div`
  display: flex;
`;
const UserName = styled.div``;

const PostBody = styled.div``;

export default PostList;
