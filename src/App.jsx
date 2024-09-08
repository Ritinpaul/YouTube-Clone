import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import PlayingVideo from './components/PlayingVideo';
import { useAuth } from './context/AuthProvider';
import { Routes,Route } from 'react-router-dom';
import Loading from './loader/Loading';

const App = () => {
  const {loading,data} = useAuth();
    return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/search/:searchQuery" element={<Search/>}></Route>
        <Route path="/video/:id" element={<PlayingVideo/>}></Route>
      </Routes>
    </div>
  )
}

export default App