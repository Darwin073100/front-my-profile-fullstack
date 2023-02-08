import React from "react";
import { Card } from "../components/Card";
import { Information } from "../containers/Information";
import { Profile } from "../components/Profile";
import { Container } from "../containers/Container";
import { NavBar } from "../containers/NavBar";
import "../styles/MyProfile.scss";

import { data } from './data';

function MyProfile() {
  
  return (
    <>
      <NavBar>
        <Profile data={data}/>
        <Information data={data}/>
      </NavBar>
      <Container>
        {data.project.map( (item) =>(
          <Card item={ item } key={ item.id }/>
        ))}
      </Container>
    </>
  );
}

export { MyProfile };
