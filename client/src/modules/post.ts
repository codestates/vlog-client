import { fakeData } from "../fakeData";
import axios from "axios";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const DISPLAYDATA = "post/DISPLAYDATA" as const;

//액션 생성 함수 선언
export const displayData = (el: any) => ({
  type: DISPLAYDATA,
  payload: {el}
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type PostAction = ReturnType<typeof displayData>;

// state의 타입
type StateOption = {
  data: any;
};

// state 초기값 선언
const initialState: StateOption = {
  data: null,
};

// reducer 작성
function postReducer(state: StateOption = initialState, action: PostAction): StateOption {
  switch (action.type) {
    case DISPLAYDATA:
        const newState = {...state}
        newState.data = [...action.payload.el]
      return newState;

    default:
      return state;
  }
}

export default postReducer;
