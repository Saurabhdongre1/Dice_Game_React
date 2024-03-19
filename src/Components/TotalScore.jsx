import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <div>
        <ScoreContiner>
            <div>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
        </ScoreContiner>
      
    </div>
  )
}
const ScoreContiner= styled.div`
max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height:100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`

export default TotalScore
