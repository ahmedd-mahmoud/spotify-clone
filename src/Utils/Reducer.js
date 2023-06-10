import { reducerCases } from "./Constants";

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
  searchQuery: "",
  searchResults: null,
  currentlyPlayingTrack: null,
  playerState: false,
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
    case reducerCases.SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    case reducerCases.SET_SEARCH_RESULTS: {
      return { ...state, searchResults: action.payload };
    }
    case reducerCases.SET_TRACK_PLAYING: {
      return { ...state, currentlyPlayingTrack: action.payload };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return { ...state, playerState: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
