export const initialState = {
  token: null,
  playlists: [],
};

export const reducerCases = {
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return { ...state, token: action.payload };
    }
    case reducerCases.SET_PLAYLISTS: {
      return { ...state, playlists: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
