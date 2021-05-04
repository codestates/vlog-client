import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();

  console.log(state);

  // console.log(" current palge ld", state);
  const filtered = state.usersInfo.filter((user: any) => {
    return user.id === state.currentPost.user_id;
  });

  const nickname = filtered[0].nick_name;

  return (
    <Container>
      <PostBox>
        <PostTitle>{state.currentPost.title}</PostTitle>
        <PostName>
          {nickname} <span>{state.currentPost.createdAt}</span>
        </PostName>

        <PostBody>{state.currentPost.body}</PostBody>
      </PostBox>
    </Container>
  );
}
export default OpenContentPage;

const Container = styled.div`
width: 100vw;
height: 100vh;
width: 50%;
margin: auto;
padding-top 6rem;
`;

const PostTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3.5rem;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const PostName = styled.div`
  margin: 3rem 0;
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  margin: 0.5rem 0;
  letter-spacing: 0.01em;
  font-size: 1.4rem;
  line-height: 230%;
`;

const PostBox = styled.div`
  padding: 1.5rem;
`;

const EditButton = styled.button`
  font-size: 1em;

  background-color: white;
  cursor: pointer;
  border: none;
  color: #9e9e9e;
  transition: 0.2s ease-in-out;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  float: right;
  margin-left: 12em;
`;
