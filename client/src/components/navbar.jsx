import SearchBar from './navbar-comp/navbarcent';
import { UserProfile } from './navbar-comp/navbarleft';
import { BellNotification } from './navbar-comp/navbarleft';
import { MenuOutlinedButton } from './navbar-comp/navebarright';
import React from 'react';

export const Navbar = () => {
    return (
        <div className="navbar flex items-center justify-between content-center gap-4 p-2 bg-black w-screen shadow-md ">
            <div>
                <MenuOutlinedButton />
            </div>
            <div className="navbar-left w-3/6 flex items-center">
                <SearchBar />            </div>
            <div className="navbar-right flex items-center gap-2">
                <BellNotification />
                <UserProfile />
            </div>
        </div>
    );
}