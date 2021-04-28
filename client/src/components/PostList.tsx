import React from "react";

type propsPostList = {
  el: any;
  key: string;
};

function PostList({ el, key }: propsPostList) {
  return (
    <div>
      <img key={el.id} src={el.snippet.thumbnails.default.url} />
    </div>
  );
}

export default PostList;
