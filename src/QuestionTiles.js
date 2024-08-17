import React, { useState } from 'react'
import pirate1 from "./images/pirate-1.png"
import pirate2 from "./images/pirate-2.png"
import pirate3 from "./images/pirate-3.png"
import pirate4 from "./images/pirate-4.png"
import pirate5 from "./images/pirate-5.png"
import bubble from "./images/comic bubble.png"
import { animateScroll as scroll } from "react-scroll";
const QuestionTiles = ({  
    setQuestionFlag, 
    setCharacterInfo, 
    characterInfo, 
    setQuestionNumber, 
    questionNumber,
    goodAnswer,
    badAnswer1,
    badAnswer2,
    badAnswer3,
    badAnswer4,
    QuestionFlag
}) => {




const [oneToFive, setOneToFive] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
})


const [piratePrompt, setPiratePrompt] = useState(true)


 













const handleAnswer = (e) => {   
  scroll.scrollTo(197);   
    // eslint-disable-next-line eqeqeq
    if(e.target.value ==  1){

      
        
        alert(`Bonne réponse ! tu possèdes maintenant ${characterInfo.keys +1} clé(s) et il te reste ${characterInfo.lives} vies`);
        
        setCharacterInfo((prev) => {
            return {
                ...prev,
                keys: characterInfo.keys + 1,
            }
        
        })
        
        setQuestionFlag(false);
        
        
    }
    else{
        
        alert(`Mauvaise réponse, il te reste ${characterInfo.lives - 1} vies, tu as toujours ${characterInfo.keys} clé(s)`);
        
        setCharacterInfo((prev) => {
            return {
                ...prev,
                lives: characterInfo.lives - 1
            }
        })
        
        setQuestionFlag(false);
       
    }
    setQuestionNumber(prev => prev +1)
} 

const readiness = () => {
    let array = [1,2,3,4,5]

    scroll.scrollToTop()

    setOneToFive(prevOneToFive => ({
        A: array.splice(Math.round(Math.random()*4),1),
        B: array.splice(Math.round(Math.random()*3),1),
        C: array.splice(Math.round(Math.random()*2),1),
        D: array.splice(Math.round(Math.random()*1),1),
        E: array[0],
    }));
    
    setPiratePrompt(false)
    
}

const bonneReponse= goodAnswer.um.toString()+goodAnswer.c.toString()+goodAnswer.d.toString()+goodAnswer.u

const OneToThree = () => {
    return Math.round(Math.random()*2+1)
}




const answers = {
    1 :{
        1: `${goodAnswer.um} UM + ${goodAnswer.c} C + ${goodAnswer.d} D + ${goodAnswer.u} U`,
        2: `${goodAnswer.um *1000} + ${goodAnswer.c *100} + ${goodAnswer.d *10} + ${goodAnswer.u}`,
        3: `${goodAnswer.um} x1000 + ${goodAnswer.c} x100 + ${goodAnswer.d} x10 + ${goodAnswer.u} x1`,
        
    },

    
    2:{
        1: `${badAnswer1.um} UM + ${badAnswer1.c} C + ${badAnswer1.d} D + ${badAnswer1.u} U`,
        2: `${badAnswer1.um *1000} + ${badAnswer1.c *100} + ${badAnswer1.d *10} + ${badAnswer1.u}`,
        3: `${badAnswer1.um} x1000 + ${badAnswer1.c} x100 + ${badAnswer1.d} x10 + ${badAnswer1.u} x1`,
       
    },
    
    3:{
        1: `${badAnswer2.um} UM + ${badAnswer2.c} C + ${badAnswer2.d} D + ${badAnswer2.u} U`,
        2: `${badAnswer2.um *1000} + ${badAnswer2.c *100} + ${badAnswer2.d *10} + ${badAnswer2.u}`,
        3: `${badAnswer2.um} x1000 + ${badAnswer2.c} x100 + ${badAnswer2.d} x10 + ${badAnswer2.u} x1`,
        
    }
    ,
    
    4:{
        1: `${badAnswer3.um} UM + ${badAnswer3.c} C + ${badAnswer3.d} D + ${badAnswer3.u} U`,
        2: `${badAnswer3.um *1000} + ${badAnswer3.c *100} + ${badAnswer3.d *10} + ${badAnswer3.u}`,
        3: `${badAnswer3.um} x1000 + ${badAnswer3.c} x100 + ${badAnswer3.d} x10 + ${badAnswer3.u} x1`,
        
    }
    ,
    
    5:{
        1: `${badAnswer4.um} UM + ${badAnswer4.c} C + ${badAnswer4.d} D + ${badAnswer4.u} U`,
        2: `${badAnswer4.um *1000} + ${badAnswer4.c *100} + ${badAnswer4.d *10} + ${badAnswer4.u}`,
        3: `${badAnswer4.um} x1000 + ${badAnswer4.c} x100 + ${badAnswer4.d} x10 + ${badAnswer4.u} x1`
    }
    }






if(!piratePrompt){
  return (
    <div className="background-question">
      <div className="questionTilesWrap">
        <h1>Question #{questionNumber} </h1>
        <p>
          Quelle est la bonne facon de décomposer le nombre {" "}
          {bonneReponse} ?
        </p>
        <p>Choix de réponses :</p>

        <div className="questionTilesButtons">
          <button onClick={handleAnswer} value={oneToFive.A}>
           <span className='letter'>A:</span>  {answers[oneToFive.A][OneToThree()]}
          </button>
          <button onClick={handleAnswer} value={oneToFive.B}>
          <span className='letter'>B:</span>   {answers[oneToFive.B][OneToThree()]}
          </button>
          <button onClick={handleAnswer} value={oneToFive.C}>
          <span className='letter'>C:</span>   {answers[oneToFive.C][OneToThree()]}
          </button>
          <button onClick={handleAnswer} value={oneToFive.D}>
          <span className='letter'>D:</span>   {answers[oneToFive.D][OneToThree()]}
          </button>
          <button onClick={handleAnswer} value={oneToFive.E}>
          <span className='letter'>E:</span>   {answers[oneToFive.E][OneToThree()]}
          </button>
        </div>
      </div>
    </div>
  );
 }
 
 else  {
    return (
      <div className="background-question">
        <div className="pirateTalk">
          {(questionNumber === 1 || questionNumber === 6 || questionNumber === 11 || questionNumber === 16) && (<img id="pirate" alt ="" src={pirate1} />)}
          {(questionNumber === 2 || questionNumber === 7 || questionNumber === 12 || questionNumber === 17) && (<img id="pirate" alt ="" src={pirate2} />)}
          {(questionNumber === 3 || questionNumber === 8 || questionNumber === 13 || questionNumber === 18) && (<img id="pirate" alt ="" src={pirate3} />)}
          {(questionNumber === 4 || questionNumber === 9 || questionNumber === 14 || questionNumber === 19) && (<img id="pirate" alt ="" src={pirate4} />)}
          {(questionNumber === 5 || questionNumber === 10 || questionNumber === 15 || questionNumber === 20) && (<img id="pirate" alt ="" src={pirate5} />)}

           
        <div className="pirateTalkText">
        <img alt ="" src={bubble} />
        <button onClick={readiness} id="ready">
          Je suis prêt
        </button>
        
      </div>
      </div>
      </div>
    )
 }
 
 
}

export default QuestionTiles
