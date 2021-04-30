import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import axios from "axios";

export default function useNewPoster() {
  const state = useSelector((state: RootState) => state.newPostReducer);







  return {
    state,
  };
}
