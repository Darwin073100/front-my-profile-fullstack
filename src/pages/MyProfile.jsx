import React from "react";
import { Card } from "../components/Card";
import { Information } from "../containers/Information";
import { Profile } from "../components/Profile";
import { Container } from "../containers/Container";
import { NavBar } from "../containers/NavBar";
import { Empty } from "../components/Empty";
import "../styles/MyProfile.scss";

import { usePerson } from "../hooks/usePerson";

function MyProfile() {
  const { after, before, item } = usePerson();

  return (
    <>
      <NavBar>
        <Profile item={item} />
        <Information after={after} before={before} item={item} />
      </NavBar>
      {
      (item.project?.length > 0) && 
        <Container>
          {item.project?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Container>
      }
      {
        item.project?.length == 0 &&
          <Empty />
      }
    </>
  );
}

export { MyProfile };
