// import { fakedata } from "./../fakedata";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const DISPLAYMYDATA = "post/DISPLAYMYDATA" as const;
const DISPLAYMYPOST = "post/DISPLAYMYPOST" as const;
const DISPLAYUSERINFO = "post/DISPLAYUSERINFO" as const;
const CHANGEUSERNAME = "post/CHANGEUSERNAME" as const;

//액션 생성 함수 선언
export const displayMyData = (el: object[]) => ({
  type: DISPLAYMYDATA,
  payload: { el },
});

export const displayMyPost = (el: object[]) => ({
  type: DISPLAYMYPOST,
  payload: { el },
});

export const displayUserInfo = (el: object) => ({
  type: DISPLAYUSERINFO,
  payload: el,
});

export const changeUsername = (el: string) => ({
  type: CHANGEUSERNAME,
  payload: el,
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type myPageAction = ReturnType<typeof displayMyData> | ReturnType<typeof displayMyPost> | ReturnType<typeof displayUserInfo> | ReturnType<typeof changeUsername>;

// state의 타입
type StateOption = {
  posts: null | object[];
  currentPost: null | object[];
  userInfo: null | object;
};

// posts: {
//   id: number;
//   title: string;
//   body: string;
//   nick_name: string;
//   tag_name: string;
// }[];

// state 초기값 선언
const initialState: StateOption = {
  posts: null,
  currentPost: null,
  userInfo: null,
};

// reducer 작성
function myPageReducer(state: StateOption = initialState, action: myPageAction): StateOption {
  switch (action.type) {
    case DISPLAYMYDATA:
      return { ...state, posts: action.payload.el };

    case DISPLAYMYPOST:
      console.log(action.payload.el);
      return { ...state, currentPost: action.payload.el };

    case DISPLAYUSERINFO:
      return { ...state, userInfo: action.payload };

    case CHANGEUSERNAME:
      const newUserInfo = { ...state.userInfo, nick_name: action.payload };
      return { ...state, userInfo: newUserInfo };

    default:
      return state;
  }
}

export default myPageReducer;
