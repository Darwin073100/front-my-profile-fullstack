import React, { useState } from "react";
import { Card } from "../components/Card";
import { Information } from "../containers/Information";
import { Profile } from "../components/Profile";
import { Container } from "../containers/Container";
import { NavBar } from "../containers/NavBar";
import "../styles/MyProfile.scss";

import { usePerson } from "../hooks/usePerson";

function MyProfile() {
  const {item} = usePerson();

  return (
    <>
      <NavBar>
        <Profile data={item}/>
        <Information item={item}/>
      </NavBar>
      <Container>
        {item.project?.map((item)=>(
          <Card item={ item } key={ item.id }/>
        ))}
      </Container>
    </>
  );
}

export { MyProfile };
