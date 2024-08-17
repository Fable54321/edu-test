import React from 'react'
import styles from "./GameOver.module.css"


const GameOver = ({ setCharacterInfo }) => {

const handleClick = () =>{
  setCharacterInfo({
    keys: 0,
    lives: 3,
  })
}


  return (
    <div className={styles["game-over"]}>
      <div className={styles["play-again"]}>
        <button onClick={handleClick}>Rejouer</button>
      </div>  
    </div>
  )
}

export default GameOver
