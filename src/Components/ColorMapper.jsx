// this will render a number of colored blocks to the DOM
import React from "react";
import TextEnter from './TextEnter.jsx';

const ColorMapper = (props) => {
  console.log(props.dataArray)
  return (
    <div>
      <TextEnter textState={props.textState} listener={props.listener}/>
      {props.dataArray.map((arr, index) => {
        return <div style={{
          height: '50px',
          width: '200px',
          margin: '10px',
          backgroundColor: `${arr.color}`
      }}>{arr.text}</div>
      })}
    </div>
  )
}

export default ColorMapper;
