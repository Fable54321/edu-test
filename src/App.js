import React, { useEffect, useState } from "react";
import pirate from "./pirate.png"
import arrow from "./arrow.png"
import QuestionTiles from "./QuestionTiles";
import heart from "./Heart or love shape isolated on a white background.png"
import key from "./Key, an access tool for locks security..png"
import power1  from "./images/Power on.png"
import power2 from "./images/power off.png"

import {  animateScroll as scroll } from "react-scroll";
import Treasure from "./Treasure";
import GameOver from "./GameOver/GameOver";
import Mobile from "./Mobile/Mobile";

function App() {



//probablement un autre component



const[goodAnswer, setGoodAnswer] = useState({
  um: 0,
  c: 0,
  d: 0,
  u:0,
  on: false,
})

const[badAnswer1, setBadAnswer1] = useState({
  um: 0,
  c: 0,
  d: 0,
  u:0,
  on: false,
})

const[badAnswer2, setBadAnswer2] = useState({
  um: 0,
  c: 0,
  d: 0,
  u:0,
  on: false,
})

const[badAnswer3, setBadAnswer3] = useState({
  um: 0,
  c: 0,
  d: 0,
  u:0,
  on: false,
})

const[badAnswer4, setBadAnswer4] = useState({
  um: 0,
  c: 0,
  d: 0,
  u:0,
  on: false,
}) 






const [characterInfo, setCharacterInfo] = useState({
  lives: 0,
  keys: 0,
})


 const [tile, setTile] = useState({
  y:6,
  x:1,
 })

//Title display on ou off
 const [titleDisplay] = useState({display: "flex", justifyContent: "center",  fontFamily: "Yellowtail", fontSize: "2rem", width: "100%"})
 

 //source image pour bouton
 const [source, setSource] = useState({img: power1})

//Question on ou off 
 const [questionFlag, setQuestionFlag] = useState(false)



 const [questionTiles, setQuestionTiles] = useState({
  y:1,
  x:0
 })

 //numero de question
 const [questionNumber, setQuestionNumber] = useState(1)
 //-----------------------------------------------------
 
 //numero au hasard pour indice
 const [randomNumber] = useState(0)

//


//generation questions


 
 
 

 
 
 

// Assuming this code is inside a functional component
useEffect(() => {
  setGoodAnswer({
    um: Math.round(Math.random() * 8 + 1),
    c: Math.round(Math.random() * 9),
    d: Math.round(Math.random() * 9),
    u: Math.round(Math.random() * 9),
    on: true,
  });
  
  
}, [tile]);
 
    
 // SETTINGS FOR THE BAD ANSWERS 

  
  
  

  const generateNewValueU1 = () =>{
    let valueU1 = Math.round(Math.random() * 9)
    while(valueU1 === goodAnswer.u){
      valueU1 = Math.round(Math.random() * 9)
    }
    return valueU1
  }

  const generateNewValueC2 = () =>{
    let valueC2 = Math.round(Math.random() * 9)
    while(valueC2 === goodAnswer.c){
      valueC2 = Math.round(Math.random() * 9)
    }
    return valueC2
  }

  const generateNewValueD3 = () =>{
    let valueD3 = Math.round(Math.random() * 9)
    while(valueD3 === goodAnswer.c){
      valueD3 = Math.round(Math.random() * 9)
    }
    return valueD3
  }

  const generateNewValueC4 = () =>{
    let valueC4 = Math.round(Math.random() * 9)
    while(valueC4 === goodAnswer.c){
      valueC4 = Math.round(Math.random() * 9)
    }
    return valueC4
  }
   
 useEffect(()=> {
   
   setBadAnswer1({
       um: goodAnswer.um,
       c: Math.round(Math.random() * 9),
       d: Math.round(Math.random() * 9),
       u: generateNewValueU1(),
       on: true,
   });


 
   setBadAnswer2({
       um: goodAnswer.um,
       c: generateNewValueC2(),
       d: goodAnswer.d,
       u: Math.round(Math.random() * 9),
       on: true,
   });
 
   setBadAnswer3({
       um: goodAnswer.um,
       c: goodAnswer.c,
       d: generateNewValueD3(),
       u: Math.round(Math.random() * 9),
       on: true,
   });
 
   setBadAnswer4({
       um: goodAnswer.um,
       c: generateNewValueC4(),
       d: goodAnswer.d,
       u: goodAnswer.u,
       on: true,
   })
  
   
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [goodAnswer]) 



//



 useEffect(()=>{
  setQuestionTiles({
    y: Math.floor(Math.random()*6+1),
    x: Math.floor(Math.random()*6)
  })
 },[questionFlag])

 

 useEffect(()=>{
  if(tile.y === questionTiles.y && tile.x === questionTiles.x){
    setQuestionFlag(true)
   }
   
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[tile])

//movement functions
//
const moveRight = () => {
  
  if(tile.x === 5){
    alert("L'océan infini se trouve sur votre droite, choisissez une autre direction")
  }else {
  setTile((prev) => {
    return {
      ...prev,
      x: tile.x +1,
    }

  })
}
}
  
const moveLeft =() => {
  
  if(tile.x === 0){
    alert("L'océan infini se trouve sur votre gauche, choisissez une autre direction")
  }
  else {
    setTile((prev) => {
    return {
      ...prev,
      x: tile.x -1,
    }
  })
}
}

const moveDown =(e) => {
  
  if(tile.y === 1){
    alert("L'océan infini se trouve sous vos pieds, choisissez une autre direction")
  }else{
  setTile((prev) => {
    return {
      ...prev,
      y: tile.y -1,
    }
  })
}
}

const moveUp =() => {
  if(tile.y=== 6){
    alert("L'océan infini se trouve au dessus de vous, choisissez une autre direction")
  }else{
  setTile((prev) => {
    return {
      ...prev,
      y: tile.y +1,
    }
  })
}
}


//
//-------------------------------------------------------------
/*useEffect(()=> {
  scroll.scrollTo(190)
},[questionFlag])*/


const handleScroll =() => {
 if(source.img === power1) {
  setSource((prev) => {
    return {
      ...prev,
      img: power2
    }
  });
  scroll.scrollTo(195)
 }else {
  setSource((prev) => {
    return {
      ...prev,
      img: power1
    }
  });
  scroll.scrollToTop()
 }
}





  
if(!questionFlag && characterInfo.keys !== 5 && characterInfo.lives !== 0){
  return (
    <>
    <div className="mobile">
      <Mobile />
      </div>
      <div className="BG-app">
        <div className="hearts-and-keys">
          <div className="hearts">
            {characterInfo.lives === 1 && <img alt ="" src={heart} />}
            {characterInfo.lives === 2 && (
              <>
                <img alt ="" src={heart} />
                <img alt ="" src={heart} />
              </>
            )}
            {characterInfo.lives === 3 && (
              <>
                <img alt ="" src={heart} />
                <img alt ="" src={heart} />
                <img alt ="" src={heart} />
              </>
            )}
          </div>
        </div>
       
        <div className="hide">
          <p id="startText">Cliquez pour débuter</p>
          <button id="startButton" onClick={handleScroll}>
            <img alt ="" id="blackButton" src={source.img} />
          </button>
        </div>
        <div className="wrapper">
        <div className="title" style={titleDisplay}>
          <h1>Le trésor décomposé</h1>
        </div>
          <div className="container">
            <div>1{tile.y === 6 && tile.x === 0 && <img alt ="" src={pirate} />}</div>
            <div>2{tile.y === 6 && tile.x === 1 && <img alt ="" src={pirate} />}</div>
            <div>3{tile.y === 6 && tile.x === 2 && <img alt ="" src={pirate} />}</div>
            <div>4{tile.y === 6 && tile.x === 3 && <img alt ="" src={pirate} />}</div>
            <div>5{tile.y === 6 && tile.x === 4 && <img alt ="" src={pirate} />}</div>
            <div>6{tile.y === 6 && tile.x === 5 && <img alt ="" src={pirate} />}</div>
            <div>7{tile.y === 5 && tile.x === 0 && <img alt ="" src={pirate} />}</div>
            <div>8{tile.y === 5 && tile.x === 1 && <img alt ="" src={pirate} />}</div>
            <div>9{tile.y === 5 && tile.x === 2 && <img alt ="" src={pirate} />}</div>
            <div>
              10
              {tile.y === 5 && tile.x === 3 && <img alt="" src={pirate} />}
            </div>
            <div>
              11
              {tile.y === 5 && tile.x === 4 && <img alt ="" src={pirate} />}
            </div>
            <div>
              12
              {tile.y === 5 && tile.x === 5 && <img alt ="" src={pirate} />}
            </div>
            <div>
              13
              {tile.y === 4 && tile.x === 0 && <img alt ="" src={pirate} />}
            </div>
            <div>
              14
              {tile.y === 4 && tile.x === 1 && <img alt ="" src={pirate} />}
            </div>
            <div>
              15
              {tile.y === 4 && tile.x === 2 && <img alt ="" src={pirate} />}
            </div>
            <div>
              16
              {tile.y === 4 && tile.x === 3 && <img alt ="" src={pirate} />}
            </div>
            <div>
              17
              {tile.y === 4 && tile.x === 4 && <img alt ="" src={pirate} />}
            </div>
            <div>
              18
              {tile.y === 4 && tile.x === 5 && <img alt ="" src={pirate} />}
            </div>
            <div>
              19
              {tile.y === 3 && tile.x === 0 && <img alt ="" src={pirate} />}
            </div>
            <div>
              20
              {tile.y === 3 && tile.x === 1 && <img alt ="" src={pirate} />}
            </div>
            <div>
              21
              {tile.y === 3 && tile.x === 2 && <img alt ="" src={pirate} />}
            </div>
            <div>
              22
              {tile.y === 3 && tile.x === 3 && <img alt ="" src={pirate} />}
            </div>
            <div>
              23
              {tile.y === 3 && tile.x === 4 && <img alt ="" src={pirate} />}
            </div>
            <div>
              24
              {tile.y === 3 && tile.x === 5 && <img alt ="" src={pirate} />}
            </div>
            <div>
              25
              {tile.y === 2 && tile.x === 0 && <img alt ="" src={pirate} />}
            </div>
            <div>
              26
              {tile.y === 2 && tile.x === 1 && <img alt ="" src={pirate} />}
            </div>
            <div>
              27
              {tile.y === 2 && tile.x === 2 && <img alt ="" src={pirate} />}
            </div>
            <div>
              28
              {tile.y === 2 && tile.x === 3 && <img alt ="" src={pirate} />}
            </div>
            <div>
              29
              {tile.y === 2 && tile.x === 4 && <img alt ="" src={pirate} />}
            </div>
            <div>
              30
              {tile.y === 2 && tile.x === 5 && <img alt ="" src={pirate} />}
            </div>
            <div>
              31
              {tile.y === 1 && tile.x === 0 && <img alt ="" src={pirate} />}
            </div>
            <div>
              32
              {tile.y === 1 && tile.x === 1 && <img alt ="" src={pirate} />}
            </div>
            <div>
              33
              {tile.y === 1 && tile.x === 2 && <img alt ="" src={pirate} />}
            </div>
            <div>
              34
              {tile.y === 1 && tile.x === 3 && <img alt ="" src={pirate} />}
            </div>
            <div>
              35
              {tile.y === 1 && tile.x === 4 && <img alt ="" src={pirate} />}
            </div>
            <div>
              36
              {tile.y === 1 && tile.x === 5 && <img alt ="" src={pirate} />}
            </div>
          </div>
          <div className="buttons">
            <button onClick={moveLeft} id="left">
              <img alt ="" src={arrow} />
            </button>
            <button onClick={moveUp} id="up">
              <img alt ="" src={arrow} />
            </button>
            <button onClick={moveDown} id="down">
              <img alt ="" src={arrow} />
            </button>
            <button onClick={moveRight} id="right">
              <img alt ="" src={arrow} />
            </button>
          </div>
        </div>

        <div className="hints-keys-decription">
          <div className="hints-keys">
          <div className="indice">
            {randomNumber === 0 ? (
              <p>
                Le prochain pirate se trouve dans la rangée {questionTiles.y}
              </p>
            ) : (
              <p>
                Le prochain pirate se trouve dans la colonne{" "}
                {questionTiles.x + 1}
              </p>
            )}{" "}
          </div>
          <div className="keys">
            <p>Vous possédez {characterInfo.keys} clés :</p>
            {characterInfo.keys === 1 && <img alt="" src={key} />}
            {characterInfo.keys === 2 && (
              <>
                <img  alt ="" src={key} />
                <img alt="" src={key} />
              </>
            )}
            {characterInfo.keys === 3 && (
              <>
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
              </>
            )}
            {characterInfo.keys === 4 && (
              <>
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
              </>
            )}
            {characterInfo.keys === 5 && (
              <>
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
                <img alt ="" src={key} />
              </>
            )}
          </div>
          </div>
          <div className="description">
            <p>
              Tu as trouvé le trésor, malheureusement celui-ci nécéssite 5 clés
              pour être ouvert. Ces 5 clés ont été volées par des pirates
              barbares qui sont tout sauf bien intentionnés. Tu devras leur
              démontrer tes connaissances en décomposition des nombres pour
              éviter de perdre de l'énergie au combat. Sauras-tu relever ce défi
              ?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
else if (characterInfo.keys === 5){
  return <Treasure />
}
else if (characterInfo.lives === 0){
  return <GameOver 
  setCharacterInfo={setCharacterInfo} />
}
 else {
  return <QuestionTiles 
 questionFlag={questionFlag} 
 questionNumber={questionNumber} 
 setQuestionNumber={setQuestionNumber} 
 setQuestionFlag={setQuestionFlag}  
 characterInfo={characterInfo} 
 setCharacterInfo={setCharacterInfo}
 goodAnswer={goodAnswer}
 badAnswer1={badAnswer1}
 badAnswer2={badAnswer2}
 badAnswer3={badAnswer3}
 badAnswer4 ={badAnswer4}
 setBadAnswer1={setBadAnswer1}
 setBadAnswer2={setBadAnswer2}
 setBadAnswer3={setBadAnswer3}
 setBadAnswer4={setBadAnswer4} /> 
}
}

export default App;
