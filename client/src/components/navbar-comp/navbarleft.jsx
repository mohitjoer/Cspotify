import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const UserProfile = () => {
    return (
            <button className="profile-icon flex items-center justify-center w-10 h-10"><AccountCircleOutlinedIcon/></button>
    );
};

export const BellNotification = () => {
    return (
            <button className="bell-icon flex items-center justify-center w-10 h-10"><NotificationsNoneOutlinedIcon/></button>
    );
};