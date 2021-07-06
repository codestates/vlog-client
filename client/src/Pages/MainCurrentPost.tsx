import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();

  const filtered = state.usersInfo.filter((user: any) => {
    return user.id === state.currentPost.user_id;
  });

  const postname = filtered[0].nick_name;
  const postTime = state.currentPost.createdAt.slice(0, 10);

  return (
    <Container>
      <PostBox>
        <PostTitle>{state.currentPost.title}</PostTitle>
        <PostInfoBox>
          <PostTime>{postTime}</PostTime>
          <PostName>{postname}</PostName>
        </PostInfoBox>
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

const PostInfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const PostName = styled.h3`
  margin-right: 20px;
`;

const PostTime = styled.h3`
  margin-right: 20px;
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
