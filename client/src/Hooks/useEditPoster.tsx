import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";


export default function useEditPoster() {
  const editState = useSelector((state: RootState) => state.editReducer);

  return {
    editState,
  };
}
