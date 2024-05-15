import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import All from './components/All';
import Music from './components/Music';
import Podcasts from './components/Podcasts';
import Signup from './components/Signup';
import Login from './components/Login';
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
  return (
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
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;








// import React from 'react'
// import Sidebar from './components/Sidebar'
// import { Outlet } from 'react-router-dom'

// const App = () => {
//   return (
//     <section className="main w-full px-[10px] py-[10px] flex flex-row bg-[#000000] text-white h-screen gap-[10px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707]">
//       <Sidebar/>
//       <Outlet />
//     </section>
//   )
// }

// export default App