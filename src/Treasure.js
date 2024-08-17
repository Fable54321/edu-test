import React, { useEffect, useState } from 'react'
import chest from "./images/treasure-chest.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
const Treasure = () => {
const [number, setNumber] = useState(1000)
const [resultsOn, setResultsOn] = useState(false);
const [arrayOfResults, setArrayOfResults] = useState([])



const numbertest = 1000;

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

  return (
    <>
      <div className="treasureBG">
        <img className="chest" src={chest} />
        <div className="winner">
          <h1>Felicitations vous avez ouvert le tresor</h1>
          <p>
            Vous avez su demontrer vos capacites, vous avez maintenant acces au
            contenu du tresor, une calculatrice qui decompose n'importe quel
            nombre
          </p>
        </div>
        
        <div className='calculator'>
        <h1> Calculatrice </h1>
            <form onSubmit={(e) => convertToArray(e)}>
                <label htmlFor='numberInput'> Nombre: </label>
                <input id="numberInput" value={number} onChange={(e)=> setNumber(e.target.value)} type="number" min={1000} max={9999}></input>
                <button>entrer</button>
            </form>
            <div className='results'>
             {arrayOfResults.map((result, index)=>(
                <div className='individual-results'>
                <p>Methode {index + 1} :</p>
                <p>{result}</p>
                </div>
             ))}
            </div>
        </div>
        
      </div>
    </>
  );
}

export default Treasure


/*  <div className="treasureBG">
    </div>
    <img className="chest" src={chest} />
    <div className="winner">
        <h1>Felicitations vous avez ouvert le tresor</h1>
        <p>Vous avez su demontrer vos capacites,
        
          vous avez maintenant acces au contenu du tresor, une calculatrice qui decompose n'importe quel nombre
        </p>
    </div> */