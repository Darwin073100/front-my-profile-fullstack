import React from "react";
import { Container } from "../container/Container";
import { NavBar } from "../container/NavBar";
import '../styles/MyProfile.scss';

function MyProfile(){
    return(
        <>
            <NavBar />
            <Container />            
        </>
    )
}

export { MyProfile };