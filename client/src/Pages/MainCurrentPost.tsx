import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();
  console.log(state);
  return <div>{state.currentPost[0] === [] ? <div>로딩 중입니다</div> : <img src={state.currentPost[0].snippet.thumbnails.default.url} />}</div>;
}
export default OpenContentPage;
