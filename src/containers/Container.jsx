import React from 'react';
import "../styles/Container.scss";

function Container({children}) {
  return (
    <section className='container'>
        {children}
    </section>
  )
}

export { Container };