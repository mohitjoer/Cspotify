import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import React from 'react';

export const Navbar = () => {
    return (
        <div className="navbar flex items-center justify-between gap-2 md:gap-4 p-2 md:p-4 bg-black w-full shadow-md">
            <div>
                <button className="menu-icon flex items-center justify-center w-10 h-10"><MenuOutlinedIcon/></button>
            </div>
            <div className="navbar-left w-3/5 md:w-2/5 flex items-center">
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
            </div>          
            <div className="navbar-right flex items-center gap-2">
                <button className="bell-icon flex items-center justify-center w-10 h-10"><NotificationsNoneOutlinedIcon/></button>
                <button className="profile-icon flex items-center justify-center w-10 h-10"><AccountCircleOutlinedIcon/></button>
            </div>
        </div>
    );
}