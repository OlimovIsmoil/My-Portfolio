import React from 'react'
import styleMain from './Main.module.css'
import { Container } from 'react-bootstrap';
function Main() {
  return (

    <div className={styleMain.wrapper}>
      <Container className='text-center'>
        <p>HELLO EVERYBODY, I AM</p>
        <h1>OLIMOV ISMOIL</h1>
        <p className={styleMain.center}>I’m a digital designer in love with photography, painting and discovering new worlds and cultures. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
      </Container>
      <div className={styleMain.round}>
        
      </div>
    </div>
  )
}

export default Main;