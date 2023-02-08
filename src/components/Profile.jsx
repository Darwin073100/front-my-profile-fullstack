import React from "react";
import '../styles/Profile.scss';

function Profile({data}) {
  return (
    <div className="profile">
      <div className="img-profile">
        <img
          src={data.uriImg}
          alt={data.name}
        />
      </div>
      <div className="description">
        <p>{data.description}</p>
        <h1>{`${data.name} ${data.lastName}`}</h1>
      </div>
    </div>
  );
}

export { Profile };
