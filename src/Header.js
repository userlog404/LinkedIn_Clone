import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import {Home, HomeMaxOutlined, MessageRounded, Notifications, Settings, SupervisorAccount } from '@mui/icons-material';
import { logout } from './features/counter/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Header() {

    const dispatch = useDispatch();

    const logOutApp = () => {
        dispatch (logout())
        auth.signOut();
    };
    return (
        <div className='header'>
           <div className='header-left'>
                <img src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png" alt=""/>
                <div className='header-search'>
                     <SearchIcon />
                    <input placeholder='Search' type="text"/>
                </div>
           </div>
           
           <div className='header-right'> 
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="Network"/>
                <HeaderOption Icon={MessageRounded} title="Messages"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption Icon={Settings} title="Settings"/>
                <HeaderOption avatar={true} onClick={logOutApp} title="Log Out"/>
           </div>
        </div>
    )
}

export default Header;