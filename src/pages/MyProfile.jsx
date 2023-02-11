import React, { useState } from "react";
import { Card } from "../components/Card";
import { Information } from "../containers/Information";
import { Profile } from "../components/Profile";
import { Container } from "../containers/Container";
import { NavBar } from "../containers/NavBar";
import "../styles/MyProfile.scss";

import { usePerson } from "../hooks/usePerson";

function MyProfile() {
  const {item,index} = usePerson();
  console.log(item.project?.[1]);

  return (
    <>
      <NavBar>
        <Profile data={item} index={index}/>
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
