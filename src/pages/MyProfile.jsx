import React from "react";
import { Card } from "../components/Card";
import { Information } from "../containers/Information";
import { Profile } from "../components/Profile";
import { Container } from "../containers/Container";
import { NavBar } from "../containers/NavBar";
import "../styles/MyProfile.scss";

function MyProfile() {
  return (
    <>
      <NavBar>
        <Profile />
        <Information />
      </NavBar>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
}

export { MyProfile };
