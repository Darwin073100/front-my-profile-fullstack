import React from "react";
import { usePerson } from "../hooks/usePerson";
import '../styles/Profile.scss';

function Profile({item}) {
  return (
    <div className="profile">
      <div className="img-profile">
        <img
          src={item.uriImg}
          alt={item.name}
        />
      </div>
      <div className="description">
        <p>{item.description}</p>
        <h1>{`${item.name} ${item.lastName}`}</h1>
      </div>
    </div>
  );
}

export { Profile };
