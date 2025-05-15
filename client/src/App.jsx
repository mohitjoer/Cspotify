import React from 'react';
import { Navbar } from './components/navbar';
import './App.css';
import { Library } from './components/library';
import MusicPlayer from './components/musicplayer';
import MusicPlayerBar from './components/musicplayer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-1 items-center w-full flex-row justify-center mt-20 mb-20">
        <div className="library bg-black rounded-lg w-fit size-full shadow-md">
          <Library />
        </div>
        <div className="music-page flex-1">
         
        </div>
      </div>
      <div className="player ">
        <div className="player-bar bg-black rounded-lg w-screen  size-full shadow-md mx-auto">
          <MusicPlayerBar/>
        </div>
      </div>
    </div>
  );
}
export default App;
