import { useCallback, useEffect, useState } from "react";
import { useStateProvider } from "../Utils/StateProvider";
import { reducerCases } from "../Utils/Constants";
import { SPOTIFY_DATA } from "../Utils/Constants";

const searchURL = "https://api.spotify.com/v1/search";

const useFetchSpotifyData = (url, spotifyData) => {
  const { token, updateData, selectedPlaylistId } = useStateProvider();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getPlaylistsData = useCallback(
    (data) => {
      const { items } = data;
      const playlists = items.map(({ name, id, images }) => {
        return { name, id, images };
      });
      updateData(playlists, reducerCases.SET_PLAYLISTS);
    },
    [updateData]
  );

  const getFeaturedPlaylists = useCallback(
    (data) => {
      const featuredPlaylists = data.playlists.items.map(
        ({ name, id, images, description }) => {
          return { name, id, images, description };
        }
      );
      updateData(featuredPlaylists, reducerCases.SET_FEATURED_PLAYLISTS);
    },
    [updateData]
  );

  const getUserData = useCallback(
    (data) => {
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        userImg: data.images[0].url,
      };
      updateData(userInfo, reducerCases.SET_USER);
    },
    [updateData]
  );

  const getSelectedPlaylistId = useCallback(
    (data) => {
      const id = data.id;

      updateData(id, reducerCases.SET_PLAYLIST_ID);
    },
    [updateData]
  );

  const getSelectedPlaylistData = useCallback(
    (data) => {
      const selectedPlaylist = {
        playlistId: data.id,
        playlistName: data.name,
        playlistDescription: data.description.startsWith("<a")
          ? ""
          : data.description,
        playlistImage: data.images[0].url,
        playlistTracks: data.tracks.items.map(({ track, added_at }) => ({
          trackId: track.id,
          trackName: track.name,
          trackDateAdded: added_at,
          trackArtists: track.artists.map((artist) => artist.name),
          trackImage: track.album.images[2].url,
          trackDuration: track.duration_ms,
          trackAlbum: track.album.name,
          trackContext_uri: track.album.uri,
          trackNumber: track.track_number,
        })),
      };
      if (selectedPlaylistId) {
        updateData(selectedPlaylist, reducerCases.SET_PLAYLIST);
      }
    },
    [updateData, selectedPlaylistId]
  );

  const getArtists = useCallback(
    (data) => {
      const artists = data.artists.map(({ name, id, images }) => {
        return { name, id, images };
      });
      updateData(artists, reducerCases.SET_ARTISTS);
    },
    [updateData]
  );

  const getAlbums = useCallback(
    (data) => {
      const albums = data.albums.map(({ name, id, images, artists }) => {
        return { name, id, images, artists };
      });
      updateData(albums, reducerCases.SET_ALBUMS);
    },
    [updateData]
  );

  const getPodcasts = useCallback(
    (data) => {
      const podcasts = data.shows.map(({ name, id, images, publisher }) => {
        return { name, id, images, publisher };
      });
      updateData(podcasts, reducerCases.SET_PODCASTS);
    },
    [updateData]
  );

  const searchItems = useCallback(
    async (e) => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const searchResults = {
        artists: data.artists?.items.map(({ name, id, images }) => ({
          artistName: name,
          artistId: id,
          artistImg: images[0],
        })),
        playlists: data.playlists?.items.map(({ name, id, images, owner }) => ({
          playlistName: name,
          playlistId: id,
          playlistImg: images[0],
          playlistOwner: owner.display_name,
        })),
        tracks: data.tracks?.items.map(
          ({ name, id, album, artists, duration_ms }) => ({
            trackName: name,
            trackId: id,
            trackImage: album.images[2].url,
            trackArtists: artists.map((artist) => artist.name),
            trackTime: duration_ms,
          })
        ),
      };
      updateData(searchResults, reducerCases.SET_SEARCH_RESULTS);
    },
    [token, url, updateData]
  );

  const getCurrentTrackData = useCallback(
    (data) => {
      if (data !== "") {
        const currentlyPlayingTrack = {
          trackId: data.item.id,
          trackName: data.item.name,
          trackArtists: data.item.artists.map((artist) => artist.name),
          trackImage: data.item.album.images[2].url,
          trackDuration: data.item.duration_ms,
          trackProgress: data.progress_ms,
        };
        updateData(currentlyPlayingTrack, reducerCases.SET_TRACK_PLAYING);
      }
    },
    [updateData]
  );

  const getData = useCallback(async () => {
    const controller = new AbortController();
    setIsPending(true);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setIsPending(false);
      setError(null);
      if (spotifyData === SPOTIFY_DATA.playlistsData) {
        getPlaylistsData(data);
      } else if (spotifyData === SPOTIFY_DATA.userData) {
        getUserData(data);
      } else if (spotifyData === SPOTIFY_DATA.selectedPlaylistId) {
        getSelectedPlaylistId(data);
      } else if (spotifyData === SPOTIFY_DATA.selectedPlaylistData) {
        getSelectedPlaylistData(data);
      } else if (spotifyData === SPOTIFY_DATA.featuredPlaylistsData) {
        getFeaturedPlaylists(data);
      } else if (spotifyData === SPOTIFY_DATA.artistsData) {
        getArtists(data);
      } else if (spotifyData === SPOTIFY_DATA.albumsData) {
        getAlbums(data);
      } else if (spotifyData === SPOTIFY_DATA.podcastsData) {
        getPodcasts(data);
      } else if (spotifyData === SPOTIFY_DATA.currentlyPlayingTrack) {
        getCurrentTrackData(data);
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("The fetch was aborted");
      } else {
        setIsPending(false);
        setError("Could not fetch the data");
      }
    }
    return () => {
      controller.abort();
    };
  }, [
    getPlaylistsData,
    getUserData,
    getSelectedPlaylistData,
    getSelectedPlaylistId,
    getFeaturedPlaylists,
    getAlbums,
    getArtists,
    getPodcasts,
    getCurrentTrackData,
    spotifyData,
    token,
    url,
  ]);

  useEffect(() => {
    if (url.slice(0, 33) === searchURL) {
      searchItems();
    } else {
      getData();
    }
  }, [getData, searchItems, url]);

  return { error, isPending };
};

export default useFetchSpotifyData;
