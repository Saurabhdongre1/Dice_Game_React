
import './App.css';
import GamePlay from './Components/GamePlay';
import StartGame from './Components/StartGame';
import { useState } from 'react';
function App() {
      const [isGameStarte,setIsGameStarted]=useState(false);
      const toggleGamePlay=()=>{
        setIsGameStarted((prev)=>!prev);
    };
  return (
    <>
    {
        isGameStarte?<GamePlay/>:<StartGame  toggle={toggleGamePlay}/>
    }
    </>
  );
}

export default App;


