import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from 'react-router-dom';
import style from "./Nav.module.css"
export default function Nav ({onSearch}) {
    
    const location = useLocation();

    return(
    <div className={style.div}>
        <NavLink to={"/home"}  >
            <button className={style.Home} >Home</button>
        </NavLink>
        {location.pathname === "/home" ? <SearchBar onSearch={onSearch}/> : null }
        <NavLink to={"/about"} >
            <button className={style.About} >About</button>
        </NavLink>
        <NavLink to={"/favorites"} >
            <button className={style.About} >Favorites</button>
        </NavLink>
     </div>
    );
}