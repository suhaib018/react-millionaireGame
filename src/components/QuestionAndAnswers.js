import React ,{useState,useEffect}from 'react'
import "./styles.css"
import { gameData } from './../config/gameData';
import Question from './question';
import { Answer } from './Answer';

const QuestionAndAnswers = ({handleClick,isClicked,backgroundColors,isTrue,questionNom}) => {
   const [data, setdata] = useState(gameData);
  return (
    <div>
        <Question  title={data[questionNom].questions}/>
        <div className='container'>
   {
      data[questionNom].answers.map((el,i) =>      
      (
        <Answer handleClick={handleClick} backgroundColors={backgroundColors} title={el} corectAnswer={data[questionNom].correctAnswer} />  
      ))
    }
        </div>
    </div>
  )
}

export default QuestionAndAnswers;

   /* <button onClik={()=> handleClick(refValue.current.innerText)} ref={refValue} style={{background:backgroundColors}}>tt</button>
          <button>test</button>
          <button>test</button> */