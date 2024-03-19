
import styled from "styled-components";


const RoleDice = ({currentDice,roleDice}) => {
  return (
    <DiceContainer>
     <div className="dice" onClick={roleDice}>
     <img src={`/dice/dice_${currentDice}.png`} alt="" />
     </div>
     <p>Click On Dice To Roll</p>
      
    </DiceContainer>
  )
}
const DiceContainer=styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
  }
`;
export default RoleDice
