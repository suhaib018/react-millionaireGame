import React from 'react'
import "./styles.css"
const data =["100","200","300","500","1000","2000","4000","8000","16000","32000","64000","125000","250000","500000","1000000"];

const Prizes = ({isNext,id}) => {
  return (
    <div className='prizes-container'>
      {data.map((item,index)=>(
          <p style={{backgroundColor:isNext && id===index ?"#058f82":""}} className="prizes-hover"><span style={{marginRight:index+2 > 10? "40px":"50px",color:"#b5afaf"}}>{index+1}</span>${item}</p>
      ))}
    </div>
  )
}
export default Prizes