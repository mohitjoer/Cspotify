import React from "react";

const mixes = [
    {
        title: "Daily Mix 01",
        artists: "Sushin Shyam, Sooraj Santhosh, Nazriya Nazim...",
        img: "https://imgs.search.brave.com/DvbBXEHjIoDJ6bB7qOfK5tOOASoVTS07btbf6fwfn8s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1ZzFnNGh3NUwu/anBn",
        label: "01"
    },
    {
        title: "Daily Mix 02",
        artists: "Harris Jayaraj, Stephen Zechariah, Ilaiyaraaja...",
        img: "https://imgs.search.brave.com/vArhOBLcr9gBSaU9c59gEkr1tsl9_p8pKvS8xQmkwNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0d05tMmxQbEwu/anBn",
        label: "02"
    },
    {
        title: "Daily Mix 03",
        artists: "Shankar-Ehsaan-Loy, Pritam, Badshah...",
        img: "https://imgs.search.brave.com/MGDudY1VRU45gxLi7wkV3mdKrMJPtkvUx2ootUmu8GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE4NmNDS0FJZkwu/anBn",
        label: "03"
    },
    {
        title: "Daily Mix 04",
        artists: "Kushagra, Aditya Rikhari, Rochak Kohli...",
        img: "https://imgs.search.brave.com/SYc2Lo54wUeI2AJuUechPp0eJTYstiwssI2fY7SClS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ5Lzlm/LzUzLzQ5OWY1MzY5/YTQyZjk4N2M3NWI2/YWRmZWNmYWI2NzNk/LmpwZw",
        label: "04"
    },
    {
        title: "Daily Mix 05",
        artists: "Afusic, Aashir Wajahat, Hadiqa Kiani...",
        img: "https://imgs.search.brave.com/dSyWb-BmyujXjfXPI7sEuWC1-aHjcqsZoXTIT8YMlHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9hbGJ1bS1j/b3Zlci1kZXNpZ24t/dGVtcGxhdGUtMzhk/ODIwMWZhYmVhMGUx/ODNjMWVhNzY2ZmU1/MGRjOTEuanBnP3Rz/PTE3MTE3OTI5NjI",
        label: "05"
    }
];

export const MusicPage = () => (
    <main className="flex-1 p-2 md:p-8 bg-black rounded-lg min-h-[40vh] md:min-h-[69vh] overflow-y-auto">
        <div className="flex gap-2 md:gap-4 mb-6 md:mb-8 flex-wrap">
            <button className="bg-purple-800 text-white px-4 py-1 rounded-full font-semibold">All</button>
            <button className="bg-neutral-800 text-white px-4 py-1 rounded-full font-semibold">Music</button>
            <button className="bg-neutral-800 text-white px-4 py-1 rounded-full font-semibold">Podcasts</button>
        </div>
        <div className="mb-6 md:mb-8">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Made For You</h2>
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
                    <img src="https://imgs.search.brave.com/zDliI9O9-0HxMzxmN0AaYWte9KEc-6AjUS8eLELUH78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIw/MTYwNDEvMTYwMHct/bUhJSk9CTjRSa1ku/anBn" alt="MADA TRANCE" className="rounded-md mb-2 md:mb-3 w-full aspect-square object-cover" />
                    <div className="text-white font-semibold">MADA TRANCE</div>
                </div>
            </div>
        </div>
    </main>
);