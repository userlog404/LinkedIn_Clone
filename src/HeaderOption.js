import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({Icon, title, avatar, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className='HeaderOption-icon'/>}
            {avatar && <Avatar className="headerOption-icon">
                {user?.email[0]}
            </Avatar>
                }
            <h3 className='headerOption-title'>{title}</h3>
        </div>
    )
}

export default HeaderOption;
