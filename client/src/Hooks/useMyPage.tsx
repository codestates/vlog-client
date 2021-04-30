import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from 'react'
import {displayMyPost} from '../modules/myPageModule'

export default function useMyPage() {
  const state = useSelector((state: RootState) => state.myPageReducer);
  const dispatch = useDispatch()

//   console.log(displayMyPost)
//   const onclick = useCallback(() => dispatch(displayMyPost()), [dispatch])
//   const onClick = useCallback(() => dispatch(displayMyPost()), [dispatch]);



  return {
      state,
    }
}