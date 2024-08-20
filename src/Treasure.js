import React, { useState } from 'react'
import chest from "./images/treasure-chest.png"

const Treasure = () => {
const [number, setNumber] = useState(1000)
const [arrayOfResults, setArrayOfResults] = useState([])





const convertToArray = (e) =>{
  e.preventDefault()
  const arrayOfNumber = 
  number
  .toString()
  .split('')
  .map((digits) => {
   return Number(digits)
  })
  setArrayOfResults([
    `${arrayOfNumber[0]}UM + ${arrayOfNumber[1]}C + ${arrayOfNumber[2]}D + ${arrayOfNumber[3]}U`,
    `${arrayOfNumber[0]} x 1000 + ${arrayOfNumber[1]}x 100 + ${arrayOfNumber[2]} x 10 + ${arrayOfNumber[3]} x 1`,
    `${arrayOfNumber[0]*1000} + ${arrayOfNumber[1]*100} + ${arrayOfNumber[2]*10} + ${arrayOfNumber[3]}`,
  ])
  
}

const reload = () => {
  window.location.reload()
}
const handleInvalid = (e) => {
  e.target.setCustomValidity("Tu dois entrer un nombe entre 1000 et 9999 !")
}

  return (
    <>
      <div className="treasureBG">
        <img className="chest" alt ="" src={chest} />
        <div className="winner">
          <h1>Félicitations tu as ouvert le trésor</h1>
          <p>
            Tu as su démontrer vos capacités, vous avez maintenant accès au
            contenu du trésor, une calculatrice qui décompose n'importe quel
            nombre
          </p>
        </div>
        <div className='final-div'>
        <button onClick={reload} className='play-again'>rejouer</button>
        <div className='calculator'>
        <h1> Calculatrice </h1>
            <form onSubmit={(e) => convertToArray(e)}>
                <label htmlFor='numberInput'> Nombre: </label>
                <input onInvalid={handleInvalid} id="numberInput" value={number} onChange={(e)=> setNumber(e.target.value)} type="number" min={1000} max={9999}></input>
                <button>entrer</button>
            </form>
            <div className='results'>
             {arrayOfResults.map((result, index)=>(
                <div className='individual-results'>
                <p>Méthode {index + 1} :</p>
                <p>{result}</p>
                </div>
             ))}
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Treasure


