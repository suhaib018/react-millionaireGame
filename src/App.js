import QuestionAndAnswers from "./components/QuestionAndAnswers";
import React, { useRef, useState,useEffect } from 'react';
import Prizes from "./components/Prizes";
import { gameData } from "./config/gameData";
const colors = ["green","red"];

function App() {
  // const refValue = useRef([]);
  const [isClicked,setIsClicked] =useState(false);
  const [isTrue,setIsTrue] =useState(true);
  const [backgroundColors,setBackGroundColor] =useState("");
  const [isNext,setIsNext] =useState(false);
  const [questionNo,setQuestionNo] = useState(0);
  const [time,setTime] = useState(false);
  const [questionNom, setQuestionNom] = useState(0);
  const [isLost,setIsLost] = useState(false);

  console.log(" gameData[questionNom].correctAnswer", gameData[questionNom].correctAnswer)
  const handleClick = (e) =>{
    setIsClicked(true);
    if (e === gameData[questionNom].correctAnswer) setIsTrue(true);
    else setIsTrue(false);
  }

  useEffect(() => {
    if (isClicked) {
    const timeout1 = setTimeout(() => {
      if (isTrue) {
        setBackGroundColor(colors[0])
        setIsNext(true)
        setQuestionNo(prev => prev+1);
      } else {
        setBackGroundColor(colors[1])
      }
    }, 3000);      

  const timeOut2 =  setTimeout(()=>{
      if (isTrue){
        setQuestionNom(prev => prev+1);}
    },4000); 
  }

  },[isClicked]);

useEffect(()=>{

 
  const timeout1 =setTimeout(()=>{
    setIsClicked(false)
    // setIsTrue(false);
    setBackGroundColor("");
    if (isTrue === false) setIsLost(true);
  },4000)

})
  
  return (
    <div className="App">
      <div className="qustions-container">
        {
          isLost ?(<h2 style={{background:"red",textAlign:"center"}}> YOU Won </h2>):(
          <QuestionAndAnswers handleClick={handleClick} isClicked={isClicked}  backgroundColors={backgroundColors} isTrue={isTrue} questionNom={questionNom} />
          )
        }
      </div>
      <div>
        <Prizes isNext={isNext} id={questionNo}/>
      </div>
    </div>
  );
}
export default App;
  // console.log('isTrueBefore',isTrue)
  // console.log('isClickedBefore',isClicked)
  // setIsClicked(false);
  // console.log('isClickedAfetr',isClicked)
  // console.log('isTrueAfter',isTrue)