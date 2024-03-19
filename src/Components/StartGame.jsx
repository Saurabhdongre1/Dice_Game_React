import React, { useState } from 'react'
import GamePlay from './GamePlay';
import styled from 'styled-components';
import { Button } from '../Styled/Button';

const StartGame = ({toggle}) => {
    return(
   <Container>
      <div><img src="\dice\dices.png" alt="" /></div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  )
}
const Container = styled.div`
  max-width: 1080px;
  display:flex ;
  margin: 0 auto;
  height: 100vh;
  align-items:center ;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }

  `;


export default StartGame
