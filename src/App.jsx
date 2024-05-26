import React, { useEffect, useState } from 'react'
import Login from "./components/Login" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import All from './components/All';
import Music from './components/Music';
import Podcasts from './components/Podcasts';
import Download from './components/Download';
import Layout2 from './components/Layout2';
import New from './components/New';
import PopularArtists from './components/PopularArtists';
import PopularRadio from './components/PopularRadio';
import FeaturedCharts from './components/FeaturedCharts';
import MusicPlayerPlaylists from './components/MusicPlayerPlaylists';
import OriginalPodcasts from './components/OriginalPodcasts';
import PopularAlbums from './components/PopularAlbums';
import TrendingEpisodes from './components/TrendingEpisodes';


const App = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token=hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  }, [])
  
  return (
    <div>
      { !token ?
      <Login/> :
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home/" element={<Home />}>
                <Route path="all" element={<All />} />
                <Route path="music" element={<Music />} />
                <Route path="podcasts" element={<Podcasts />} />
                <Route path="popularArtists" element={<PopularArtists />} />
                <Route path="popularAlbums" element={<PopularAlbums />} />
                <Route path="popularRadio" element={<PopularRadio />} />
                <Route path="featuredCharts" element={<FeaturedCharts />} />
                <Route path="musicPlayerPlaylists" element={<MusicPlayerPlaylists />} />
                <Route path="originalPodcasts" element={<OriginalPodcasts />} />
                <Route path="trendingEpisodes" element={<TrendingEpisodes />} />
    
              </Route>
    
              <Route path="search" element={<Search />} />
    
              <Route path='layout2/' element={<Layout2 />}>
                <Route path='download' element={<Download/>}/>
                <Route path='new' element={<New/>}/>
              </Route>
    
            </Route>

            <Route path='/login' element={<Login/>} />
          </Routes>
        </Router>
    }
    </div>
  )
};

export default App;