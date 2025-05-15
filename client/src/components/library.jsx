import React from "react";

export const Library = () => {
    return (
        <aside className="bg-black rounded-lg p-4 md:p-6 w-full md:w-80 min-h-[40vh] md:min-h-[69vh] flex flex-col mb-4 md:mb-0">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-bold">Your Library</h2>
                <button className="bg-neutral-800 text-white rounded-full px-3 py-1 text-sm font-semibold hover:bg-neutral-700">+ Create</button>
            </div>
            <div className="flex gap-2 mb-4">
                <button className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-medium">Playlists</button>
                <button className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-medium">Recents</button>
            </div>
            <div className="flex items-center gap-3 mb-4">
                <span className="text-neutral-400">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </span>
                <input
                    className="bg-neutral-900 text-white rounded-full px-3 py-1 w-full text-sm outline-none"
                    placeholder="Search in Your Library"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-br from-purple-700 to-blue-500 rounded-lg p-3 cursor-pointer hover:scale-105 transition">
                    <div className="bg-white/20 rounded-md p-2">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                            <path d="M16.5 7.5v9M12 7.5v9M7.5 7.5v9" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div>
                        <div className="text-white font-semibold">Liked Songs</div>
                        <div className="text-xs text-neutral-200">Playlist • 46 songs</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};