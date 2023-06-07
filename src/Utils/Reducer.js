export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylist: null,
  selectedPlaylistId: null,
  mainScreen: true,
  featuredPlaylists: [],
  albums: null,
  artists: null,
  podcasts: null,
};

export const reducerCases = {
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_USER: "SET_USER",
  SET_PLAYLIST: "SET_PLAYLIST",
  SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
  MAIN_SCREEN: "MAIN_SCREEN",
  SET_FEATURED_PLAYLISTS: "SET_FEATURED_PLAYLISTS",
  SET_ALBUMS: "SET_ALBUMS",
  SET_ARTISTS: "SET_ARTISTS",
  SET_PODCASTS: "SET_PODCASTS",
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
    case reducerCases.MAIN_SCREEN: {
      return { ...state, mainScreen: action.payload };
    }
    case reducerCases.SET_FEATURED_PLAYLISTS: {
      return { ...state, featuredPlaylists: action.payload };
    }
    case reducerCases.SET_ARTISTS: {
      return { ...state, artists: action.payload };
    }
    case reducerCases.SET_ALBUMS: {
      return { ...state, albums: action.payload };
    }
    case reducerCases.SET_PODCASTS: {
      return { ...state, podcasts: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
