export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1DX0s5kDXi1oC5",
};

export const reducerCases = {
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_USER: "SET_USER",
  SET_PLAYLIST: "SET_PLAYLIST",
  SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
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
    case reducerCases.SET_PLAYLIST: {
      return { ...state, selectedPlaylist: action.payload };
    }
    case reducerCases.SET_PLAYLIST_ID: {
      return { ...state, selectedPlaylistId: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
