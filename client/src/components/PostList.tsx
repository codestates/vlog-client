import React from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openPostPage } from "../modules/postModule";
import { useHistory } from "react-router-dom";

function PostList() {
  const { state } = usePoster();
  const history = useHistory();

  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLDivElement> | any) {
    const findData = state.data.filter((el: object | any) => {
      return el.etag === e.target.id;
    });

    dispatch(openPostPage(findData));

    history.push("/OpenContentPage");
  }

  console.log(state);
  return (
    <ListContainer onClick={handleClick}>
      {state.data === null ? (
        <div>로딩 중입니다</div>
      ) : (
        state.data.map((el: any) => (
          <Item
            src={el.snippet.thumbnails.default.url}
            id={el.etag}
            key={el.id}
          />
        ))
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.img`
  width: 15rem;
  background: white;
  border-radius: 4px;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &: hover {
    z-index: 1;
    backbround-color: white;
    transform: scale(1.5);
    background: #9e9e9e;
    border: 5px solid gold;
  }
`;

export default PostList;
