import React,{useState} from 'react'

export const Answer = ({title,handleClick,backgroundColors,corectAnswer}) => {
    const [selectedTitle,setSelectedTitle] = useState("");
        
    const handleOnClick=(e,title) =>{
        setSelectedTitle(e.target.innerText);
        handleClick(title);
        console.log("selectedTitle",e.target.innerText)
        }
  return (<button onClick={(e) => handleOnClick(e,title)}  style={{background:selectedTitle===title?backgroundColors:""}}>{title}</button>)
}
