import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();
  console.log(state.currentPost[0]);
  return (
    <div>
      <img src={state.currentPost[0].snippet.thumbnails.default.url} />
    </div>
  );
}
export default OpenContentPage;
