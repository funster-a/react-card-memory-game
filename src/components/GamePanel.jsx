import React from 'react'

const GamePanel = ({startGame, score, record}) => {
  return (
    <div>
        <button onClick={startGame} >Start game</button>
        <button onClick={startGame} >Restart game</button>
            <div style={{marginBottom: 15}} className='scoreboard'> 
            <div>Game Score: {score}</div>
        <div>Your Best Score: {record}</div>
        </div >
    </div>
  )
}

export default GamePanel
