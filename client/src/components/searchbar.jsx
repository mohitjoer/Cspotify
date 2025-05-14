import React from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-form h-10 w-100  rounded-full   flex  flex-row ">
                <button
                type="submit"
                className="search-button bg-transparent flex justify-center w-10">
                    <SearchIcon className="search-icon" />
                </button>
                <input
                    type="text"
                    className="search-input w-90 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-center rounded-full"
                    placeholder="What do you want to play?"
                />
            </form>
        </div>
    );
};

export default SearchBar;