const NEWPOSTTITLE = "newpost/NEWPOSTTITLE" as const;
const NEWPOSTBODY = "newpost/NEWPOSTBODY" as const;
const NEWPOSTHASH = "newpost/NEWPOSTHASH" as const;

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

type newPostAction = ReturnType<typeof newPosttitle> | ReturnType<typeof newPostbody> | ReturnType<typeof newPostHash>;

type newPostStateOption = {
  title: string;
  body: string;
  hashTag: string;
};

const initialState: newPostStateOption = {
  title: "",
  body: "",
  hashTag: " ",
};

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
