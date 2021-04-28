import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { displayData } from "../modules/post";
import { RootState } from "../modules";
import axios from "axios";

export default function PostListContainer() {
  const state = useSelector((state: RootState) => state.postReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCk0LNtPlTSTmoV8-OwRpqY3z38q78v1aM")
      .then((res) => {
        console.log('componentDidMount')  
        dispatch(displayData(res.data.items))});
  },[]);

  console.log(state)

  return (
      <div>
          {state === null ? <div>로딩 중입니다</div> : state.map((el: any) => {
              return <PostList el={el} key={el.etag} />
          })}
      </div>
  );
}

// {state.map((element: any) => {
//     return <PostList element={element} key={element.etag} />;
//   })}
