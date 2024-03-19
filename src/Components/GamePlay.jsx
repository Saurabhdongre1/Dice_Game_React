import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { OutlineButton } from '../Styled/Button'
import { Button } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const[selectNumber,setSelectNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const[showRules,setShowRules]=useState(false);

  const genrateRandomNumber=(min,max)=>{
    return Math.floor( Math.random()*(max-min)+min);
  };
  const roleDice=()=>{
    if(!selectNumber){
      setError("You Have Not Selcted Any Number");
      return;
    }
    setError("");
    const randomNumber=genrateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    
    if(selectNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelectNumber(undefined);
  }
  const resetScore=()=>{
    setScore(0);
  }
  return (
    <MainContainer>
    <div className='top_section'>
      <TotalScore  score={score}/>
      <NumberSelector setError ={setError}error={error}selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules?"Hide":"Show"} Rules</Button>
    </div>
    {showRules && <Rules/>}
    </MainContainer>
  )
}

const MainContainer=styled.main`
padding-top: 72px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

`

export default GamePlay
