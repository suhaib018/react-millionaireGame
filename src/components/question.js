import React from 'react'
import "./styles.css"


const Question = ({title}) => {
  return (
    <div className='question-container'>{title}</div>
  )
}

export default Question