import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="Sidebar">
        <div className="Sidebar_top">
            <img src="https://parrotsec.org/images/backgrounds/world-map-poly.jpg" alt=""/>
            <Avatar src={user.photoUrl} className="sidebar_avatar">
                {user.email[0]}
                </Avatar>
                
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">

        <div className="sidebar_stat">
            <p>Number of posts</p>
            <p className="sidebarStat_number">4,207</p>
            </div>

        <div className="sidebar_stat">
            <p>Views on posts</p>
            <p className="sidebarStat_number">4,227</p>
         </div>
         <div className="sidebar_butt">
            <p>Recents</p>
            
            {recentItem('reducking')}
            {recentItem('hacking')}
            {recentItem('reactjs')}
            {recentItem('dev')}
            {recentItem('Programming')}
            </div>
        </div>
        </div>
    )
}

export default Sidebar;