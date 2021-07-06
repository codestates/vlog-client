import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useMyPage() {
  const myPageState = useSelector((state: RootState) => state.myPageReducer);


  return {
    myPageState,
  };
}
