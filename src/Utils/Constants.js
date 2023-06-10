export const msToMinutes = (ms) => {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 1000).toFixed(0);
  return min + ":" + (sec < 10 ? "0" : "") + sec;
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
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
  SET_TRACK_PLAYING: "SET_TRACK_PLAYING",
  SET_PLAYER_STATE: "SET_PLAYER_STATE",
};

export const SPOTIFY_DATA = {
  playlistsData: "playlistsData",
  userData: "userData",
  selectedPlaylistData: "selectedPlaylistData",
  selectedPlaylistId: "selectedPlaylistId",
  featuredPlaylistsData: "featuredPlaylistsData",
  albumsData: "albumsData",
  artistsData: "artistsData",
  podcastsData: "podcastsData",
  searchQueryValue: "searchQueryValue",
  searchResults: "searchResults",
  currentlyPlayingTrack: "currentlyPlayingTrack",
};
