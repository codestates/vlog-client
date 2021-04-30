import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();
  console.log(state.current);
  return <div></div>;
}
export default OpenContentPage;
