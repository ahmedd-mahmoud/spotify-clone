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
  playerStateValue: "playerStateValue",
  volumeValue: "volumeValue",
  changeTrack: "changeTrack",
};

export const SPOTIFY_URLs = {
  playerURL: "https://api.spotify.com/v1/me/player/",
  playURL: "https://api.spotify.com/v1/me/player/play",
  currentlyPlayingURL: "https://api.spotify.com/v1/me/player/currently-playing",
  playlistURL: "https://api.spotify.com/v1/playlists/",
  playlistsURL: "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
  featuredPlaylistsURL: "https://api.spotify.com/v1/browse/featured-playlists",
  artistsURL:
    "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
  albumsURL:
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
  podcastsURL:
    "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
  userURL: "https://api.spotify.com/v1/me",
  searchURL: "https://api.spotify.com/v1/search",
  volumeURL: "https://api.spotify.com/v1/me/player/volume?volume_percent=",
};
