import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";

export default function useNewPoster() {
  const state = useSelector((state: RootState) => state.newPostReducer);
  const dispatch = useDispatch();

  console.log(state);
  return state;
}