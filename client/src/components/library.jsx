import React from "react";

export const Library = () => {
    return (
        <div className="library h-full w-full  p-4 text-white">
            <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.815 15l-3 3m0 0l3 3m-3-3h13.5a2.25 2.25 0 002.25-2.25V10.5a2.25 2.25 0 00-2.25-2.25H4.815c-.903 0-1.725.63-1.966 1.463A3.425 3.425 0 003 9.75v6c0 .985.538 1.847 1.334 2.385z" />
                    </svg>
                </span>
                <h2 className="text-2xl font-bold">Your Library</h2>
            </div>
            <div className="flex space-x-4 mb-4">
                <button className="bg-neutral-800 hover:bg-neutral-700 text-sm rounded-full py-1.5 px-4">Playlists</button>
                <button className="bg-neutral-800 hover:bg-neutral-700 text-sm rounded-full py-1.5 px-4">Artists</button>
                <button className="bg-neutral-800 hover:bg-neutral-700 text-sm rounded-full py-1.5 px-4">Albums</button>
            </div>
            <div className="text-sm text-gray-400 mb-2">
                Let’s find some podcasts to add to your library.
            </div>
            <button className="text-sm text-white hover:text-green-500">Browse podcasts</button>
        </div>
    );
}