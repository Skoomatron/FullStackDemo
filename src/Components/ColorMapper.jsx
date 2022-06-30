// this will render a number of colored blocks to the DOM
import React from "react";
import TextEnter from './TextEnter.jsx';

const ColorMapper = (props) => {
  return (
    <div>
      <TextEnter textState={props.textState} listener={props.listener}/>
      {props.dataArray.map((arr, index) => {
        return <div key={Math.random()} style={{
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
