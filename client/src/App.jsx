import React from 'react';
import { Navbar } from './components/navbar';
import './App.css';
import { Library } from './components/library';
import { MusicPage } from './components/musicpage';
import MusicPlayerBar from './components/musicplayer';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 overflow-hidden">
      <Navbar />
      
      <div className="flex flex-1 min-h-0 w-full gap-4 px-4 py-6 pb-32">
          <Library />
          <MusicPage />
      </div>

      <MusicPlayerBar />
    </div>
  );
}
export default App;
