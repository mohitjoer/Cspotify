import React from "react";

const mixes = [
    {
        title: "Daily Mix 01",
        artists: "Sushin Shyam, Sooraj Santhosh, Nazriya Nazim...",
        img: "https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8",
        label: "01"
    },
    {
        title: "Daily Mix 02",
        artists: "Harris Jayaraj, Stephen Zechariah, Ilaiyaraaja...",
        img: "https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8",
        label: "02"
    },
    {
        title: "Daily Mix 03",
        artists: "Shankar-Ehsaan-Loy, Pritam, Badshah...",
        img: "https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8",
        label: "03"
    },
    {
        title: "Daily Mix 04",
        artists: "Kushagra, Aditya Rikhari, Rochak Kohli...",
        img: "https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8",
        label: "04"
    },
    {
        title: "Daily Mix 05",
        artists: "Afusic, Aashir Wajahat, Hadiqa Kiani...",
        img: "https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8",
        label: "05"
    }
];

export const MusicPage = () => (
    <main className="flex-1 p-2 md:p-8 bg-black rounded-lg min-h-[40vh] md:min-h-[69vh]">
        <div className="flex gap-2 md:gap-4 mb-6 md:mb-8 flex-wrap">
            <button className="bg-purple-800 text-white px-4 py-1 rounded-full font-semibold">All</button>
            <button className="bg-neutral-800 text-white px-4 py-1 rounded-full font-semibold">Music</button>
            <button className="bg-neutral-800 text-white px-4 py-1 rounded-full font-semibold">Podcasts</button>
        </div>
        <div className="mb-6 md:mb-8">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Made For R. Mohit joe</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {mixes.map((mix, idx) => (
                    <div key={idx} className="bg-neutral-900 rounded-lg p-2 md:p-4 hover:bg-neutral-800 transition cursor-pointer">
                        <img src={mix.img} alt={mix.title} className="rounded-md mb-2 md:mb-3 w-full aspect-square object-cover" />
                        <div className="text-white font-semibold">{mix.title}</div>
                        <div className="text-xs text-neutral-400">{mix.artists}</div>
                        <div className="mt-1 md:mt-2 text-xs text-neutral-300">Daily Mix <span className="font-bold">{mix.label}</span></div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">Jump back in</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                <div className="bg-neutral-900 rounded-lg p-2 md:p-4 hover:bg-neutral-800 transition cursor-pointer">
                    <img src="https://i.scdn.co/image/ab67616d0000b273e0c3b5c1e8b7e1e6e8e8e8e8" alt="MADA TRANCE" className="rounded-md mb-2 md:mb-3 w-full aspect-square object-cover" />
                    <div className="text-white font-semibold">MADA TRANCE</div>
                </div>
            </div>
        </div>
    </main>
);