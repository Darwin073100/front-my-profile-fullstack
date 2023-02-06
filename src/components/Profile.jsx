import React from "react";
import '../styles/Profile.scss';

function Profile() {
  return (
    <div class="profile">
      <div class="img-profile">
        <img
          src="https://static.platzi.com/media/avatars/avatars/edwinegq_132bbeff-593f-400b-9484-25e6eb0c445d.jpg"
          alt="profile"
        />
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci et
          dolores quasi officia reprehenderit dolorum. Doloribus dolor assumenda
          animi nam reiciendis, vel minus blanditiis deleniti, quae eum, atque
          fuga repellat!
        </p>
        <h1>Name FirstName LastName</h1>
      </div>
    </div>
  );
}

export { Profile };
