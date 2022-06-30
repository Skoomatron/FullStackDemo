// This will be a reusable button
import React from "react";
import ColorMapper from './ColorMapper.jsx';

const ColorSubmitter = (props) => {

  return (
    <div>
      <button onClick={() => {
        props.submitButton(event);
      }}>
        Add Color
      </button>
      <ColorMapper
      textState={props.textState}
      listener={props.listener}
      dataArray={props.dataArray}/>
    </div>
  )
}

export default ColorSubmitter;