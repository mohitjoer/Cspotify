import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="search-bar w-full">
            <form className="search-form h-10 w-full rounded-full flex flex-row">
                <button
                    type="submit"
                    className="search-button flex items-center justify-center w-10 h-10">
                    <SearchIcon className="search-icon round" />
                </button>
                <input
                    type="text"
                    className="search-input flex-grow bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-center rounded-full"
                    placeholder="What do you want to play?"
                />
            </form>
        </div>
    );
};

export default SearchBar;