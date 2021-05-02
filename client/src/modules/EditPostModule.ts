import axios from "axios";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const EDITTITLE = "newpost/EDITTITLE" as const;
const EDITBODY = "newpost/EDITBODY" as const;
const EDITHASH = "newpost/EDITHASH" as const;

//액션 생성 함수 선언
export const editTitle = (editTitle: string) => ({
  type: EDITTITLE,
  payload: {
    title: editTitle,
  },
});

export const editBody = (editBody: string) => ({
  type: EDITBODY,
  payload: {
    body: editBody,
  },
});

export const editHash = (editHash: string) => ({
  type: EDITHASH,
  payload: {
    hashTag: editHash,
  },
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type EditAction = ReturnType<typeof editTitle> | ReturnType<typeof editBody> | ReturnType<typeof editHash>;

// state의 타입
type EditStateOption = {
  title: string;
  body: string;
  hashTag: string;
};

// state 초기값 선언
const initialState: EditStateOption = {
  title: "",
  body: "",
  hashTag: "",
};

// reducer 작성
function editReducer(state: EditStateOption = initialState, action: EditAction): EditStateOption {
  switch (action.type) {
    case EDITTITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case EDITBODY:
      return {
        ...state,
        body: action.payload.body,
      };
    case EDITHASH:
      return {
        ...state,
        hashTag: action.payload.hashTag,
      };

    default:
      return state;
  }
}

export default editReducer;
