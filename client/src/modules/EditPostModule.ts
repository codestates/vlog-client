const EDITTITLE = "editpost/EDITTITLE" as const;
const EDITBODY = "editpost/EDITBODY" as const;
const EDITHASH = "editpost/EDITHASH" as const;
const EDITID = "editpost/EDITID" as const;

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

type EditAction = ReturnType<typeof editTitle> | ReturnType<typeof editBody> | ReturnType<typeof editHash> | ReturnType<typeof editId>;

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

function editReducer(state: EditStateOption = initialState, action: EditAction): EditStateOption {
  switch (action.type) {
    case EDITTITLE:
      return { ...state, title: action.payload.title };
    case EDITBODY:
      return { ...state, body: action.payload.body };
    case EDITHASH:
      return { ...state, hashTag: action.payload.hashTag };
    case EDITID:
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
}
export default editReducer;
