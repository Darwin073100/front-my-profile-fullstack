import React from "react";
import '../styles/NavBar.scss';

function NavBar({children}){
    return(
        <nav className="nav-bar">
            {children}
        </nav>
    )
}

export { NavBar };