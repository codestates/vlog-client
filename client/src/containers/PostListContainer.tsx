import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { displayData } from "../modules/post";
import { RootState } from "../modules";
import axios from "axios";
import styled from "styled-components";


export default function PostListContainer() {
  const state = useSelector((state: RootState) => state.postReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCk0LNtPlTSTmoV8-OwRpqY3z38q78v1aM")
      .then((res) => {
        dispatch(displayData(res.data.items))});
  },[]);


  return (
      <Container>
          {state === null ? <div>로딩 중입니다</div> : state.map((el: any) => {
              return <PostList el={el} key={el.etag} />
          })}
      </Container>
  );
}

// {state.map((element: any) => {
//     return <PostList element={element} key={element.etag} />;
//   })}



const Container = styled.div`
  display:flex;
  background: gray;
  width: 100vw
  height: 100vh;

`;