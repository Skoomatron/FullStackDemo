// this will be a text field
import React from "react";
import ColorSubmitter from './ColorSubmitter.jsx';

const ColorEnter = (props) => {

  return (
    <div>
      <input
      type='text'
      name='color'
      value={props.colorState}
      placeholder='Name Of Color'
      onChange={props.listener}
      ></input>
      <ColorSubmitter
      textState={props.textState}
      submitButton={props.submitButton}
      listener={props.listener}
      dataArray={props.dataArray}/>
    </div>
  )
}

export default ColorEnter;