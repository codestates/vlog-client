//액션 type 선언 (리덕스 액션 안에 들어가게 될 type 선언)
const DISPLAYDATA = "post/DISPLAYDATA" as const;
const OPENPOSTPAGE = "post/OPENPOSTPAGE" as const;
const FILTERMEMORY = "post/FILTERMEMORY" as const;
const FILTERPARTY = "post/FILTERPARTY" as const;

//액션 생성 함수 선언
export const displayData = (posts: any, users: any) => ({
  type: DISPLAYDATA,
  payload: { posts, users },
});

export const openPostPage = (current: object) => ({
  type: OPENPOSTPAGE,
  payload: current,
});
export const filterMomory = (newState: object[]) => ({
  type: FILTERMEMORY,
  payload: newState,
});
export const filterParty = (newState: object[]) => ({
  type: FILTERPARTY,
  payload: newState,
});

// filterParty, filterMomory, openPostPage, displayData

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 액션 객체들에 대한 type 준비하기(typescript의 type)
type PostAction = ReturnType<typeof displayData> 
| ReturnType<typeof openPostPage>
| ReturnType<typeof filterMomory>
| ReturnType<typeof filterParty>

// state의 타입
type StateOption = {
  data: null | object[];
  currentPost: object;
  memoryPosts: null | object[];
  partyPosts: null | object[];
  usersInfo: null | object[];
};

// state 초기값 선언
const initialState: StateOption = {
  data: null,
  memoryPosts: null,
  partyPosts: null,
  currentPost: {},
  usersInfo: null,
};

// reducer 작성
function mainPageReducer(state: StateOption = initialState, action: PostAction): StateOption {
  switch (action.type) {
    case DISPLAYDATA:
      return {
        ...state,
        data: action.payload.posts,
        usersInfo: action.payload.users,
      };
    case OPENPOSTPAGE:
      return {
        ...state,
        currentPost: action.payload,
      };
      
      case FILTERMEMORY:
        return {
          ...state, memoryPosts: action.payload
        };

        case FILTERPARTY:
          return {
            ...state, partyPosts: action.payload
          };
      

    default:
      return state;
  }
}

export default mainPageReducer;
