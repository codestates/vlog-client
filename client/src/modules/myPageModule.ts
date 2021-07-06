const DISPLAYMYDATA = "post/DISPLAYMYDATA" as const;
const DISPLAYMYPOST = "post/DISPLAYMYPOST" as const;
const DISPLAYUSERINFO = "post/DISPLAYUSERINFO" as const;
const CHANGEUSERNAME = "post/CHANGEUSERNAME" as const;

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

type myPageAction = ReturnType<typeof displayMyData> | ReturnType<typeof displayMyPost> | ReturnType<typeof displayUserInfo> | ReturnType<typeof changeUsername>;

type StateOption = {
  posts: null | object[];
  currentPost: null | object[];
  userInfo: null | object;
};

const initialState: StateOption = {
  posts: null,
  currentPost: null,
  userInfo: null,
};

function myPageReducer(state: StateOption = initialState, action: myPageAction): StateOption {
  switch (action.type) {
    case DISPLAYMYDATA:
      return { ...state, posts: action.payload.el };

    case DISPLAYMYPOST:
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
