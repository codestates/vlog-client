import axios from "axios";

//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const NEWPOSTDATA = "newpost/NEWPOSTDATA" as const;

//액션 생성 함수 선언
export const newPostData = (newTitle: string, newBody:string, titleValue:string, bodyValue:string) => ({
  type: NEWPOSTDATA,
  payload: {
      title: newTitle,
      body: newBody,
      titleValue: titleValue,
      bodyValue:bodyValue
  }
});


//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type newPostAction = ReturnType<typeof newPostData>;

// state의 타입
type newPostStateOption = {
  title:string;
  body:string;
  titleValue:string;
  bodyValue:string;

};

// state 초기값 선언
const initialState: newPostStateOption = {
  title: '',
  body: '',
  titleValue:'',
  bodyValue:''
};

// reducer 작성
function newPostReducer(state: newPostStateOption = initialState, action: newPostAction): newPostStateOption {
  switch (action.type) {
    case NEWPOSTDATA:
      return {
          ...state,
          title: action.payload.title,
          body: action.payload.body,
          titleValue: action.payload.titleValue,
          bodyValue: action.payload.bodyValue
      }

    default:
      return state;
  }
}

export default newPostReducer;
