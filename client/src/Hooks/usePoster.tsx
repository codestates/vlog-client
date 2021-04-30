import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayData } from "../modules/postModule";
import { RootState } from "../modules";
import axios from "axios";

export default function usePoster() {
  const state = useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCk0LNtPlTSTmoV8-OwRpqY3z38q78v1aM"
      )
      .then((res) => {
        console.log("componentDidMount");
        dispatch(displayData(res.data.items));
      });
  }, []);

  return {
    state,
  };
}
