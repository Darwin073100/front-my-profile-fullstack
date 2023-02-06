import React from "react";
import '../styles/NavBar.scss';
import { Profile } from '../components/Profile'
import { Information } from '../components/Information';

function NavBar(){
    return(
        <nav className="nav-bar">
            <Profile />
            <Information />
        </nav>
    )
}

export { NavBar };