import React from "react";

import styled from "styled-components";



const Items = styled.img`
  background: #fff;
  border: 2px solid yellow;
  border-radius: 2px;
  margin:20px;
`;



type propsPostList = {
  el: any;
  key: string;
};

function PostList({ el, key }: propsPostList) {
  return (
      <div>

            <Items key={el.id} src={el.snippet.thumbnails.default.url} />

      </div>
  );
}

export default PostList;
