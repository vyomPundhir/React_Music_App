import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import axios from 'axios'

const All = () => {

  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [shows, setShows] = useState([])
  const [music, setMusic] = useState([])
  const [items, setItems] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {

    const fetchArtists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/artists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "1wRPtKGflJrBx9BmLsSwlU,4YRxDV8wJFPHPTeXepOstw,1mYsTxnqsietFxj1OgoGbG,4fEkbug6kZzzJ8eYX6Kbbp,1dVygo6tRFXC8CSWURQJq2"
          }
        });
        console.log(data)
        setArtists(data.artists);
      } catch (error) {
        console.error('Error fetching artists', error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/albums", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "0a183xiCHiC1GQd8ou7WXO,0Rkv5iqjF2uenfL0OVB8hg,3uuu6u13U0KeVQsZ3CZKK4,4mGz0G0d2mqGmaFc67MEEm,1VZDqgb1ALde0CFMIvEGNr"
          }
        });
        console.log(data)
        setAlbums(data.albums);
      } catch (error) {
        console.error('Error fetching albums', error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/recommendations", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 5,
            seed_artists: "0oOet2f43PA68X5RxKobEy,1dVygo6tRFXC8CSWURQJq2,4fEkbug6kZzzJ8eYX6Kbbp",
            seed_generes: "indian,romance,party",
            seed_tracks: "24MMjyA3NLqCsDJfsn51eg,1iZLpuGMr4tn1F5bZu32Kb"
          }
        });
        console.log(data)
        setRecommendations(data.tracks)

      } catch (error) {
        console.error('Error fetching recommendations', error);
      }
    };

    const fetchPlaylists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 5,
          }
        });
        console.log(data)
        setPlaylists(data.playlists.items)

      } catch (error) {
        console.error('Error fetching featured charts', error);
      }
    };

    const fetchEpisodes = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/episodes", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids: "1cIK5BD3CKvKwiCYA16XYW,3n9Sx2q65nyw4kqvtnsmhH,4p8T6BF5DTpzOoFAbcGgqZ,7JEJp2uiED0PsKDwf0vo77,1x1YHdOpYAjwR48eoz1yLL"
          }
        });
        console.log(data)
        setEpisodes(data.episodes)

      } catch (error) {
        console.error('Error fetching trending episode', error);
      }
    };
  
    const fetchShows = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/shows", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids: "0A6kWKFEOFtp8fkrpnAJQB,0CteGmcUh91IrACr914hTa,1u1LNBjAd1LLRW8GXML1er,38AaGN8a1Ar4Hw1t5ZRu6t,2382o7ALF3B9J5Pplk0vwH"
          }
        });
        console.log(data)
        setShows(data.shows)
        

      } catch (error) {
        console.error('Error fetching Podcasts', error);
      }
    };

    const fetchMusic = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 5
          }
        });
        console.log(data)
        setMusic(data.items)
        

      } catch (error) {
        console.error('Error fetching Music', error);
      }
    };

    const fetchPunjabi = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKSopHMaeIeI/playlists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 5,
          }
        });
        console.log(data)
        setItems(data.playlists.items)

      } catch (error) {
        console.error('Error fetching recommendations', error);
      }
    };

    fetchArtists()
    fetchAlbums()
    fetchRecommendations()
    fetchPlaylists()
    fetchEpisodes()
    fetchShows()
    fetchMusic()
    fetchPunjabi()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">

        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularArtists" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</Link>
          <Link to="/home/popularArtists"  className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>

        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">

          {
            artists.map(artist => (
        
              <div key={artist.id}>
                {
                  artist.images.length ? <ArtistCard artistImage={artist.images[0].url} artistName={artist.name} artistDetail={artist.type} /> : 
                  <ArtistCard artistImage={user} artistName={artist.name} artistDetail={artist.type} />
                }
        
              </div>
            ))
          }

        </div>

      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Albums</Link>
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          
          {
            albums.map(album => (
        
              <Link to={`/album/${album.id}`} key={album.id}>
                {
                  album.images.length ? <AlbumCard albumImage={album.images[0].url} albumName={album.name} albumDetail={album.artists[0].name} /> : 
                  <AlbumCard artistImage={user} albumName={album.name} albumDetail={album.artists[0].name} />
                }
        
              </Link>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularRadio" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Recommendations</Link>
          <Link to="/home/popularRadio" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          
        {
            recommendations.map(item => (
        
              <div key={item.id}>
                {
                  item.album.images.length ? <AlbumCard albumImage={item.album.images[0].url} albumName={item.name} albumDetail={item.album.artists[0].name} /> : 
                  <AlbumCard albumImage={user} albumName={item.album.images[0].url} albumDetail={item.album.artists[0].name} />
                }
        
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/featuredCharts" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Featured Charts</Link>
          <Link to="/home/featuredCharts" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          
        {
            playlists.map(playlist => (
        
              <div key={playlist.id}>
                {
                  playlist.images.length ? <AlbumCard albumImage={playlist.images[0].url} albumName={playlist.name} albumDetail={playlist.type} /> : 
                  <AlbumCard albumImage={user} albumName={playlist.name} albumDetail={playlist.type} />
                }
        
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/musicPlayerPlaylists" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Music Player Playlists</Link>
          <Link to="/home/musicPlayerPlaylists" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">

          {
            music.map(item => (
        
              <div key={item.id}>
                {
                  item.album.images.length ? <AlbumCard albumImage={item.album.images[0].url} albumName={item.name} albumDetail={item.album.artists[0].name} /> : 
                  <AlbumCard albumImage={user} albumName={item.name} albumDetail={item.album.artists.name} />
                }
        
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/punjabiHits" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Punjabi Hits</Link>
          <Link to="/home/punjabiHits" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          
        {
            items.map(item => (
              <div key={item.id}>
                {
                  item.images.length ? <AlbumCard albumImage={item.images[0].url} albumName={item.name} albumDetail={item.type} /> : 
                  <AlbumCard albumImage={user} albumName={item.images[0].url} albumDetail={item.type} />
                }
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/originalPodcasts" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Original Podcasts</Link>
          <Link to="/home/originalPodcasts" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          {
            shows.map(show => (
        
              <div key={show.id}>
                {
                  show.images.length ? <AlbumCard albumImage={show.images[0].url} albumName={show.name} albumDetail={show.publisher} /> : 
                  <AlbumCard albumImage={user} albumName={show.name} albumDetail={show.publisher} />
                }
        
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to='/home/trendingEpisodes' className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Trending Episodes</Link>
          <Link to='/home/trendingEpisodes' className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">

          {
            episodes.map(episode => (
        
              <div key={episode.id}>
                {
                  episode.images.length ? <AlbumCard albumImage={episode.images[0].url} albumName={episode.name} albumDetail={episode.show.name} /> : 
                  <AlbumCard albumImage={user} albumName={episode.name} albumDetail={episode.show.name} />
                }
              </div>
            ))
          }
        </div>
      </div>

    </section>

  )
}

export default All