import axios from "axios";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const EDITTITLE = "editpost/EDITTITLE" as const;
const EDITBODY = "editpost/EDITBODY" as const;
const EDITHASH = "editpost/EDITHASH" as const;
const EDITID = "editpost/EDITID" as const;

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

export const editId = (editId: number) => ({
  type: EDITID,
  payload: {
    id: editId,
  },
});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type EditAction = ReturnType<typeof editTitle> | ReturnType<typeof editBody> | ReturnType<typeof editHash> | ReturnType<typeof editId>;

// state의 타입
type EditStateOption = {
  id: number;
  title: string;
  body: string;
  hashTag: string;
};

const initialState: EditStateOption = {
  id: 0,
  title: "",
  body: "",
  hashTag: "",
};

// reducer 작성
function editReducer(state: EditStateOption = initialState, action: EditAction): EditStateOption {
  switch (action.type) {
    case EDITTITLE:
      return { ...state, title: action.payload.title };
    case EDITBODY:
      console.log("바디 들어옴");
      return { ...state, body: action.payload.body };
    case EDITHASH:
      return { ...state, hashTag: action.payload.hashTag };
    case EDITID:
      console.log("여기 수정된 ID가 들어와야됨");
      console.log(action.payload);
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
}
export default editReducer;
