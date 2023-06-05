export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
};

export const reducerCases = {
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return { ...state, token: action.payload };
    }
    case reducerCases.SET_PLAYLISTS: {
      return { ...state, playlists: action.payload };
    }
    case reducerCases.SET_USER: {
      return { ...state, userInfo: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
