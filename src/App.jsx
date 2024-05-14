import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import All from './components/All';
import Music from './components/Music';
import Podcasts from './components/Podcasts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home/" element={<Home />}>
            <Route path="all" element={<All />} />
            <Route path="music" element={<Music />} />
            <Route path="podcasts" element={<Podcasts />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Route>
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