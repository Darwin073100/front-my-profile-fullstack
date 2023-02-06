import React from 'react'
import { Card } from "../components/Card"
import "../styles/Container.scss";

function Container() {
  return (
    <section className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </section>
  )
}

export { Container };