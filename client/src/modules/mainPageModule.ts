const DISPLAYDATA = "post/DISPLAYDATA" as const;
const OPENPOSTPAGE = "post/OPENPOSTPAGE" as const;
const FILTERMEMORY = "post/FILTERMEMORY" as const;
const FILTERPARTY = "post/FILTERPARTY" as const;

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

type PostAction = ReturnType<typeof displayData> | ReturnType<typeof openPostPage> | ReturnType<typeof filterMomory> | ReturnType<typeof filterParty>;

type StateOption = {
  data: null | object[];
  currentPost: object;
  memoryPosts: null | object[];
  partyPosts: null | object[];
  usersInfo: null | object[];
};

const initialState: StateOption = {
  data: null,
  memoryPosts: null,
  partyPosts: null,
  currentPost: {},
  usersInfo: null,
};

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
        ...state,
        memoryPosts: action.payload,
      };

    case FILTERPARTY:
      return {
        ...state,
        partyPosts: action.payload,
      };

    default:
      return state;
  }
}

export default mainPageReducer;
