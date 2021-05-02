import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();

  return (
    <div>
      <div>
        <div>{state.currentPost.title}</div>
        <div>{state.currentPost.nick_name}</div>
        <div>{state.currentPost.body}</div>
      </div>
    </div>
  );
}
export default OpenContentPage;
