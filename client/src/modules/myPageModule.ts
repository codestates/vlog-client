import { fakedata } from "./../fakedata";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const DISPLAYMYDATA = "post/DISPLAYMYDATA" as const;
const DISPLAYMYPOST = "post/DISPLAYMYPOST" as const;

//액션 생성 함수 선언
export const displayMyData = (el: object[]) => ({
  type: DISPLAYMYDATA,
  payload: { el },
});

export const displayMyPost = (el: object[]) => ({
  type: DISPLAYMYPOST,
  payload: { el },
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type myPageAction = 
    |ReturnType<typeof displayMyData>
    |ReturnType<typeof displayMyPost>
// state의 타입

type StateOption = {
  posts: {
    id: number;
    title: string;
    body: string;
    nick_name: string;
    tag_name: string;
  }[];
  currentPost: null | object[];
};

// type StateOption = State[];

// state 초기값 선언
const initialState: StateOption = {
  posts: fakedata,
  currentPost: null,
};

// reducer 작성
function myPageReducer(state: StateOption = initialState, action: myPageAction): StateOption {
  switch (action.type) {
    case DISPLAYMYDATA:
      return state;

    case DISPLAYMYPOST:
      return {...state, currentPost: action.payload.el};

    default:
      return state;
  }
}

export default myPageReducer;
