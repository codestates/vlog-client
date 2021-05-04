import React, { useEffect } from "react";
import usePoster from "../Hooks/usePoster";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterMomory, filterParty, openPostPage } from "../modules/mainPageModule";
import { useHistory } from "react-router-dom";
import { displayData } from "../modules/mainPageModule";
import axios from "axios";
axios.defaults.withCredentials = true;

// 목표: 서버에서 응답으로 넘겨준 유저 정보에서 nick_name들을 게시물에 넣어줘야됨.

// 1. mainPage를 관리하는 state에 userInfo를 추가해서 응답받아온 user들의 정보를 다 저장한다. (id, nick_name, email, password ...)
// 2. 현재 게시물들을 뿌려줄 때 사용되는 코드
//    ->> map을 이용해서 전체 데이터들을 하나 하나 뿌려준다.
// 3. 위에서 하나하나 게시물들을 뿌려줄 때, nick_name을 추가해줘야 함. (posts 테이블에는 nick_name이 없고 user_id가 있다.)
// 4. 하나의 포스트에 들어있는 user_id와 userInfo.id를 비교하여 nick_name을 하나의 포스트에 추가해주면 됨.

function MainPostsList() {
  const { state }: any = usePoster();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClicked(el: any) {
    dispatch(openPostPage(el));
    history.push("/MainCurrentPost");
  }

  useEffect(() => {
    console.log("get 요청 보내짐");
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        const memoryPosts = res.data.data.filter((post: any) => {
          return post.title.search("동행") === -1;
        });
        const partyPosts = res.data.data.filter((post: any) => {
          return post.title.search("동행") !== -1;
        });
        dispatch(filterMomory(memoryPosts))
        dispatch(filterParty(partyPosts))
        dispatch(displayData(res.data.data, res.data.usersInfo));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(state);

  return (
    <Container>
      <ItemsContainer>
        {state.memoryPosts === null ? (
          <div>로딩 중입니다</div>
        ) : (
          state.memoryPosts.map((post: any) => (
            <ItemBox>
              <Item onClick={() => handleClicked(post)}>
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body.slice(0, 80)}</PostBody>
              </Item>
            </ItemBox>
          ))
        )}
      </ItemsContainer>
    </Container>
  );
}

export default MainPostsList;


const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vw;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 200px);
    padding: 55px;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 375px);
  }
`;

const ItemBox = styled.div`
  background: #fafafa;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    transform: translateY(-7px);
  }
`;

const Item = styled.div`
  // width: 500px;
  // height: 200px;
  padding: 10px;
`;

const PostTitle = styled.h3`
  display: flex;
  width: 300px;
`;
const UserName = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
  padding: 10px;
`;

const PostBody = styled.div`
  // width: 100%;
`;

