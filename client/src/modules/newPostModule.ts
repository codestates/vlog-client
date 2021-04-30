import axios from "axios";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const NEWPOSTTITLE = "newpost/NEWPOSTTITLE" as const;
const NEWPOSTBODY = "newpost/NEWPOSTBODY" as const;
const NEWPOSTHASH = "newpost/NEWPOSTHASH" as const;

//액션 생성 함수 선언
export const newPosttitle = (newTitle: string) => ({
  type: NEWPOSTTITLE,
  payload: {
    title: newTitle,
  },
});

export const newPostbody = (newBody: string) => ({
  type: NEWPOSTBODY,
  payload: {
    body: newBody,
  },
});

export const newPostHash = (newHash: string) => ({
  type: NEWPOSTHASH,
  payload: {
    hashTag: newHash,
  },
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type newPostAction = ReturnType<typeof newPosttitle> | ReturnType<typeof newPostbody> | ReturnType<typeof newPostHash>;

// state의 타입
type newPostStateOption = {
  title: string;
  body: string;
  hashTag: string;
};

// state 초기값 선언
const initialState: newPostStateOption = {
  title: "",
  body: "",
  hashTag: " ",
};

// reducer 작성
function newPostReducer(state: newPostStateOption = initialState, action: newPostAction): newPostStateOption {
  switch (action.type) {
    case NEWPOSTTITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case NEWPOSTBODY:
      return {
        ...state,
        body: action.payload.body,
      };
    case NEWPOSTHASH:
      return {
        ...state,
        hashTag: action.payload.hashTag,
      };

    default:
      return state;
  }
}

export default newPostReducer;
